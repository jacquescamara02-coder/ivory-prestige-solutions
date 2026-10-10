import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import solar from "@/assets/solar-pump.jpg";
import trucks from "@/assets/trucks.jpg";
import { PageHero, Reveal, SiteShell } from "@/components/site";
import { Faq } from "@/components/blocks";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos services | Ivoire Travaux Services" },
      { name: "description", content: "Matériel et location de forage, pompes manuelles, immergées et solaires, PVC, véhicules, gravier et terrains." },
      { property: "og:title", content: "Services forage, pompes et transport | Ivoire Travaux Services" },
      { property: "og:description", content: "Dix services complémentaires pour vos projets d'eau, de chantier et de foncier." },
    ],
  }),
  staticData: { sitemap: true },
  component: Services,
});

const GROUPS = [
  { t: "Forage", img: solar, items: ["Vente de matériel de forage", "Location de machine de forage avec ou sans opérateur", "Étude de site et implantation"] },
  { t: "Pompage et hydraulique", img: solar, items: ["Pompes à motricité humaine", "Pompes immergées", "Pompes solaires", "Tuyaux et raccords PVC"] },
  { t: "Véhicules et matériaux", img: trucks, items: ["Vente et location de voitures", "Vente et location de camions", "Livraison de gravier"] },
  { t: "Foncier", img: trucks, items: ["Achat de terrains", "Vente de terrains", "Vérification des documents et accompagnement"] },
];

function Services() {
  return (
    <SiteShell>
      <PageHero eyebrow="Nos services" title="Tout pour l'eau, le chantier et le foncier." text="Du premier coup de foreuse à la livraison de gravier, nous couvrons chaque étape de votre projet." image={solar} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-5">
          {GROUPS.map((g, i) => (
            <div key={g.t} className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <img src={g.img} alt={g.t} className="aspect-[4/3] w-full rounded-lg object-cover transition-transform duration-500 hover:scale-[1.02]" loading="lazy" />
              </Reveal>
              <Reveal delay={120}>
                <p className="font-display text-6xl font-semibold text-primary/15">0{i + 1}</p>
                <h2 className="-mt-4 text-3xl font-semibold md:text-4xl">{g.t}</h2>
                <ul className="mt-6 space-y-3">
                  {g.items.map((it) => <li key={it} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{it}</li>)}
                </ul>
                <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary">Demander un devis <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <Faq />
    </SiteShell>
  );
}
