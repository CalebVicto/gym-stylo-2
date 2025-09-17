import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    key: "proteins",
    title: "Proteínas",
    image:
      "https://images.unsplash.com/photo-1596568353620-39f9890c1aab?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "creatine",
    title: "Creatina",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "fat-burners",
    title: "Quemadores",
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "vitamins",
    title: "Vitaminas",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "preworkout",
    title: "Pre-entreno",
    image:
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "aminos",
    title: "Aminoácidos",
    image:
      "https://images.unsplash.com/photo-1598550880863-4fc0a3d0d00d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "mass-gainers",
    title: "Ganadores de peso",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop",
  },
  {
    key: "omega-3",
    title: "Omega-3",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CategoryCards() {
  return (
    <div
      id="categorias"
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      {CATEGORIES.map((c) => (
        <Link
          to={`/catalog?category=${c.key}`}
          key={c.key}
          className="group relative block overflow-hidden rounded-2xl border border-border/60"
        >
          <img
            src={c.image}
            alt={c.title}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 md:h-72"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="font-display text-2xl font-bold uppercase tracking-wider">
              {c.title}
            </div>
            <div className="mt-1 inline-block rounded bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Comprar
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
