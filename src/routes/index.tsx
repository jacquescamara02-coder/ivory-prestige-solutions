import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Drill, Sun, Truck, LandPlot, Phone, ShieldCheck, Clock, Wrench } from "lucide-react";
import video from "@/assets/ivoire-drilling-hero.mp4.asset.json";
import solar from "@/assets/solar-pump.jpg";
import trucks from "@/assets/trucks.jpg";
import { CONTACT, CountUp, Reveal, SectionTitle, SiteShell } from "@/components/site";
import { Faq, Reviews } from "@/components/blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ivoire Travaux Services | Forage, pompes et camions à Bouaké" },
      { name: "description", content: "Forage, pompes solaires et immergées, PVC, gravier, location de camions et terrains à Bouaké, Côte d'Ivoire." },
      { property: "og:title", content: "Ivoire Travaux Services | Forage et équipements à Bouaké" },
      { property: "og:description", content: "Votre partenaire pour l'eau, le matériel et le foncier en Côte d'Ivoire." },
    ],
  }),
  staticData: { sitemap: true },
  component: Home,
});

const PILLARS = [
  { i: Drill, t: "Forage", d: "Vente et location de machines de forage, avec opérateur." },
  { i: Droplets, t: "Pompes", d: "Motricité humaine, immergées et tuyauterie PVC." },
  { i: Sun, t: "Solaire", d: "Pompes solaires autonomes pour villages et irrigation." },
  { i: Truck, t: "Véhicules", d: "Vente et location de voitures et camions, gravier." },
  { i: LandPlot, t: "Foncier", d: "Achat et vente de terrains avec dossiers vérifiés." },
];

function Home() {
  return (
    <SiteShell>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-abyss">
        <video src={video.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sun">Bouaké · Côte d'Ivoire</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] text-abyss-foreground md:text-7xl">Nous faisons jaillir l'eau et avancer vos chantiers.</h1>
            <p className="mt-6 max-w-xl text-lg text-abyss-foreground/80">Forage, pompes, transport et foncier réunis chez un seul partenaire de confiance.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90">Demander un devis <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 rounded-md border border-abyss-foreground/30 px-7 py-4 font-semibold text-abyss-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-abyss-foreground/10"><Phone className="h-5 w-5" />{CONTACT.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-border shadow-xl md:grid-cols-4">
          {[[350, "+", "Forages réalisés"], [10, "", "Services intégrés"], [24, "h", "Délai de réponse"], [98, "%", "Clients satisfaits"]].map(([n, s, l]) => (
            <div key={l as string} className="bg-card p-6 text-center md:p-8">
              <p className="font-display text-3xl font-semibold text-primary md:text-5xl"><CountUp to={n as number} suffix={s as string} /></p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="Nos métiers" title="Cinq expertises, un seul interlocuteur" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <Link to="/services" className="group block h-full rounded-lg border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                  <p.i className="h-9 w-9 text-primary" />
                  <h3 className="mt-5 text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-abyss py-24 text-abyss-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <Reveal><img src={solar} alt="Pompe solaire installée par Ivoire Travaux Services" className="aspect-[4/3] w-full rounded-lg object-cover" loading="lazy" /></Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sun">Pourquoi nous</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">L'exigence d'un chantier international, la proximité d'un artisan.</h2>
            <ul className="mt-8 space-y-5">
              {[[ShieldCheck, "Matériel certifié et garanti"], [Clock, "Intervention rapide dans toute la Côte d'Ivoire"], [Wrench, "Installation, maintenance et suivi"]].map(([I, t]) => {
                const Icon = I as typeof ShieldCheck;
                return <li key={t as string} className="flex items-center gap-4"><span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary"><Icon className="h-5 w-5" /></span>{t as string}</li>;
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <Reviews />
      <Faq />

      <section className="relative overflow-hidden bg-abyss py-24">
        <img src={trucks} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-semibold text-abyss-foreground md:text-5xl">Un projet d'eau, de transport ou de terrain ?</h2>
          <p className="mt-4 text-abyss-foreground/75">Recevez un devis gratuit sous 24 heures.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-sun px-8 py-4 font-semibold text-abyss transition-transform duration-200 hover:-translate-y-0.5">Parlons de votre projet <ArrowRight className="h-5 w-5" /></Link>
        </Reveal>
      </section>
    </SiteShell>
  );
}
