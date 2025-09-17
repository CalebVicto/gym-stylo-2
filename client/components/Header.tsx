import { Link, NavLink } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto grid grid-cols-[auto,1fr,auto] items-center gap-4 py-3">
        {/* Left: Brand */}
        <Link to="/" className="shrink-0">
          <span className="font-display text-xl font-bold uppercase tracking-wider text-primary">Stylo Fitness Suplement</span>
        </Link>

        {/* Center: Menu */}
        <nav className="mx-auto hidden items-center gap-6 text-xs uppercase tracking-wider md:flex">
          <NavLink to="/catalog" className={({ isActive }) => (isActive ? "text-primary" : "text-foreground/80 hover:text-foreground")}>Tienda</NavLink>
          <a href="#marcas" className="text-foreground/80 hover:text-foreground">Marcas</a>
          <a href="#categorias" className="text-foreground/80 hover:text-foreground">Categorías</a>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-primary" : "text-foreground/80 hover:text-foreground")}>Carrito</NavLink>
        </nav>

        {/* Right: Search + Cart button */}
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:block">
            <SearchBar size="sm" className="w-[260px] lg:w-[320px]" />
          </div>
          <Link to="/cart" className="flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 hover:border-primary hover:text-primary">
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
