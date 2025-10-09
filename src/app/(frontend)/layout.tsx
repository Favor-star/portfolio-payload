import React from 'react'
import './styles.css'
import { GeistSans } from 'geist/font/sans'
import { ThemeProvider } from '@/lib/hooks/theme-provider'
import { Footer } from './components/common/footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
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
