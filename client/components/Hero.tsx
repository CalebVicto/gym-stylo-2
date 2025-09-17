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
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    draggable: true,
  });
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <div className="pointer-events-auto max-w-3xl rounded-2xl bg-black/40 p-6 text-center text-white shadow-xl ring-1 ring-white/20 backdrop-blur-sm">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider">Construye tu cuerpo. Construye tu mente.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-white/85">Suplementos, programas y equipo para llevar tu rutina al siguiente nivel.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a href="/catalog" className="rounded-md bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">Ver catálogo</a>
            <a href="/catalog?search=ofertas" className="rounded-md border border-white/60 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20">Ofertas</a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Anterior"
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-black/60 bg-black/70 p-2 text-white shadow backdrop-blur transition hover:bg-black"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Siguiente"
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-black/60 bg-black/70 p-2 text-white shadow backdrop-blur transition hover:bg-black"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === selectedIndex ? "bg-primary" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
