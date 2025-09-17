import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FEATURED = [
  {
    id: "f1",
    name: "Whey Isolate 2kg",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop",
    tag: "Top Ventas",
  },
  {
    id: "f2",
    name: "Creatina Monohidratada 300g",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1600&auto=format&fit=crop",
    tag: "Esencial",
  },
  {
    id: "f3",
    name: "Pre-Entreno Nitro",
    price: 32.99,
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
    tag: "Energía",
  },
  {
    id: "f4",
    name: "Vitaminas Complejas",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    tag: "Salud",
  },
  {
    id: "f5",
    name: "Aminoácidos BCAA",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1598550880863-4fc0a3d0d00d?q=80&w=1600&auto=format&fit=crop",
    tag: "Recuperación",
  },
];

export default function FeaturedProducts() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
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
    <section id="destacados" className="container mx-auto py-8 md:py-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
          Productos destacados
        </h2>
        <a
          href="/catalog"
          className="text-sm uppercase tracking-wider text-primary hover:underline"
        >
          Ver catálogo
        </a>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {FEATURED.map((p) => (
              <div
                key={p.id}
                className="min-w-0 shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 pr-4"
              >
                <article className="group overflow-hidden rounded-2xl border border-border/60 bg-secondary/60">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded bg-accent px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                      {p.tag}
                    </span>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="line-clamp-1 font-semibold">{p.name}</h3>
                    <div className="font-display text-xl text-primary">
                      ${p.price.toFixed(2)}
                    </div>
                    <Button className="w-full rounded-lg bg-primary uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
                      Agregar al carrito
                    </Button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Anterior"
          onClick={scrollPrev}
          className="absolute -left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border/60 bg-white/80 p-2 text-foreground shadow md:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Siguiente"
          onClick={scrollNext}
          className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-border/60 bg-white/80 p-2 text-foreground shadow md:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
