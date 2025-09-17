import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="container mx-auto py-20">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-secondary/60 p-10 text-center">
        <h1 className="font-display text-3xl uppercase tracking-wider">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta página está lista para construirse. Dime qué contenido quieres y la generaré.
        </p>
        <Link
          to="/catalog"
          className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
        >
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}
