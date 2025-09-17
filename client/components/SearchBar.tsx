import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface Props {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SearchBar({ className, size = "lg" }: Props) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [q, setQ] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const qp = params.get("search") || params.get("q") || "";
    setQ(qp);
  }, [params]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    navigate(`/catalog${query ? `?search=${encodeURIComponent(query)}` : ""}`);
  };

  const sizes = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg",
  } as const;

  return (
    <form onSubmit={onSubmit} className={cn("w-full", className)}>
      <div
        className={cn(
          "group relative flex items-center rounded-xl border border-input bg-secondary text-foreground transition focus-within:ring-2 focus-within:ring-ring",
          sizes[size],
        )}
      >
        <Search className="pointer-events-none absolute left-4 h-5 w-5 text-muted-foreground" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search proteins, creatine, fat burners..."
          className={cn(
            "w-full bg-transparent pl-12 pr-4 outline-none placeholder:text-muted-foreground/70",
          )}
        />
        <button
          type="submit"
          className="absolute right-2 rounded-lg bg-primary px-4 py-2 font-semibold uppercase tracking-wide text-primary-foreground transition hover:bg-primary/90"
        >
          Search
        </button>
      </div>
    </form>
  );
}
