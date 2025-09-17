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
];

export default function CategoryCards() {
  return (
    <div id="categorias" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="font-display text-2xl font-bold uppercase tracking-wider">{c.title}</div>
            <div className="mt-1 inline-block rounded bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">Comprar</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
