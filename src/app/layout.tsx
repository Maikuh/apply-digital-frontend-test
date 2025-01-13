import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import cx from '@/utils/cx'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apply Digital Test',
  description: 'Frontend development test for Apply Digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cx(archivo.className, 'min-h-dvh')}>
        <Providers>
          <Navbar />
          <main className="min-h-dvh">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
