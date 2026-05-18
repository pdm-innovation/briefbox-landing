import Link from "next/link";
import { LogoText, LogoMark } from "@/components/Logo";

// ── Design Tokens (aus lib/theme.ts) ─────────────────────────────────────
// accent:  #2563EB  |  bg-light: #F8FAFC  |  bg-dark: #0C0E14
// surface: #FFFFFF  |  surface-dark: #161B27
// text: #0F172A (light) / #F1F5F9 (dark)

const features = [
  {
    icon: "📬",
    title: "Brief scannen",
    description:
      "Halte die Kamera über den Brief – BriefBox erkennt den Text automatisch. Egal ob Behörden, Versicherung oder Bank.",
  },
  {
    icon: "🧠",
    title: "Sofort verstehen",
    description:
      "KI erklärt in klaren Worten was der Brief bedeutet, was wichtig ist – und ob du handeln musst.",
  },
  {
    icon: "✍️",
    title: "Antworten verfassen",
    description:
      "BriefBox schlägt passende Antworten vor. Du prüfst kurz, passt an und bist fertig.",
  },
  {
    icon: "📅",
    title: "Fristen nie verpassen",
    description:
      "Deadlines werden automatisch erkannt und als Erinnerung in deinem Kalender gespeichert.",
  },
];

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
            href="https://apps.apple.com/app/briefbox"
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
              href="https://apps.apple.com/app/briefbox"
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

      {/* ── Mock iPhone ──────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-xs mx-auto">
          {/* iPhone Frame */}
          <div
            className="rounded-[2.8rem] p-[3px] shadow-2xl"
            style={{ background: "linear-gradient(145deg, #1E293B, #0F172A)" }}
          >
            <div
              className="rounded-[2.6rem] overflow-hidden"
              style={{ backgroundColor: "#0C0E14" }}
            >
              {/* Status Bar */}
              <div
                className="flex justify-between items-center px-6 pt-4 pb-2"
                style={{ color: "#94A3B8", fontSize: 11 }}
              >
                <span style={{ fontFamily: "var(--font-urbanist)", fontWeight: 600 }}>9:41</span>
                <div className="flex gap-1.5 items-center">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <rect x="0" y="3" width="3" height="9" rx="0.5" fill="#94A3B8" />
                    <rect x="4.5" y="2" width="3" height="10" rx="0.5" fill="#94A3B8" />
                    <rect x="9" y="0.5" width="3" height="11.5" rx="0.5" fill="#94A3B8" />
                    <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" fill="#94A3B8" opacity="0.4" />
                  </svg>
                  <svg width="16" height="12" viewBox="0 0 24 12" fill="none">
                    <rect x="0" y="0" width="22" height="12" rx="3" stroke="#94A3B8" strokeWidth="1.5" />
                    <rect x="2" y="2" width="15" height="8" rx="1.5" fill="#2563EB" />
                    <path d="M23 4.5v3a1.5 1.5 0 000-3z" fill="#94A3B8" />
                  </svg>
                </div>
              </div>

              {/* Dynamic Island */}
              <div className="flex justify-center mb-2">
                <div className="w-28 h-7 rounded-full" style={{ backgroundColor: "#000" }} />
              </div>

              {/* App Content */}
              <div className="px-4 pb-6">
                {/* Header */}
                <div className="mb-5">
                  <p style={{ color: "#475569", fontSize: 13 }}>Guten Morgen 👋</p>
                  <h3
                    style={{
                      color: "#F1F5F9",
                      fontSize: 22,
                      fontWeight: 700,
                      fontFamily: "var(--font-urbanist)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Meine Briefe
                  </h3>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { label: "Offen", value: "3", color: "#DC2626", bg: "#2D1515" },
                    { label: "Diese Woche", value: "7", color: "#2563EB", bg: "#1E3A5F" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl p-3"
                      style={{ backgroundColor: s.bg }}
                    >
                      <p style={{ color: s.color, fontSize: 22, fontWeight: 700, fontFamily: "var(--font-urbanist)" }}>
                        {s.value}
                      </p>
                      <p style={{ color: "#94A3B8", fontSize: 11 }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Letter Cards */}
                <div className="space-y-2.5">
                  {[
                    { sender: "Finanzamt München", preview: "Einkommensteuerbescheid...", tag: "Frist: 3 Tage", tagColor: "#F87171", tagBg: "#2D1515", dot: "#DC2626" },
                    { sender: "Krankenkasse TK", preview: "Beitragsanpassung 2026", tag: "Erledigt", tagColor: "#4ADE80", tagBg: "#0D2B1A", dot: "#16A34A" },
                    { sender: "Deutsche Post", preview: "Ihr Paket liegt bereit", tag: "Neu", tagColor: "#93C5FD", tagBg: "#1E3A5F", dot: "#2563EB" },
                  ].map((item) => (
                    <div
                      key={item.sender}
                      className="rounded-2xl p-3.5 flex items-center gap-3"
                      style={{ backgroundColor: "#161B27" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.dot }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          style={{
                            color: "#F1F5F9",
                            fontSize: 13,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.sender}
                        </p>
                        <p
                          style={{
                            color: "#475569",
                            fontSize: 11,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.preview}
                        </p>
                      </div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          color: item.tagColor,
                          backgroundColor: item.tagBg,
                          fontSize: 10,
                          fontWeight: 600,
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tab Bar */}
                <div
                  className="mt-5 rounded-2xl p-3 flex justify-around"
                  style={{ backgroundColor: "#161B27" }}
                >
                  {[
                    { icon: "📬", label: "Briefe", active: true },
                    { icon: "📅", label: "Fristen", active: false },
                    { icon: "📁", label: "Ordner", active: false },
                    { icon: "⚙️", label: "Einst.", active: false },
                  ].map((tab) => (
                    <div key={tab.label} className="flex flex-col items-center gap-0.5">
                      <span className="text-base">{tab.icon}</span>
                      <span
                        style={{
                          fontSize: 9,
                          color: tab.active ? "#F1F5F9" : "#475569",
                          fontWeight: tab.active ? 600 : 400,
                        }}
                      >
                        {tab.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FFFFFF" }}>
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
              Alles was du brauchst
            </h2>
            <p className="text-lg" style={{ color: "#475569" }}>
              Von der Kamera bis zur fertigen Antwort – in Minuten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E8F0",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: "#EFF6FF" }}
                >
                  {f.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-urbanist)",
                    color: "#0F172A",
                  }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {f.description}
                </p>
              </div>
            ))}
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
            href="https://apps.apple.com/app/briefbox"
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
