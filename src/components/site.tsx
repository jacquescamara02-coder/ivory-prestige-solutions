import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUp, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import logo from "@/assets/ivoire-travaux-logo.jpeg.asset.json";

export const CONTACT = {
  name: "Ivoire Travaux Services",
  phone: "07 89 89 89 63",
  phoneHref: "tel:+2250789898963",
  email: "hassanesouhoud@gmail.com",
  whatsapp: "2250750144189",
  address: "Air France 3, Amanibo 1, Bouaké, Côte d'Ivoire",
};

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1800, 1);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-abyss/90 py-2 shadow-lg backdrop-blur-md" : "py-4"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Logo Ivoire Travaux Services" className="h-11 w-11 rounded-md bg-card object-contain" />
          <span className="font-display text-sm font-semibold leading-tight text-abyss-foreground">Ivoire Travaux<br /><span className="text-sun">Services</span></span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-sm font-medium text-abyss-foreground/80 transition-colors duration-200 hover:text-abyss-foreground" activeProps={{ className: "!text-sun" }}>{n.label}</Link>
          ))}
          <Link to="/contact" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90">Demander un devis</Link>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="text-abyss-foreground md:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mx-5 mt-3 flex flex-col gap-1 rounded-lg bg-abyss p-4 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-abyss-foreground hover:bg-primary/30">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-abyss text-abyss-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-12 w-12 rounded-md bg-card object-contain" />
            <span className="font-display text-lg font-semibold">Ivoire Travaux Services</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-abyss-foreground/70">Forage, pompage, transport et foncier. Un partenaire unique pour donner de l'eau, du matériel et des terrains à vos projets en Côte d'Ivoire.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-sun">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm">{NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-abyss-foreground/70 hover:text-abyss-foreground">{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-sun">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-abyss-foreground/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />{CONTACT.address}</li>
            <li><a href={CONTACT.phoneHref} className="flex gap-2 hover:text-abyss-foreground"><Phone className="h-4 w-4" />{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="flex gap-2 break-all hover:text-abyss-foreground"><Mail className="h-4 w-4 shrink-0" />{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-abyss-foreground/10 py-6 text-center text-xs text-abyss-foreground/50">© {new Date().getFullYear()} Ivoire Travaux Services. Tous droits réservés.</div>
    </footer>
  );
}

function FloatingActions() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const c = 2 * Math.PI * 22;
  return (
    <>
      <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Discuter sur WhatsApp" className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-xl transition-transform duration-200 hover:-translate-y-1">
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
        <MessageCircle className="relative h-7 w-7" />
      </a>
      <button aria-label="Remonter en haut" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-abyss text-abyss-foreground shadow-xl transition-all duration-300 hover:-translate-y-1 ${p > 0.08 ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56"><circle cx="28" cy="28" r="22" fill="none" stroke="var(--sun)" strokeWidth="3" strokeDasharray={c} strokeDashoffset={c * (1 - p)} strokeLinecap="round" /></svg>
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-abyss pb-16 pt-36">
      <img src={image} alt="" className="absolute inset-0 h-full w-full scale-105 object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/60 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sun">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-abyss-foreground md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-abyss-foreground/75">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold md:text-5xl ${light ? "text-abyss-foreground" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 ${light ? "text-abyss-foreground/70" : "text-muted-foreground"}`}>{text}</p>}
    </Reveal>
  );
}
