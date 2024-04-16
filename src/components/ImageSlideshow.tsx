import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

export function ImageSlideshow({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="relative min-h-unit-8xl grid place-items-center">
      {images.map((src, i) => (
        <img
          src={src}
          className="inset-0 absolute transition max-h-unit-8xl mx-auto h-full object-contain"
          style={{
            opacity: i === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
