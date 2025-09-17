import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="container mx-auto py-20">
      <div className="mx-auto max-w-xl rounded-2xl border border-border/60 bg-secondary/60 p-10 text-center">
        <div className="font-display text-5xl text-primary">404</div>
        <p className="mt-2 text-sm text-muted-foreground">Oops! Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
