"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="my-6">
      <div className="relative overflow-hidden rounded-lg border border-border/50">
        <Image
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          width={800}
          height={450}
          className="w-full"
        />
        {images.length > 1 && (
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent p-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      {images[selectedIndex].caption && (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          {images[selectedIndex].caption}
        </p>
      )}
    </div>
  );
}