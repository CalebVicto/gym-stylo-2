import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import CategoryCards from "@/components/CategoryCards";
import ProductBanners from "@/components/ProductBanners";
import FeaturedProducts from "@/components/FeaturedProducts";
import Goals from "@/components/Goals";
import FAQ from "@/components/FAQ";

export default function Index() {
  return (
    <div>
      <Hero />
      <section id="marcas" className="container mx-auto py-8 md:py-12">
        <div className="rounded-3xl border border-border/60 bg-secondary p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl uppercase tracking-wider text-foreground/90">
              Marcas de confianza
            </h2>
            <div className="text-xs text-muted-foreground">
              Proveedores certificados • Calidad garantizada
            </div>
          </div>
          <BrandCarousel />
        </div>
      </section>

      <section className="container mx-auto py-8 md:py-12" id="categorias">
        <div className="rounded-3xl border border-border/60 bg-secondary p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl uppercase tracking-wider">
              Categorías destacadas
            </h2>
            <a
              href="/catalog"
              className="text-sm uppercase tracking-wider text-primary hover:underline"
            >
              Ver todo
            </a>
          </div>
          <CategoryCards />
        </div>
      </section>

      <div className="container mx-auto">
        <div className="rounded-3xl border border-border/60 bg-secondary p-6">
          <ProductBanners />
        </div>
      </div>

      <FeaturedProducts />

      <div className="container mx-auto">
        <div className="rounded-3xl border border-border/60 bg-secondary p-6">
          <Goals />
        </div>
      </div>

      <section className="container mx-auto py-8 md:py-12">
        <div className="rounded-2xl border border-border/60 bg-secondary/60 p-6 text-center">
          <div className="font-display text-2xl">¿Quieres definirte?</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Únete a nuestro programa de fidelidad para bundles exclusivos, guías
            de nutrición y descuentos de temporada.
          </p>
          <a
            href="/catalog"
            className="mt-4 inline-block rounded-lg bg-primary px-5 py-3 font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            Ver bundles
          </a>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
