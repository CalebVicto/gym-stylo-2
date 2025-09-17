import { Link } from "react-router-dom";

const GOALS = [
  {
    key: "bulking",
    title: "Ganancia muscular",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    to: "/catalog?search=bulking",
  },
  {
    key: "cutting",
    title: "Definición",
    image:
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1600&auto=format&fit=crop",
    to: "/catalog?search=cutting",
  },
  {
    key: "performance",
    title: "Rendimiento",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
    to: "/catalog?search=performance",
  },
];

export default function Goals() {
  return (
    <section id="objetivos" className="container mx-auto py-8 md:py-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
          ¿Cuál es tu objetivo?
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GOALS.map((g) => (
          <Link
            key={g.key}
            to={g.to}
            className="group relative block overflow-hidden rounded-2xl border border-border/60 shadow-sm"
          >
            <img
              src={g.image}
              alt={g.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="font-display text-2xl uppercase tracking-wider drop-shadow">
                {g.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
