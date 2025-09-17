import { Button } from "@/components/ui/button";

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
];

export default function FeaturedProducts() {
  return (
    <section id="destacados" className="container mx-auto py-8 md:py-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl uppercase tracking-wider">Productos destacados</h2>
        <a href="/catalog" className="text-sm uppercase tracking-wider text-primary hover:underline">Ver catálogo</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-2xl border border-border/60 bg-secondary/60">
            <div className="relative">
              <img src={p.image} alt={p.name} className="h-48 w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
              <span className="absolute left-3 top-3 rounded bg-accent px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">{p.tag}</span>
            </div>
            <div className="space-y-2 p-4">
              <h3 className="line-clamp-1 font-semibold">{p.name}</h3>
              <div className="font-display text-xl text-primary">${p.price.toFixed(2)}</div>
              <Button className="w-full rounded-lg bg-primary uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
                Agregar al carrito
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
