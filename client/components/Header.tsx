import { Link, NavLink } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/40 bg-black/90 text-white backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container mx-auto grid grid-cols-[auto,1fr,auto] items-center gap-4 py-3">
        {/* Left: Brand */}
        <Link to="/" className="shrink-0">
          <span className="font-display text-xl font-bold uppercase tracking-wider text-primary">Stylo Fitness Suplement</span>
        </Link>

        {/* Center: Menu */}
        <nav className="mx-auto hidden items-center gap-6 text-xs uppercase tracking-wider md:flex">
          <NavLink to="/catalog" className={({ isActive }) => (isActive ? "text-primary" : "text-white/80 hover:text-white")}>Tienda</NavLink>
          <a href="#marcas" className="text-white/80 hover:text-white">Marcas</a>
          <a href="#categorias" className="text-white/80 hover:text-white">Categorías</a>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-primary" : "text-white/80 hover:text-white")}>Carrito</NavLink>
        </nav>

        {/* Right: Search + Cart button */}
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:block">
            <SearchBar size="sm" className="w-[260px] lg:w-[320px]" />
          </div>
          <Link to="/cart" className="flex items-center gap-2 rounded-md border border-white/30 px-3 py-2 text-white hover:border-primary hover:text-primary">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden md:inline">Carrito</span>
          </Link>
        </div>
      </div>

      {/* Mobile search */}
      <div className="container mx-auto block pb-3 md:hidden">
        <SearchBar size="sm" />
      </div>
    </header>
  );
}
