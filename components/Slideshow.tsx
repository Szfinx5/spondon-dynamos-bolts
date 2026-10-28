import React, { useCallback, useEffect, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "../styles/Slideshow.module.css";

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
    <div className={styles.slideshow}>
      <div
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.viewport}
      >
        <div className={styles.track}>
          {shuffledSlides.map((src, idx) => (
            <div key={src} className={styles.slide}>
              <Image
                src={src}
                alt={`Bolts photo ${idx + 1}`}
                width={800}
                height={600}
                className={styles.image}
                sizes="(max-width: 860px) 100vw, 800px"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        aria-label="Previous slide"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className={`${styles.arrow} ${styles.prev}`}
      >
        &#8592;
      </button>
      <button
        aria-label="Next slide"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className={`${styles.arrow} ${styles.next}`}
      >
        &#8594;
      </button>
    </div>
  );
}
