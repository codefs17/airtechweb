"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera,
  Factory,
  Fan,
  RefreshCw,
  Settings,
  ShieldCheck,
  Flame,
  Store,
  Building2,
  MapPinned,
  Clock3,
  AlertTriangle,
  BadgeCheck,
  Timer,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";
import BackgroundParticles from "./components/background-particles";
import HeroAirflowCard from "./components/hero-airflow-card";

export default function Home() {
  const revealUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const heroStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };
  const lineVariant = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0 },
  };
  const services: Array<{ title: string; icon: LucideIcon; description: string }> = [
    {
      title: "Komplexní čištění vzduchotechniky",
      icon: Fan,
      description: "Hloubkové odstranění usazenin pro vyšší výkon a čistší vzduch v celém systému.",
    },
    {
      title: "Odmaštění a sanitace odtahů",
      icon: Flame,
      description: "Bezpečné čištění gastro odtahů se snížením požárního rizika a zápachu.",
    },
    {
      title: "Kontrola a servis rozvodů",
      icon: Settings,
      description: "Technická kontrola rozvodů včetně návrhu údržby pro stabilní provoz.",
    },
    {
      title: "Průmyslová inspekce kamerou",
      icon: Camera,
      description: "Přesná diagnostika stavu potrubí bez zbytečných odstávek výroby.",
    },
    {
      title: "Dezinfekce systémů HVAC",
      icon: ShieldCheck,
      description: "Cílená dezinfekce VZT systémů pro hygienicky bezpečné prostředí.",
    },
    {
      title: "Pravidelná údržba provozů",
      icon: RefreshCw,
      description: "Servisní plán na míru, který drží technologii dlouhodobě ve špičkové kondici.",
    },
  ];

  const benefits = [
    "Certifikované postupy a protokoly",
    "Měřitelné výsledky před/po zásahu",
    "Minimální odstávky provozu",
    "Technologie nové generace",
  ];

  const references = [
    {
      name: "Marek K., provozní ředitel",
      company: "Gastro Hub Brno",
      segment: "Restaurace",
      result: "Stabilní tah odtahů a vyšší hygiena kuchyně",
      quote:
        "Air Tech nám během jednoho zásahu stabilizoval tah i hygienu. Profesionální, čisté a přesné provedení.",
    },
    {
      name: "Lucie V., facility manager",
      company: "Business Park Delta",
      segment: "Administrativní objekt",
      result: "Jasný report, rychlá realizace bez omezení provozu",
      quote:
        "Jasná komunikace, přehledný report, výsledek okamžitě viditelný. Přesně takového partnera jsme hledali.",
    },
    {
      name: "Petr J., majitel",
      company: "Hotel Aurora",
      segment: "Hotelový provoz",
      result: "Lepší kvalita vzduchu bez výpadku služeb",
      quote:
        "Realizace proběhla bez omezení hostů a kvalita vzduchu je po zásahu výrazně lepší.",
    },
  ];

  const handleSmoothScroll =
    (targetId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const section = document.getElementById(targetId);
      if (!section) return;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

  return (
    <main className="relative overflow-hidden bg-black pb-28 text-white sm:pb-32 md:pb-24">
      <BackgroundParticles />
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="pointer-events-none fixed left-3 top-1/2 z-50 -translate-y-1/2 sm:left-5"
        aria-hidden="true"
      >
        <div className="rounded-2xl border border-blue-200/45 bg-[#060d1a]/90 px-3 py-3 shadow-[0_0_24px_rgba(120,175,255,0.28)] backdrop-blur sm:px-4 sm:py-4">
          <motion.div
            className="flex h-14 w-9 items-start justify-center rounded-full border-2 border-blue-200/80 bg-[#050b16] p-1.5 shadow-[0_0_14px_rgba(120,175,255,0.25)]"
            animate={{ y: [0, 4, 0], opacity: [0.85, 1, 0.85], scale: [1, 1.04, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="mt-0.5 h-3.5 w-1.5 rounded-full bg-blue-200"
              animate={{ y: [0, 11, 0], opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-blue-200/15 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-end px-4 py-3 sm:px-6">
          <nav className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-200 sm:gap-4 sm:text-xs md:text-sm">
            <a href="#o-nas" onClick={handleSmoothScroll("o-nas")} className="transition hover:text-blue-300">
              O nás
            </a>
            <a href="#sluzby" onClick={handleSmoothScroll("sluzby")} className="transition hover:text-blue-300">
              Služby
            </a>
            <a
              href="#realizace"
              onClick={handleSmoothScroll("realizace")}
              className="hidden transition hover:text-blue-300 sm:inline"
            >
              Realizace
            </a>
            <a href="#cenik" onClick={handleSmoothScroll("cenik")} className="hidden transition hover:text-blue-300 sm:inline">
              Ceník
            </a>
            <a
              href="#kontakt"
              onClick={handleSmoothScroll("kontakt")}
              className="rounded-full border border-blue-300/55 px-3 py-1 transition hover:bg-blue-300 hover:text-black"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="fixed right-4 top-[58px] z-30 sm:right-6 sm:top-[62px]"
      >
        <div className="flex w-[min(92vw,520px)] items-start gap-2.5 rounded-xl border border-red-300/45 bg-gradient-to-r from-red-950/45 to-black/85 px-3.5 py-2.5 shadow-[0_0_20px_rgba(248,113,113,0.18)] sm:px-4">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-red-300" />
          <p className="text-xs font-semibold leading-snug text-zinc-100 sm:text-sm">
            Zanesené VZT a odtahy výrazně zvyšují riziko požáru i kontrolních sankcí. Jednáme rychle, bezpečně a s jasnou dokumentací.
          </p>
        </div>
      </motion.div>
      <section className="relative flex min-h-screen items-center px-4 py-16 sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(78,130,255,0.24),transparent_34%),radial-gradient(circle_at_80%_8%,rgba(140,190,255,0.14),transparent_30%),linear-gradient(180deg,#04060c_0%,#050913_45%,#070d18_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(162,194,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(162,194,255,0.25)_1px,transparent_1px)] [background-size:38px_38px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(120deg,rgba(124,170,255,0.35)_0px,rgba(124,170,255,0.35)_1px,transparent_1px,transparent_26px)]" />
        <motion.div
          className="pointer-events-none absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl"
          animate={{ y: [-30, 20, -30], x: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-300/15 blur-3xl"
          animate={{ y: [20, -25, 20], x: [0, -25, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10 mx-auto mt-12 grid w-full max-w-7xl items-center gap-10 sm:mt-16 lg:grid-cols-[1.12fr_0.88fr]"
        >
          <div className="max-w-5xl">
            <motion.h1
              variants={heroStagger}
              initial="hidden"
              animate="visible"
              className="mt-10 text-[2.05rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:mt-14 sm:text-6xl md:text-[5.2rem]"
            >
              <motion.span variants={lineVariant} transition={{ duration: 0.45 }} className="block">
                ČISTÝ VZDUCH PRO VÁŠ PROVOZ
              </motion.span>
              <motion.span
                variants={lineVariant}
                transition={{ duration: 0.45 }}
                className="block whitespace-nowrap text-[0.72em] text-blue-300 drop-shadow-[0_0_16px_rgba(125,175,255,0.45)]"
              >
                BEZ RIZIKA A ZBYTEČNÝCH ODSTÁVEK
              </motion.span>
            </motion.h1>

            <p className="mt-6 max-w-4xl text-base text-zinc-300 sm:text-lg md:text-xl md:leading-[1.4]">
              Specializujeme se na čištění vzduchotechniky, gastro odtahů a HVAC
              systémů tak, aby váš provoz splnil hygienické i požární požadavky
              bez zbytečných odstávek a stresu.
            </p>

            <div className="mt-6 grid max-w-3xl gap-2.5 sm:grid-cols-3">
              {[
                { icon: Clock3, text: "Rychlá realizace" },
                { icon: BadgeCheck, text: "Certifikované postupy" },
                { icon: MapPinned, text: "Působnost po celé ČR" },
              ].map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-950/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-blue-100 sm:text-sm"
                >
                  <point.icon size={16} strokeWidth={2} />
                  <span>{point.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex max-w-lg flex-col gap-3 sm:mt-11 sm:max-w-none sm:flex-row sm:gap-5">
              <a
                href="#kontakt"
                onClick={handleSmoothScroll("kontakt")}
                className="neon-button w-full rounded-full bg-gradient-to-r from-blue-300 to-blue-500 px-6 py-4 text-center text-base font-extrabold text-black shadow-[0_0_24px_rgba(85,150,255,0.38)] transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(85,150,255,0.55)] sm:w-auto sm:px-8 sm:text-lg md:px-10"
              >
                NEZÁVAZNÁ POPTÁVKA
              </a>
              <a
                href="tel:+420123456789"
                className="neon-button w-full rounded-full border border-blue-300/70 px-6 py-4 text-center text-base font-extrabold text-blue-300 transition hover:bg-blue-300 hover:text-black sm:w-auto sm:px-8 sm:text-lg md:px-10"
              >
                ZAVOLAT
              </a>
            </div>
          </div>
          <HeroAirflowCard />
        </motion.div>

      </section>

      <section id="o-nas" className="relative z-10 px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="mb-4 text-2xl font-black uppercase text-blue-300 sm:mb-6 sm:text-3xl"
          >
            O nás a evropské standardy kvality
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[1.6rem] border border-blue-300/40 bg-gradient-to-b from-blue-950/35 to-black/65 p-6 shadow-[0_0_35px_rgba(90,150,255,0.2)] backdrop-blur sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/55 bg-blue-500/15 px-4 py-2 text-blue-100 shadow-[0_0_16px_rgba(100,165,255,0.35)]">
                <ShieldCheck size={18} strokeWidth={2} />
                <span className="text-lg font-black uppercase tracking-[0.16em] sm:text-xl">
                  EVHA
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                evropské doporučení
              </p>
            </div>
            <h3 className="mt-3 text-2xl font-black uppercase text-white sm:text-3xl">
              Certifikované postupy a profesionální přístup
            </h3>
            <p className="mt-4 max-w-4xl text-zinc-300">
              Pracujeme podle profesionálních hygienických postupů pro
              vzduchotechniku a kuchyňské odtahy s důrazem na evropské standardy
              oboru (včetně doporučení EVHA - European Ventilation Hygiene
              Association). Každou realizaci řešíme systematicky: inspekce,
              čištění, kontrola výsledku a dokumentace před/po.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/70 p-3 text-sm text-zinc-200">
                Hygiena a požární bezpečnost
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/70 p-3 text-sm text-zinc-200">
                Měřitelný výstup a fotodokumentace
              </div>
              <div className="rounded-xl border border-zinc-700 bg-zinc-900/70 p-3 text-sm text-zinc-200">
                Kvalita práce napříč celou ČR
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="sluzby"
        className="relative z-10 border-y border-zinc-800 bg-[#05070f]/95 px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl font-black uppercase sm:text-4xl md:text-5xl"
          >
            Služby Air Tech
          </motion.h2>
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-3 max-w-3xl text-sm text-zinc-300 sm:mt-4 sm:text-base"
          >
            Každou zakázku řešíme systémově - od vstupní diagnostiky až po
            finální dokumentaci. Cíl je vždy stejný: bezpečný provoz a čistý
            vzduch.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:mt-12 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true, amount: 0.35 }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/95 p-5 transition hover:border-blue-300/75 hover:shadow-[0_0_32px_rgba(90,160,255,0.24)] sm:rounded-3xl sm:p-6 md:p-7"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.07 + 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                  className="inline-flex rounded-xl border border-blue-200/25 bg-blue-950/40 p-3 text-blue-100 transition duration-300 group-hover:border-blue-200/65 group-hover:text-blue-300 group-hover:shadow-[0_0_16px_rgba(120,175,255,0.65)]"
                >
                  <service.icon size={38} strokeWidth={1.9} />
                </motion.div>
                <h3 className="mt-4 text-xl font-bold sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[0.95rem]">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="proc-si-vybrat" className="relative z-10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[1.6rem] border border-zinc-800 bg-zinc-950 p-6 sm:rounded-[2rem] sm:p-8 md:p-12"
          >
            <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
              Proč si vybrat Air Tech
            </h2>
            <p className="mt-6 text-zinc-300">
              Neprodáváme sliby. Dodáváme jasný výsledek, který vidíte i cítíte.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-blue-300/35 bg-blue-950/25 p-3">
                <p className="text-xl font-black text-blue-200">100+</p>
                <p className="text-xs uppercase tracking-[0.1em] text-zinc-300">realizací ročně</p>
              </div>
              <div className="rounded-xl border border-blue-300/35 bg-blue-950/25 p-3">
                <p className="text-xl font-black text-blue-200">EVHA</p>
                <p className="text-xs uppercase tracking-[0.1em] text-zinc-300">doporučené standardy</p>
              </div>
              <div className="rounded-xl border border-blue-300/35 bg-blue-950/25 p-3">
                <p className="text-xl font-black text-blue-200">do 24h</p>
                <p className="text-xs uppercase tracking-[0.1em] text-zinc-300">rychlý dojezd</p>
              </div>
            </div>
            <ul className="mt-8 space-y-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-lg"
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(90,160,255,0.8)]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-[1.6rem] border border-blue-300/55 bg-blue-300 p-6 text-black sm:rounded-[2rem] sm:p-8 md:p-12"
          >
            <h3 className="text-2xl font-black uppercase sm:text-3xl">Co získáte</h3>
            <div className="mt-6 space-y-4 text-base font-semibold sm:mt-7 sm:space-y-5 sm:text-lg">
              <p>Vyšší účinnost VZT systému.</p>
              <p>Nižší riziko požáru a hygienických problémů.</p>
              <p>Delší životnost technologie a nižší náklady.</p>
              <p>Jasný plán pravidelné údržby pro váš provoz.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="realizace" className="relative z-10 bg-[#040913]/95 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black uppercase sm:text-4xl md:text-5xl"
          >
            Realizace před / po
          </motion.h2>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Reálný výsledek po zásahu: vyšší průchodnost systému, nižší zátěž technologie a čistší provoz.
          </p>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6">
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-blue-300/35 bg-black p-4 shadow-[0_0_26px_rgba(90,160,255,0.15)] sm:rounded-3xl sm:p-5"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold">Průmyslové potrubí</h3>
                <span className="rounded-full border border-blue-300/50 bg-blue-400/10 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-blue-200">
                  PŘED / PO
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900">
                <Image
                  src="/realizace-pred-po.png"
                  alt="Realizace před a po - Průmyslové potrubí"
                  width={1024}
                  height={384}
                  className="h-auto w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-red-400/60 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-red-300 sm:text-xs">
                  Před
                </div>
                <div className="absolute right-3 top-3 rounded-full border border-blue-300/70 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200 sm:text-xs">
                  Po
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-[2px] bg-white/35" />
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black uppercase sm:text-4xl md:text-5xl"
          >
            Reference zákazníků
          </motion.h2>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {references.map((ref, i) => (
              <motion.article
                key={ref.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-blue-300/50 hover:shadow-[0_0_24px_rgba(90,160,255,0.16)] sm:rounded-3xl sm:p-7"
              >
                <div className="mb-4 inline-flex rounded-full border border-blue-300/45 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200">
                  {ref.segment}
                </div>
                <p className="text-zinc-200">&quot;{ref.quote}&quot;</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-blue-200">
                  <CircleCheck size={15} />
                  <span>{ref.result}</span>
                </div>
                <p className="mt-6 font-bold text-blue-300">{ref.name}</p>
                <p className="text-sm text-zinc-400">{ref.company}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="cenik" className="relative z-10 bg-[#050913]/95 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl font-black uppercase sm:text-4xl md:text-5xl"
          >
            ČISTÝ VZDUCH
            <span className="block text-blue-300">za nejlepší ceny</span>
          </motion.h2>
          <p className="mt-4 text-sm text-zinc-300 sm:text-base">
            Orientační ceny čištění vzduchotechniky podle velikosti provozu.
            Uvedené ceny jsou bez DPH.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-500/50 bg-zinc-200 p-6 text-black sm:rounded-3xl"
            >
              <div className="flex items-center gap-2 text-zinc-700">
                <Store size={18} strokeWidth={1.9} />
                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  Malé provozy
                </p>
              </div>
              <p className="mt-4 text-3xl font-black text-black">od 8 000 Kč</p>
              <p className="mt-2 text-sm text-zinc-700">bez DPH</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-700">
                <li>Diagnostika systému</li>
                <li>Kompletní čištění</li>
                <li>Fotodokumentace před/po</li>
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-700/70 bg-zinc-700 p-6 text-white sm:rounded-3xl"
            >
              <div className="flex items-center gap-2">
                <Building2 size={18} strokeWidth={1.9} />
                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  Střední provozy
                </p>
              </div>
              <p className="mt-4 text-3xl font-black">od 10 000 Kč</p>
              <p className="mt-2 text-sm text-zinc-200">bez DPH</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-200">
                <li>Diagnostika + návrh postupu</li>
                <li>Čištění a sanitace</li>
                <li>Výstupní report</li>
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-white sm:rounded-3xl"
            >
              <div className="flex items-center gap-2 text-zinc-300">
                <Factory size={18} strokeWidth={1.9} />
                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  Velké provozy
                </p>
              </div>
              <p className="mt-4 text-3xl font-black text-white">od 15 000 Kč</p>
              <p className="mt-2 text-sm text-zinc-400">bez DPH</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-300">
                <li>Rozšířená diagnostika</li>
                <li>Kompletní čištění velkého rozsahu</li>
                <li>Detailní dokumentace a doporučení</li>
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="relative z-10 border-t border-zinc-800 bg-[#070b14]/95 px-4 py-16 sm:px-6 sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-6xl">
              Kontaktujte Air Tech
            </h2>
            <p className="mt-6 max-w-md text-zinc-300">
              Chcete rychlou a spolehlivou nabídku pro váš provoz? Ozvěte se nám
              ještě dnes - navrhneme ideální postup, termín i rozsah realizace.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-300/55 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <Timer size={16} />
              Reagujeme do 24 hodin
            </div>
            <a
              href="tel:+420123456789"
              className="mt-8 inline-flex items-center rounded-2xl border border-blue-300/70 bg-blue-400/10 px-5 py-3 text-2xl font-black text-blue-200 shadow-[0_0_24px_rgba(95,146,255,0.25)] transition hover:scale-[1.02] hover:bg-blue-400/20"
            >
              +420 123 456 789
            </a>
            <div className="mt-6 space-y-2 text-zinc-200">
              <p>E-mail: info@airtech.cz</p>
              <p>Působnost: Praha a okolí, po domluvě kdekoliv po celé ČR</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.6rem] border border-blue-300/45 bg-black p-5 shadow-[0_0_28px_rgba(90,160,255,0.12)] sm:rounded-[2rem] sm:p-7 md:p-10"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-zinc-300">Jméno</span>
                <input
                  type="text"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none ring-blue-300/80 transition focus:ring-2"
                  placeholder="Vaše jméno"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-zinc-300">Telefon</span>
                <input
                  type="tel"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none ring-blue-300/80 transition focus:ring-2"
                  placeholder="+420..."
                  required
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-zinc-300">E-mail</span>
              <input
                type="email"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none ring-blue-300/80 transition focus:ring-2"
                placeholder="vas@email.cz"
                required
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-zinc-300">Zpráva</span>
              <textarea
                rows={5}
                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none ring-blue-300/80 transition focus:ring-2"
                placeholder="Popište váš objekt a požadavek..."
                required
              />
            </label>
            <button
              type="submit"
              className="neon-button mt-6 w-full rounded-full bg-blue-400 px-8 py-4 font-extrabold uppercase text-black transition hover:bg-blue-300"
            >
              Odeslat poptávku
            </button>
          </motion.form>
        </div>
      </section>

      <a
        href="tel:+420123456789"
        className="neon-button fixed bottom-3 right-3 z-50 rounded-full border border-blue-200 bg-blue-400 px-4 py-2.5 text-xs font-black uppercase tracking-wide text-black shadow-[0_0_20px_rgba(80,140,255,0.45)] transition hover:scale-105 sm:bottom-5 sm:right-5 sm:px-6 sm:py-3 sm:text-sm"
      >
        Zavolat
      </a>

      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Air Tech. Všechna práva vyhrazena.</p>
      </footer>
    </main>
  );
}