import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

// Urbanist Bold für Headings (entspricht Urbanist_700Bold in der App)
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://briefbox.ai"),
  title: "BriefBox – Briefe scannen, verstehen & beantworten | iPhone App",
  description:
    "BriefBox scannt deine Post, erklärt Behörden- und Versicherungsbriefe verständlich und hilft dir mit fertigen Antworten – direkt auf deinem iPhone. Kostenlos im App Store.",
  keywords: [
    "Briefe scannen App",
    "Briefassistent iPhone",
    "Behördenpost verstehen",
    "Dokumente übersetzen App",
    "Versicherungsbrief erklären",
    "Brief KI Analyse",
    "Fristen erkennen App",
    "iOS Briefassistent",
    "BriefBox",
    "Post App",
  ],
  alternates: {
    canonical: "https://briefbox.ai",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/app-icon.png", sizes: "any" },
    ],
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "BriefBox – Briefe scannen, verstehen & beantworten",
    description:
      "BriefBox scannt deine Post, erklärt sie verständlich und hilft dir mit fertigen Antworten – direkt auf deinem iPhone. Kostenlos im App Store.",
    type: "website",
    locale: "de_DE",
    url: "https://briefbox.ai",
    siteName: "BriefBox",
    images: [
      {
        url: "/app-icon.png",
        width: 512,
        height: 512,
        alt: "BriefBox – Smarter Briefassistent für iPhone",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${urbanist.variable} ${GeistSans.variable}`}>
      <body
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
