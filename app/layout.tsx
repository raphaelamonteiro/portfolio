import type { Metadata } from "next";
import Header from "@/components/header";
import { TranslationProvider } from "@/contexts/TranslationContext";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Raphaela Monteiro | Portfolio",
  description: "My personal portfolio website!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <TranslationProvider>
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}