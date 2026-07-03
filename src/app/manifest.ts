import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Power Fitness — Gym in Chennai",
    short_name: "Power Fitness",
    description:
      "Chennai's neighborhood gym offering Strength Training, Weight Loss, CrossFit, Zumba and Personal Training.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0C10",
    theme_color: "#0B0C10",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
