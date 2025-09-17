import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-grid" />
      <div className="container relative mx-auto grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
        <div className="order-2 md:order-1">
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            <span className="text-foreground/80">¿Buscas</span>
            <br />
            <span className="text-primary">Fuerza?</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Suplementos premium para rendimiento, recuperación y resultados. Bulking, cutting o potencia máxima: aliméntate mejor.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/catalog"
              className="rounded-xl bg-primary px-6 py-3 font-semibold uppercase tracking-wider text-primary-foreground transition hover:bg-primary/90"
            >
              Comprar ahora
            </Link>
            <a
              href="#marcas"
              className="rounded-xl border border-border/60 px-6 py-3 font-semibold uppercase tracking-wider text-foreground/90 hover:border-primary hover:text-primary"
            >
              Marcas top
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517832606299-7ae9b720a694?q=80&w=1800&auto=format&fit=crop"
              alt="Atleta levantando pesas"
              className="relative z-10 rounded-2xl border border-border/60 object-cover shadow-[0_0_0_1px_hsl(var(--border))]"
            />
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-xl bg-accent/30 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-primary/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
