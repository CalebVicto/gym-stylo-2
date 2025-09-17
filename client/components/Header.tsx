import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-[#000000] text-white">
      <div className="container mx-auto grid grid-cols-[auto,1fr,auto] items-center gap-4 py-3">
        {/* Left: Brand */}
        <Link to="/" className="shrink-0">
          <span className="font-display text-xl font-bold uppercase tracking-wider text-primary">
            Stylo Fitness Suplement
          </span>
        </Link>

        {/* Center: Centered Search */}
        <div className="mx-auto w-full max-w-xl">
          <SearchBar size="sm" />
        </div>

        {/* Right: Cart button */}
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart" aria-label="Carrito">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="container mx-auto block pb-3 md:hidden">
        <SearchBar size="sm" />
      </div>
    </header>
  );
}
