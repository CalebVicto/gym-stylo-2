import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="container mx-auto py-8 md:py-12">
      <h2 className="mb-4 font-display text-xl uppercase tracking-wider">
        Preguntas frecuentes
      </h2>
      <div className="rounded-2xl border border-border/60 bg-secondary/60 p-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Cuánto tarda el envío?</AccordionTrigger>
            <AccordionContent>
              Entrega 24/7 en todo el país. Los tiempos varían entre 24 y 72
              horas según tu ubicación.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Aceptan devoluciones?</AccordionTrigger>
            <AccordionContent>
              Sí, dentro de los primeros 7 días si el producto está sellado y en
              perfectas condiciones.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Son productos originales?</AccordionTrigger>
            <AccordionContent>
              Trabajamos solo con proveedores certificados y marcas oficiales.
              Garantía de autenticidad.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
