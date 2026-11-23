import type { Metadata, Viewport } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { TranslationProvider } from "@/app/providers";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raphaelamonteiro.vercel.app"),
  title: {
    default: "Raphaela Monteiro — Software Developer & Aerospace Computing",
    template: "%s | Raphaela Monteiro",
  },
  description:
    "Software developer building systems for constrained environments. Researcher on PNT reference architectures at ITA. Open to collaborations, research, and freelance.",
  keywords: [
    "Raphaela Monteiro",
    "Software Developer",
    "Aerospace Computing",
    "Critical Systems",
    "PNT Reference Architecture",
    "ITA",
    "Software Engineer",
  ],
  authors: [{ name: "Raphaela Monteiro" }],
  creator: "Raphaela Monteiro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raphaelamonteiro.vercel.app",
    siteName: "Raphaela Monteiro — Portfolio",
    title: "Raphaela Monteiro — Software Developer & Aerospace Computing",
    description:
      "Software developer building systems for constrained environments. Researcher on PNT reference architectures at ITA. Open to collaborations, research, and freelance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphaela Monteiro — Software Developer & Aerospace Computing",
    description:
      "Software developer building systems for constrained environments. Researcher on PNT reference architectures at ITA. Open to collaborations, research, and freelance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-mono relative min-h-screen">
        {/* Background "Aurora" (Cyber-Dashboard Ambient Glow) */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[-1]"
          style={{
            background: `
              radial-gradient(circle at 15% 50%, rgba(143, 124, 255, 0.15), transparent 40%),
              radial-gradient(circle at 85% 30%, rgba(67, 61, 139, 0.2), transparent 50%)
            `,
          }}
        />
        <ThemeProvider>
          <TranslationProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
