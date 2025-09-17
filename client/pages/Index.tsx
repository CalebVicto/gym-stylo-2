import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import CategoryCards from "@/components/CategoryCards";
import ProductBanners from "@/components/ProductBanners";
import FeaturedProducts from "@/components/FeaturedProducts";
import Goals from "@/components/Goals";
import FAQ from "@/components/FAQ";
import AdBanner from "@/components/AdBanner";
import TrustBar from "@/components/TrustBar";

export default function Index() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <section id="marcas" className="relative py-8 md:py-12">
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-muted/40 to-secondary/40">
          <div className="container mx-auto px-4 py-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
                Marcas de confianza
              </h2>
              <div className="text-xs text-muted-foreground">
                Proveedores certificados • Calidad garantizada
              </div>
            </div>
            <BrandCarousel />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8 md:py-12" id="categorias">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-secondary/60 via-muted/40 to-background/40 p-6 backdrop-blur bg-noise">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wider">
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
        <div
          className="rounded-3xl border border-border/60 bg-center bg-cover p-6 backdrop-blur"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.25)), url('https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          <ProductBanners />
        </div>
      </div>

      {/* Ads section */}
      <section className="container mx-auto py-8 md:py-12">
        <h2 className="mb-4 font-display text-3xl md:text-4xl uppercase tracking-wider">Anuncios</h2>
        <AdBanner
          image="https://cdn.builder.io/api/v1/image/assets%2Fdecd85479f4c448b8692e5839094666d%2Ff57eff3720a44e5eb2db90823324754f?format=webp&width=1600"
          title="¡Manos a la obra!"
          subtitle="Construye tu cuerpo, tu mente y tu vida. Programas, suplementos y equipo para llevar tu rutina al siguiente nivel."
          ctaText="Comprar ahora"
          to="/catalog"
        />
      </section>

      <FeaturedProducts />

      <div className="container mx-auto">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-white via-secondary/40 to-muted/30 p-6">
          <Goals />
        </div>
      </div>

      <section className="container mx-auto py-8 md:py-12">
        <div
          className="rounded-2xl border border-border/60 bg-center bg-cover p-6 text-center backdrop-blur"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.25)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          <div className="font-display text-3xl md:text-4xl text-white">¿Quieres definirte?</div>
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
