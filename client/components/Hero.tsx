import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517963628607-235ccdd5476e?q=80&w=2400&auto=format&fit=crop",
];

export default function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start", draggable: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => {
      try {
        embla.scrollNext();
      } catch {}
    }, 3500);
    return () => clearInterval(id);
  }, [embla, onSelect]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <section className="relative w-full">
      <div className="relative -mx-0 w-screen overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((src, i) => (
            <div key={i} className="relative shrink-0 basis-full">
              <div className="h-[56vh] min-h-[320px] w-full sm:h-[64vh] md:h-[72vh]">
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Anterior"
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-white/70 p-2 text-foreground shadow backdrop-blur transition hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Siguiente"
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border/60 bg-white/70 p-2 text-foreground shadow backdrop-blur transition hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === selectedIndex ? "bg-primary" : "bg-foreground/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
