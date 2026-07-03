import os from 'os';
import qrcode from 'qrcode-terminal';

async function run() {
  let ip;
  try {
    const internalIpModule = await import('internal-ip');
    ip = await internalIpModule.internalIpV4();
  } catch (err) {
    // Fallback to built-in os module if package fails
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      if (interfaces[name]) {
        for (const net of interfaces[name]) {
          // Check for IPv4 and ensure it's an external network interface
          if ((net.family === 'IPv4' || net.family === 4) && !net.internal) {
            ip = net.address;
            break;
          }
        }
      }
      if (ip) break;
    }
  }

  if (ip) {
    const url = `http://${ip}:3000`;
    console.log(`\n\x1b[36mScan this QR code to view on your mobile device:\x1b[0m`);
    console.log(`\x1b[32m${url}\x1b[0m\n`);
    qrcode.generate(url, { small: true });
  } else {
    console.log("\n⚠️ Could not determine local IP address. Launching dev server directly...\n");
  }
}

run();