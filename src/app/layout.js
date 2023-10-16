import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "src/components/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime Indonesia',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
