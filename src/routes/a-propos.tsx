import { createFileRoute } from "@tanstack/react-router";
import { Target, HeartHandshake, Award } from "lucide-react";
import trucks from "@/assets/trucks.jpg";
import solar from "@/assets/solar-pump.jpg";
import { CountUp, PageHero, Reveal, SectionTitle, SiteShell } from "@/components/site";
import { Reviews } from "@/components/blocks";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos | Ivoire Travaux Services, Bouaké" },
      { name: "description", content: "Découvrez Ivoire Travaux Services, entreprise de forage, pompage, transport et foncier basée à Bouaké." },
      { property: "og:title", content: "À propos d'Ivoire Travaux Services" },
      { property: "og:description", content: "Notre mission : rendre l'eau et les équipements accessibles partout en Côte d'Ivoire." },
    ],
  }),
  staticData: { sitemap: true },
  component: About,
});

function About() {
  return (
    <SiteShell>
      <PageHero eyebrow="À propos" title="Une entreprise ivoirienne au service de vos projets." text="Basés à Bouaké, nous accompagnons particuliers, entreprises et collectivités avec du matériel fiable et des équipes engagées." image={trucks} />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Notre histoire</h2>
            <p className="mt-6 text-muted-foreground">Ivoire Travaux Services est née d'une conviction simple : l'accès à l'eau et à un matériel de qualité ne doit pas être un luxe. Depuis le quartier Air France 3 à Bouaké, nous avons élargi nos activités pour offrir une solution complète : forage, pompes, PVC, véhicules, gravier et terrains.</p>
            <p className="mt-4 text-muted-foreground">Chaque chantier est suivi de bout en bout, avec la même rigueur, quelle que soit sa taille.</p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[[350, "+", "Forages"], [120, "+", "Villages équipés"], [10, "", "Services"]].map(([n, s, l]) => (
                <div key={l as string}><p className="font-display text-3xl font-semibold text-primary"><CountUp to={n as number} suffix={s as string} /></p><p className="text-sm text-muted-foreground">{l}</p></div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}><img src={solar} alt="Installation hydraulique" className="aspect-[4/5] w-full rounded-lg object-cover" loading="lazy" /></Reveal>
        </div>
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Nos valeurs" title="Ce qui nous guide" />
          <div className="grid gap-6 md:grid-cols-3">
            {[[Target, "Précision", "Études de terrain et matériel adapté à chaque besoin."], [HeartHandshake, "Proximité", "Un interlocuteur joignable, avant comme après le chantier."], [Award, "Qualité", "Équipements robustes et finitions soignées."]].map(([I, t, d], i) => {
              const Icon = I as typeof Target;
              return (
                <Reveal key={t as string} delay={i * 100}>
                  <div className="h-full rounded-lg bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Icon className="h-9 w-9 text-accent" />
                    <h3 className="mt-5 text-xl font-semibold">{t as string}</h3>
                    <p className="mt-2 text-muted-foreground">{d as string}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <Reviews />
    </SiteShell>
  );
}
