import './globals.css'
import type { Metadata } from 'next'
import NotFound from './components/not-found'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from './theme-provider'


export const metadata: Metadata = {
    title: 'Amparo: 404 - Página não encontrada',
    description: 'Ops! Parece que a página não existe.',
}

export default function GlobalNotFound() {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="flex flex-1">
                            <NotFound />
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}