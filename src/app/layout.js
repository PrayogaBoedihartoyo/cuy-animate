import './globals.css'
import { Gabarito } from 'next/font/google'
import NavBar from "src/components/NavBar";

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime Indonesia',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
