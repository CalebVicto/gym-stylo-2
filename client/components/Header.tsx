import { Link, NavLink } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex items-center gap-4 py-3">
        <Link to="/" className="shrink-0">
          <span className="font-display text-2xl font-bold uppercase tracking-wider text-primary">IronFuel</span>
        </Link>
        <div className="hidden w-2/5 md:block">
          <SearchBar />
        </div>
        <nav className="ml-auto flex items-center gap-6 text-sm uppercase tracking-wider">
          <NavLink to="/catalog" className={({ isActive }) => isActive ? "text-primary" : "text-foreground/80 hover:text-foreground"}>Shop</NavLink>
          <a href="#brands" className="text-foreground/80 hover:text-foreground">Brands</a>
          <a href="#categories" className="text-foreground/80 hover:text-foreground">Categories</a>
          <Link to="/cart" className="flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 hover:border-primary hover:text-primary">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </nav>
      </div>
      <div className="container mx-auto block pb-3 md:hidden">
        <SearchBar size="md" />
      </div>
    </header>
  );
}
