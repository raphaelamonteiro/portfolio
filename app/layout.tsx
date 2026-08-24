import type { Metadata } from "next";
import Header from "@/app/components/header";
import { JetBrains_Mono } from "next/font/google";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { ThemeProvider } from "./theme-provider";
import Footer from "@/app/components/footer";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raphaela Monteiro - Software, Systems & Research",
  description: "Software developer exploring the intersection of engineering, intelligent systems, and aerospace computing, building practical solutions and investigating complex problems."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={jetBrainsMono.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <TranslationProvider>
            <Header />
            <main className="main-content">
              {children}
            </main>
            <Footer />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}