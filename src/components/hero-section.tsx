import { useState, useEffect, useRef } from "react";

const images = [
  {
    url: "/assets/slide_1.jpg",
    alt: "Children in speech therapy session",
  },
  {
    url: "/assets/slide_2.jpg",
    alt: "Child playing with therapist",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section
      className="
        relative w-full
        h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]
        flex items-center justify-center
        bg-gradient-to-br from-blue-50 via-purple-25 to-teal-25
        overflow-hidden
      "
      style={{
        aspectRatio: "12 / 5",
        minHeight: "180px",
        maxHeight: "500px",
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <img
            key={img.url}
            src={img.url}
            alt={img.alt}
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${idx === current ? "opacity-100" : "opacity-0 z-0"}
            `}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              minHeight: "180px",
              maxHeight: "500px",
            }}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
      </div>
      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Controls */}
        <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="bg-white/80 hover:bg-white text-soft-charcoal rounded-full shadow-lg p-2 sm:p-2.5 transition disabled:opacity-50"
            style={{ outline: "none" }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M13 16l-5-6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="bg-white/80 hover:bg-white text-soft-charcoal rounded-full shadow-lg p-2 sm:p-2.5 transition disabled:opacity-50"
            style={{ outline: "none" }}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M7 4l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
