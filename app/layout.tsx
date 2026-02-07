import type { Metadata } from "next";
import Header from "@/components/Header";
import { TranslationProvider } from "@/contexts/TranslationContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raphaela Monteiro - Portfolio",
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
          <main style={{ minHeight: 'calc(100vh - 80px)' }}>
            {children}
          </main>
        </TranslationProvider>
      </body>
    </html>
  );
}