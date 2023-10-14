import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import './globals.scss'
import { Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Pinturas El Bosco',
  description: 'Pinturas profesionales en Aranjuez, Madrid.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
          {children}
        <Footer />
        </body>
    </html>
  )
}
