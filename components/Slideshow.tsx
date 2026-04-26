import React, { useCallback, useEffect, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const SLIDES = [
  "/slideshow/charlie1.jpeg",
  "/slideshow/charlie2.jpeg",
  "/slideshow/cohen1.jpeg",
  "/slideshow/cohen2.jpeg",
  "/slideshow/denver1.jpeg",
  "/slideshow/denver2.jpeg",
  "/slideshow/eden1.jpeg",
  "/slideshow/eden2.jpeg",
  "/slideshow/elliot1.jpeg",
  "/slideshow/elliot2.jpeg",
  "/slideshow/flag1.jpeg",
  "/slideshow/gabriel1.jpeg",
  "/slideshow/gabriel2.jpeg",
  "/slideshow/gabriel3.jpeg",
  "/slideshow/george1.jpeg",
  "/slideshow/george2.jpeg",
  "/slideshow/riley1.jpeg",
  "/slideshow/ruben1.jpeg",
  "/slideshow/ruben2.jpeg",
  "/slideshow/team1.jpeg",
  "/slideshow/team2.jpeg",
  "/slideshow/team3.jpeg",
  "/slideshow/team4.jpeg",
];

const shuffle = (array: string[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const OPTIONS = { loop: true, speed: 4 };

export default function Slideshow() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto play
  useEffect(() => {
    if (!emblaApi) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isHovered.current) {
      intervalRef.current = setInterval(scrollNext, 3500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi, scrollNext]);

  // Pause on hover
  const handleMouseEnter = () => {
    isHovered.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const handleMouseLeave = () => {
    isHovered.current = false;
    intervalRef.current = setInterval(scrollNext, 3500);
  };

  const shuffledSlides = useMemo(() => shuffle(SLIDES), []);

  return (
    <div style={{ position: "relative", maxWidth: 500, margin: "2rem auto" }}>
      <div
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          overflow: "hidden",
          borderRadius: "1.2rem",
          background: "#111",
        }}
      >
        <div style={{ display: "flex" }}>
          {shuffledSlides.map((src, idx) => (
            <div
              key={src}
              style={{
                flex: "0 0 100%",
                minWidth: 0,
                position: "relative",
                height: 320,
                background: "#222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={src}
                alt={`Slideshow ${idx + 1}`}
                width={400}
                height={320}
                style={{
                  objectFit: "contain",
                  maxHeight: 320,
                  maxWidth: "100%",
                }}
                sizes="(max-width: 600px) 100vw, 400px"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.6)",
          color: "#ffd600",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          fontSize: 24,
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        &#8592;
      </button>
      <button
        aria-label="Next slide"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.6)",
          color: "#ffd600",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          fontSize: 24,
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        &#8594;
      </button>
    </div>
  );
}
