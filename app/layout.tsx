import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const pressStart = Press_Start_2P({ 
  weight: '400', 
  subsets: ["latin"], 
  variable: '--font-pixel' 
});

export const metadata: Metadata = {
  title: 'TRIONYX | Desarrollo Minecraft & Discord Premium',
  description: 'Servicios premium de desarrollo para Minecraft y Discord. Configuraciones avanzadas, bots personalizados, tiendas Tebex y soluciones web profesionales.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${pressStart.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
