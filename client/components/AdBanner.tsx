import { Link } from "react-router-dom";

interface AdBannerProps {
  image: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  to?: string;
}

export default function AdBanner({
  image,
  title,
  subtitle,
  ctaText,
  to = "/catalog",
}: AdBannerProps) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-3xl border border-border/60"
      aria-label={title ?? "Anuncio"}
    >
      <img
        src={image}
        alt={title ?? "Anuncio"}
        className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[380px] md:h-[420px]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {(title || subtitle || ctaText) && (
        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
          {title && (
            <h3 className="font-display text-3xl uppercase leading-tight tracking-wider text-white drop-shadow">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="max-w-xl text-sm text-white/85 drop-shadow">
              {subtitle}
            </p>
          )}
          {ctaText && (
            <span className="mt-2 inline-block w-fit rounded-md bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow transition group-hover:bg-primary/90">
              {ctaText}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
