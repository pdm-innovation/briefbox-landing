import Link from "next/link";
import { LogoText, LogoMark } from "@/components/Logo";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BriefBox",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  url: "https://briefbox.ai",
  downloadUrl: "https://apps.apple.com/de/app/briefbox/id6764253394",
  description:
    "BriefBox scannt deine Post, erklärt Behörden- und Versicherungsbriefe verständlich und hilft dir mit fertigen Antworten – direkt auf deinem iPhone.",
  inLanguage: "de",
  author: {
    "@type": "Organization",
    name: "PDM Innovation",
    url: "https://briefbox.ai",
    sameAs: ["https://www.instagram.com/briefbox.ai"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@briefbox.ai",
      contactType: "customer support",
    },
  },
};

// ── Design Tokens (aus lib/theme.ts) ─────────────────────────────────────
// accent:  #2563EB  |  bg-light: #F8FAFC  |  bg-dark: #0C0E14
// surface: #FFFFFF  |  surface-dark: #161B27
// text: #0F172A (light) / #F1F5F9 (dark)

const audiences = [
  {
    emoji: "💼",
    title: "Selbstständige",
    desc: "Rechnungen, Bescheide, Behördenbriefe: BriefBox hält den Überblick, damit du es nicht musst.",
  },
  {
    emoji: "🏢",
    title: "Kleine Unternehmen",
    desc: "Weniger Zeit mit Papierkram, mehr Zeit fürs Kerngeschäft. BriefBox bearbeitet Post schnell und zuverlässig.",
  },
  {
    emoji: "🧑‍💻",
    title: "Freiberufler",
    desc: "Als Freelancer trägst du alles allein. BriefBox nimmt dir die Post-Last ab – von der Analyse bis zur Antwort.",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#F8FAFC",
        color: "#0F172A",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Nav ──────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: "rgba(248, 250, 252, 0.85)",
          borderColor: "#E2E8F0",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <LogoText height={20} />
          <a
            href="https://apps.apple.com/de/app/briefbox/id6764253394"
            className="text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            style={{
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
            }}
          >
            Kostenlos laden
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-8"
            style={{
              backgroundColor: "#EFF6FF",
              color: "#1E40AF",
            }}
          >
            <span>✨</span>
            <span>Für iPhone – jetzt kostenlos testen</span>
          </div>

          {/* Logo Mark groß */}
          <div className="flex justify-center mb-8">
            <LogoMark size={72} />
          </div>

          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6"
            style={{
              fontFamily: "var(--font-urbanist), system-ui, sans-serif",
              letterSpacing: "-0.03em",
              color: "#0F172A",
            }}
          >
            Briefe verstehen,{" "}
            <span style={{ color: "#2563EB" }}>ohne Stress.</span>
          </h1>

          <p
            className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#475569" }}
          >
            BriefBox scannt deine Post, erklärt sie verständlich und hilft dir mit
            fertigen Antworten – direkt auf deinem iPhone. Ämter, Versicherungen,
            Behörden – kein Brief bleibt mehr unbeantwortet.
          </p>

          {/* App Store CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/de/app/briefbox/id6764253394"
              className="inline-flex items-center gap-3 font-semibold px-6 py-3.5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: "#0F172A",
                color: "#FFFFFF",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Im App Store laden
            </a>
          </div>

          <p className="mt-4 text-sm" style={{ color: "#94A3B8" }}>
            Kostenlos · iOS 16+ · Deutsch
          </p>
        </div>
      </section>

      {/* ── Demo Video + Steps ───────────────────────────────────── */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* iPhone Frame */}
          <div className="flex-shrink-0 w-full max-w-[260px] mx-auto lg:mx-0">
            <div
              className="rounded-[2.8rem] p-[3px] shadow-2xl"
              style={{ background: "linear-gradient(145deg, #1E293B, #0F172A)" }}
            >
              <div
                className="rounded-[2.6rem] overflow-hidden"
                style={{ backgroundColor: "#000", aspectRatio: "390/844" }}
              >
                <video
                  src="/demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex-1 w-full">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#2563EB" }}
            >
              So funktioniert&apos;s
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-10"
              style={{
                fontFamily: "var(--font-urbanist)",
                letterSpacing: "-0.03em",
                color: "#0F172A",
              }}
            >
              In drei Schritten zum Ergebnis
            </h2>

            <div className="flex flex-col gap-0">
              {[
                {
                  step: "01",
                  title: "Scannen",
                  desc: "Halte dein Handy über den Brief – BriefBox erfasst den Inhalt unkompliziert per Kamera.",
                  icon: "📸",
                },
                {
                  step: "02",
                  title: "Analysieren",
                  desc: "Die KI liest Absender, Inhalt und Fristen automatisch aus und komprimiert alles auf das Wesentliche.",
                  icon: "🧠",
                },
                {
                  step: "03",
                  title: "Verstehen",
                  desc: "Sieh eine klare Zusammenfassung, erhalte Hilfe beim Formulieren von Antworten, stelle dem KI-Chat Rückfragen und lass dich an Fristen erinnern.",
                  icon: "✅",
                },
              ].map((item, i, arr) => (
                <div key={item.step} className="flex gap-5">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ backgroundColor: "#EFF6FF" }}
                    >
                      {item.icon}
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="w-px flex-1 my-2"
                        style={{ backgroundColor: "#E2E8F0", minHeight: 32 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#2563EB" }}
                      >
                        {item.step}
                      </span>
                      <h3
                        className="text-lg font-semibold"
                        style={{
                          fontFamily: "var(--font-urbanist)",
                          color: "#0F172A",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#2563EB" }}
            >
              Features
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-urbanist)",
                letterSpacing: "-0.03em",
                color: "#0F172A",
              }}
            >
              Alles was du brauchst
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#475569" }}>
              Von der Kamera bis zur fertigen Antwort – BriefBox übernimmt den Rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Scanner */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                📷
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-urbanist)", color: "#0F172A" }}
              >
                Brief-Scanner
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                Halte die Kamera einfach über deinen Brief. BriefBox erfasst den Text
                automatisch – egal ob Handschrift, Maschinendruck oder Formular.
                Kein Abtippen, kein Aufwand.
              </p>
            </div>

            {/* AI Analyse */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                🧠
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-urbanist)", color: "#0F172A" }}
              >
                KI-Analyse
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                Die KI erkennt automatisch Absender, Betreff, wichtige Inhalte und
                Fristen. Du bekommst eine klare Zusammenfassung – in Sprache, die du
                wirklich verstehst.
              </p>
            </div>

            {/* Antwort Formulierung */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                ✍️
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-urbanist)", color: "#0F172A" }}
              >
                Antwort-Formulierung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                BriefBox schlägt passende Antwortschreiben vor – professionell und
                auf den Punkt. Du kannst per KI-Chat nachfragen, anpassen und bist
                in Minuten fertig.
              </p>
            </div>

            {/* Fristen Erinnerung */}
            <div
              className="rounded-2xl p-6 border"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                📅
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-urbanist)", color: "#0F172A" }}
              >
                Fristen-Erinnerung
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                Deadlines werden automatisch erkannt und direkt als Erinnerung in
                deinem Kalender gespeichert. Kein Termin geht mehr verloren – egal
                ob Einspruchsfrist, Zahlungsziel oder Rückmeldung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── For Whom ─────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "var(--font-urbanist)",
                letterSpacing: "-0.03em",
                color: "#0F172A",
              }}
            >
              Für wen ist BriefBox?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#EFF6FF" }}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    color: "#0F172A",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-12 text-center text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#475569" }}
          >
            Als Inhaber oder Geschäftsführerin bearbeitest du Post oft noch selbst. BriefBox
            reduziert den Aufwand, schafft sofortige Klarheit über Fristen und beschleunigt
            deine Antworten – damit du dich auf das Wesentliche konzentrieren kannst.
          </p>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <LogoMark size={48} className="opacity-90" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{
              fontFamily: "var(--font-urbanist)",
              letterSpacing: "-0.03em",
            }}
          >
            Starte noch heute kostenlos
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            Keine Registrierung. Kein Abo. Einfach laden und loslegen.
          </p>
          <a
            href="https://apps.apple.com/de/app/briefbox/id6764253394"
            className="inline-flex items-center gap-3 font-semibold px-6 py-3.5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#FFFFFF", color: "#1D4ED8" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Im App Store laden
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer
        className="py-8 px-6 border-t"
        style={{ backgroundColor: "#F8FAFC", borderColor: "#E2E8F0" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <LogoText height={16} />
          <div className="flex items-center gap-6 text-sm" style={{ color: "#94A3B8" }}>
            <Link
              href="/impressum"
              className="transition-colors hover:text-[#0F172A]"
            >
              Impressum
            </Link>
            <Link
              href="/anb"
              className="transition-colors hover:text-[#0F172A]"
            >
              ANB
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-[#0F172A]"
            >
              Datenschutz
            </Link>
            <Link
              href="/support"
              className="transition-colors hover:text-[#0F172A]"
            >
              Support
            </Link>
            <a
              href="mailto:support@briefbox.ai"
              className="transition-colors hover:text-[#0F172A]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
