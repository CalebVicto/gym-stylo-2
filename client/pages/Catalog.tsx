import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "proteins" | "creatine" | "fat-burners";
  inStock: boolean;
}

const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Proteína de Suero Isolada",
    price: 39.99,
    category: "proteins",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "p2",
    name: "Creatina Monohidratada Micronizada",
    price: 19.99,
    category: "creatine",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "p3",
    name: "Quemador Termogénico",
    price: 29.99,
    category: "fat-burners",
    inStock: false,
    image:
      "https://images.unsplash.com/photo-1559757175-08e9d45a9696?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "p4",
    name: "Proteína de Suero Blend",
    price: 34.99,
    category: "proteins",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "p5",
    name: "Creatina HCL",
    price: 24.99,
    category: "creatine",
    inStock: true,
    image:
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [precioMax, setPrecioMax] = useState<number>(80);

  const category = (params.get("category") as Product["category"]) || "";
  const search = params.get("search")?.toLowerCase() || "";

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const cat = category ? p.category === category : true;
      const s = search ? p.name.toLowerCase().includes(search) : true;
      const avail = soloDisponibles ? p.inStock : true;
      const price = p.price <= precioMax;
      return cat && s && avail && price;
    });
  }, [category, search, soloDisponibles, precioMax]);

  const updateCategory = (c: Product["category"] | "") => {
    const next = new URLSearchParams(params);
    if (c) next.set("category", c);
    else next.delete("category");
    setParams(next, { replace: true });
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl uppercase tracking-wider">
            Catálogo
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Explora nuestra selección de suplementos de alto rendimiento.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[260px,1fr]">
        <aside className="rounded-xl border border-border/60 bg-secondary/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Filtros
          </div>
          <div className="mt-4 space-y-3">
            <div>
              <div className="mb-2 text-sm font-semibold">Categoría</div>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { key: "", label: "Todas" },
                    { key: "proteins", label: "Proteínas" },
                    { key: "creatine", label: "Creatina" },
                    { key: "fat-burners", label: "Quemadores" },
                  ] as const
                ).map((c) => (
                  <button
                    key={c.key}
                    onClick={() => updateCategory(c.key as any)}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      (category || "") === (c.key as any)
                        ? "border-primary text-primary"
                        : "border-border/60 text-foreground/80 hover:border-primary/60 hover:text-primary"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 text-sm font-semibold">
                Precio máx. ${""}
                {precioMax.toFixed(0)}
              </div>
              <input
                type="range"
                min={10}
                max={100}
                step={1}
                value={precioMax}
                onChange={(e) => setPrecioMax(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[hsl(var(--primary))]"
                checked={soloDisponibles}
                onChange={(e) => setSoloDisponibles(e.target.checked)}
              />
              Solo disponibles
            </label>
          </div>
        </aside>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-secondary/60"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="space-y-2 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.category.replace("-", " ")}
                </div>
                <h3 className="line-clamp-2 font-semibold">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="font-display text-xl text-primary">
                    ${p.price.toFixed(2)}
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${p.inStock ? "text-success" : "text-muted-foreground"}`}
                  >
                    {p.inStock ? "En stock" : "Agotado"}
                  </span>
                </div>
                <Button className="mt-2 w-full rounded-lg bg-primary uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
                  Agregar al carrito
                </Button>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-xl border border-border/60 p-8 text-center text-sm text-muted-foreground">
              No se encontraron productos. Ajusta tus filtros.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
