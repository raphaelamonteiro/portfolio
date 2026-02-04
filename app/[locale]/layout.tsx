import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-noto"
});

export const metadata: Metadata = {
  title: "Raphaela Monteiro | Portfolio",
  description: "Personal portfolio"
};

const messagesMap = {
  pt: () => import("../messages/pt.json"),
  en: () => import("../messages/en.json"),
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;


  const loadMessages = messagesMap[locale as keyof typeof messagesMap];
  if (!loadMessages) notFound();

  const messages = (await loadMessages()).default;

  return (
    <html lang={locale}>
      <body className={notoSans.variable}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
