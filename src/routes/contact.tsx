import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import trucks from "@/assets/trucks.jpg";
import { CONTACT, PageHero, Reveal, SiteShell } from "@/components/site";
import { MapBlock, QuoteForm } from "@/components/blocks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact et devis | Ivoire Travaux Services" },
      { name: "description", content: "Contactez Ivoire Travaux Services à Bouaké : 07 89 89 89 63, devis gratuit sous 24 heures." },
      { property: "og:title", content: "Contact | Ivoire Travaux Services" },
      { property: "og:description", content: "Devis gratuit pour forage, pompes, véhicules, gravier et terrains." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const cards = [
    { i: Phone, t: "Téléphone", v: CONTACT.phone, h: CONTACT.phoneHref },
    { i: MessageCircle, t: "WhatsApp", v: "+225 07 50 14 41 89", h: `https://wa.me/${CONTACT.whatsapp}` },
    { i: Mail, t: "Email", v: CONTACT.email, h: `mailto:${CONTACT.email}` },
    { i: MapPin, t: "Adresse", v: CONTACT.address, h: "https://maps.google.com/?q=Air+France+3+Bouaké" },
  ];
  return (
    <SiteShell>
      <PageHero eyebrow="Contact" title="Parlons de votre projet." text="Devis gratuit et sans engagement, réponse sous 24 heures." image={trucks} />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <a href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-lg border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"><c.i className="h-5 w-5" /></span>
                  <span className="min-w-0"><span className="block text-xs uppercase tracking-wider text-muted-foreground">{c.t}</span><span className="block break-words font-medium">{c.v}</span></span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="lg:col-span-3" delay={120}><QuoteForm /></Reveal>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-5"><Reveal><MapBlock /></Reveal></div>
      </section>
    </SiteShell>
  );
}
