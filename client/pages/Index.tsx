import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel";
import CategoryCards from "@/components/CategoryCards";

export default function Index() {
  return (
    <div>
      <Hero />
      <section id="brands" className="container mx-auto py-8 md:py-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl uppercase tracking-wider text-foreground/90">Trusted Brands</h2>
          <div className="text-xs text-muted-foreground">Certified suppliers • Quality guaranteed</div>
        </div>
        <BrandCarousel />
      </section>

      <section className="container mx-auto py-8 md:py-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl uppercase tracking-wider">Featured Categories</h2>
          <a href="/catalog" className="text-sm uppercase tracking-wider text-primary hover:underline">View All</a>
        </div>
        <CategoryCards />
      </section>

      <section className="container mx-auto py-8 md:py-12">
        <div className="rounded-2xl border border-border/60 bg-secondary/60 p-6 text-center">
          <div className="font-display text-2xl">Want to Get Shredded?</div>
          <p className="mt-2 text-sm text-muted-foreground">Join our loyalty program for exclusive bundles, nutrition guides, and seasonal discounts.</p>
          <a href="/catalog" className="mt-4 inline-block rounded-lg bg-primary px-5 py-3 font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90">Explore Bundles</a>
        </div>
      </section>
    </div>
  );
}
