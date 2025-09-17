import { Link } from "react-router-dom";

export default function ProductBanners() {
  return (
    <section className="container mx-auto grid gap-5 py-8 md:grid-cols-3 md:py-12">
      <Banner
        to="/catalog?category=proteins"
        image="https://images.unsplash.com/photo-1517963628607-235ccdd5476e?q=80&w=1800&auto=format&fit=crop"
        title="Proteínas"
        subtitle="Musculo y rendimiento"
      />
      <Banner
        to="/catalog?category=creatine"
        image="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1800&auto=format&fit=crop"
        title="Creatina"
        subtitle="Fuerza explosiva"
      />
      <Banner
        to="/catalog?category=fat-burners"
        image="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1800&auto=format&fit=crop"
        title="Quemadores"
        subtitle="Define tu físico"
      />
    </section>
  );
}

function Banner({
  to,
  image,
  title,
  subtitle,
}: {
  to: string;
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-2xl border border-border/60"
    >
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <div className="font-display text-2xl uppercase tracking-wider">
          {title}
        </div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
    </Link>
  );
}
