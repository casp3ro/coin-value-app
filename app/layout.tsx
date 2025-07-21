import { Kumbh_Sans } from 'next/font/google'
import { Metadata } from 'next'
import MainContent from '../components/MainContent'

const font = Kumbh_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coin Value',
  description: 'Prepare travel plan in few clicks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <body>
        <MainContent>{children}</MainContent>
      </body>
    </html>
  )
}
