import type { Metadata, Viewport } from "next";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { TranslationProvider } from "@/app/providers";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raphaela Monteiro - Software, Systems & Research",
  description: "Software developer exploring the intersection of engineering, intelligent systems, and aerospace computing.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono">
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