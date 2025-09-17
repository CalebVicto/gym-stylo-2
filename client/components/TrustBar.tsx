import { ShieldCheck, CreditCard, Timer, BadgeCheck, MessageSquareText } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Compra segura",
    desc: "Protección en cada pedido",
  },
  {
    icon: CreditCard,
    title: "Pago seguro",
    desc: "Diversos métodos confiables",
  },
  {
    icon: Timer,
    title: "Entrega rápida",
    desc: "Envíos 24/48h",
  },
  {
    icon: BadgeCheck,
    title: "Certificaciones",
    desc: "Calidad en nuestros productos",
  },
  {
    icon: MessageSquareText,
    title: "Respuesta ágil",
    desc: "Atención al cliente eficiente",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Ventajas" className="relative">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-b from-muted/60 to-secondary/40">
        <div className="container mx-auto px-4 py-6">
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-white text-foreground shadow-sm ring-1 ring-border p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
