import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Gallery | LUMECASA",
  description: "Explore our stunning lighting installations, architectural designs, and behind-the-scenes videos.",
};

export default async function GalleryPage() {
  const publicGalleryPath = path.join(process.cwd(), "public", "gallery");
  
  let images: string[] = [];
  let videos: string[] = [];

  try {
    const imagesDir = path.join(publicGalleryPath, "images");
    if (fs.existsSync(imagesDir)) {
      images = fs.readdirSync(imagesDir)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map(file => `/gallery/images/${encodeURIComponent(file)}`);
    }

    const videosDir = path.join(publicGalleryPath, "videos");
    if (fs.existsSync(videosDir)) {
      videos = fs.readdirSync(videosDir)
        .filter(file => /\.(mp4|webm)$/i.test(file))
        // Exclude the screen recording reference video
        .filter(file => !file.startsWith("Recording 2026"))
        .map(file => `/gallery/videos/${encodeURIComponent(file)}`);
    }
  } catch (error) {
    console.error("Error reading gallery directories:", error);
  }

  return <GalleryClient images={images} videos={videos} />;
}
