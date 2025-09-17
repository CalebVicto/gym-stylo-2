import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const BRANDS = [
  "Optimum Nutrition",
  "MuscleTech",
  "Dymatize",
  "BSN",
  "MyProtein",
  "Cellucor",
  "Universal",
  "Rule 1",
  "Ghost",
  "Kaged",
];

export default function BrandCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });

  useEffect(() => {
    if (!emblaApi) return;
    let raf = 0;
    const autoScroll = () => {
      if (!emblaApi) return;
      emblaApi.scrollBy(0.002, true);
      raf = requestAnimationFrame(autoScroll);
    };
    raf = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(raf);
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {BRANDS.concat(BRANDS).map((b, i) => (
          <div key={i} className="shrink-0 basis-1/3 sm:basis-1/5 md:basis-1/6 lg:basis-1/8">
            <div className="mx-3 my-4 rounded-lg border border-border/50 bg-secondary/60 px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary">
              {b}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
