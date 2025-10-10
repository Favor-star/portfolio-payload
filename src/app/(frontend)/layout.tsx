import React from 'react'
import './styles.css'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/lib/hooks/theme-provider'
import { Footer } from './components/common/footer'

export const metadata = {
  title: 'Favor Eliab · Portfolio',
  description: "A portfolio website showcasing Favor Eliab's projects, skills, and experiences.",
}

export default async function RootLayout(props: { readonly children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} max-w-screen`}>
        <main className="max-w-full w-full">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
