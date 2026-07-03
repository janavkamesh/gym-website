import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0C10',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#E63946" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.4 14.4l-4.8-4.8" />
          <path d="M6.8 20.8l-4-4a2.8 2.8 0 010-4l1.6-1.6 8 8-1.6 1.6a2.8 2.8 0 01-4 0z" />
          <path d="M17.2 3.2l4 4a2.8 2.8 0 010 4l-1.6 1.6-8-8 1.6-1.6a2.8 2.8 0 014 0z" />
          <path d="M9.6 19.2l1.6-1.6" />
          <path d="M4.8 14.4l1.6-1.6" />
          <path d="M19.2 9.6l-1.6 1.6" />
          <path d="M14.4 4.8l-1.6 1.6" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
