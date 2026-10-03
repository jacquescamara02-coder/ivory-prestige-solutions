import { useState, type FormEvent } from "react";
import { ChevronDown, Loader2, Send, Star } from "lucide-react";
import { CONTACT, Reveal, SectionTitle } from "./site";

const REVIEWS = [
  { n: "Kouadio Yao", r: "Agriculteur, Sakassou", t: "Forage réalisé en quatre jours avec une pompe solaire. Nos cultures sont irriguées toute l'année." },
  { n: "Aminata Traoré", r: "Gérante, Bouaké", t: "Location de camion ponctuelle et livraison de gravier sans retard. Équipe sérieuse et joignable." },
  { n: "Mairie de Béoumi", r: "Collectivité", t: "Installation de pompes à motricité humaine dans trois villages. Travail propre, suivi après chantier." },
  { n: "Jean-Marc Konan", r: "Promoteur immobilier", t: "Achat d'un terrain avec dossier clair et visite accompagnée. Je recommande sans hésiter." },
  { n: "Fatou Bamba", r: "Entrepreneure, Katiola", t: "Pompe immergée et tuyaux PVC fournis le même jour. Conseils précis sur le débit à prévoir." },
  { n: "Société Agro-Centre", r: "Entreprise agricole", t: "Machine de forage louée avec opérateur. Rendement excellent et tarifs transparents." },
];

export function Reviews() {
  const list = [...REVIEWS, ...REVIEWS];
  return (
    <section className="overflow-hidden bg-secondary py-24">
      <SectionTitle eyebrow="Avis clients" title="Ils nous font confiance" text="Agriculteurs, collectivités et entreprises partagent leur expérience." />
      <div className="flex w-max gap-6 marquee">
        {list.map((r, i) => (
          <figure key={i} className="w-[320px] shrink-0 rounded-lg border bg-card p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:w-[380px]">
            <div className="flex gap-1 text-sun">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
            <blockquote className="mt-4 text-foreground/85">« {r.t} »</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">{r.n[0]}</span>
              <span><b className="block text-sm">{r.n}</b><span className="text-xs text-muted-foreground">{r.r}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Quelle est la durée d'un forage ?", a: "Selon la profondeur et la nature du sol, un forage dure généralement de 2 à 5 jours, de l'étude à la mise en service de la pompe." },
  { q: "Louez-vous les machines avec opérateur ?", a: "Oui. Nos machines de forage, voitures et camions peuvent être loués avec ou sans chauffeur et opérateur qualifié." },
  { q: "Quelle pompe choisir pour mon projet ?", a: "Pompe à motricité humaine pour les villages sans électricité, pompe solaire pour l'autonomie et l'irrigation, pompe immergée pour les gros débits. Nous vous conseillons gratuitement." },
  { q: "Intervenez-vous hors de Bouaké ?", a: "Oui, nous intervenons dans toute la Côte d'Ivoire. Les frais de déplacement sont précisés dans le devis." },
  { q: "Comment se passe l'achat d'un terrain ?", a: "Nous vérifions les documents, organisons la visite et vous accompagnons jusqu'à la signature chez le notaire." },
  { q: "Le devis est-il gratuit ?", a: "Oui, tous nos devis sont gratuits et sans engagement. Réponse sous 24 heures." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="rounded-lg border bg-card">
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-medium">
                  {f.q}
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden px-5 text-muted-foreground"><span className="block pb-5">{f.a}</span></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = ["Vente de matériel de forage", "Location de machine de forage", "Pompe à motricité humaine", "Pompe immergée", "Pompe solaire", "Tuyaux PVC", "Vente / location de voiture", "Vente / location de camion", "Gravier", "Achat / vente de terrain"];

export function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = `Bonjour Ivoire Travaux Services,\n\nNom : ${d.get("name")}\nTéléphone : ${d.get("phone")}\nVille : ${d.get("city")}\nService : ${d.get("service")}\n\n${d.get("message")}`;
    setLoading(true);
    setTimeout(() => {
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
      setLoading(false);
      setDone(true);
      e.currentTarget?.reset?.();
    }, 700);
  };
  const field = "w-full rounded-md border border-input bg-background px-4 py-3 text-sm transition-colors duration-200 focus:border-primary focus:outline-none";
  return (
    <form onSubmit={submit} className="space-y-4 rounded-lg border bg-card p-7 shadow-sm md:p-9">
      <h3 className="text-2xl font-semibold">Demande de devis gratuit</h3>
      <p className="text-sm text-muted-foreground">Réponse sous 24 heures. Votre demande nous parvient directement sur WhatsApp.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder="Nom complet" aria-label="Nom complet" className={field} />
        <input required name="phone" type="tel" placeholder="Téléphone" aria-label="Téléphone" className={field} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="city" placeholder="Ville / localité" aria-label="Ville" className={field} />
        <select required name="service" aria-label="Service" defaultValue="" className={field}>
          <option value="" disabled>Service souhaité</option>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <textarea required name="message" rows={4} placeholder="Décrivez votre projet (profondeur, quantité, durée de location...)" aria-label="Message" className={field} />
      <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 disabled:opacity-70">
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        {loading ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
      {done && <p role="status" className="text-center text-sm text-primary">Merci ! Finalisez l'envoi dans WhatsApp.</p>}
    </form>
  );
}

export function MapBlock() {
  return (
    <iframe
      title="Localisation Ivoire Travaux Services à Bouaké"
      src="https://maps.google.com/maps?q=Air%20France%203%2C%20Bouak%C3%A9%2C%20C%C3%B4te%20d%27Ivoire&z=14&output=embed"
      className="h-[420px] w-full rounded-lg border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
