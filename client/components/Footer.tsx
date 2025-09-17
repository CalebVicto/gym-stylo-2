export default function Footer() {
  return (
    <footer className="mt-16 border-t border-transparent bg-gradient-to-b from-[#e65100] to-[#000000] text-white">
      <div className="container mx-auto grid gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold uppercase tracking-wider text-white">
            Stylo Fitness Suplement
          </div>
          <p className="mt-2 text-sm text-white/80">
            Nutrición deportiva de alto rendimiento. Entrega 24/7 en todo el
            país.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
            Tienda
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a
                href="/catalog?category=proteins"
                className="hover:text-primary"
              >
                Proteínas
              </a>
            </li>
            <li>
              <a
                href="/catalog?category=creatine"
                className="hover:text-primary"
              >
                Creatina
              </a>
            </li>
            <li>
              <a
                href="/catalog?category=fat-burners"
                className="hover:text-primary"
              >
                Quemadores
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
            Soporte
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#" className="hover:text-primary">
                Envíos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Devoluciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
            Síguenos
          </div>
          <div className="space-x-3 text-sm text-white/80">
            <a href="#" className="hover:text-primary">
              Instagram
            </a>
            <a href="#" className="hover:text-primary">
              TikTok
            </a>
            <a href="#" className="hover:text-primary">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Stylo Fitness Suplement. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
