import Navbar from '@/components/Navbar'
import {Nunito_Sans} from 'next/font/google'
import '../globals.css'

const nunito_sans = Nunito_Sans({subsets: ['latin']})

export const metadata = {
  title: 'REST Countries',
  description: 'Countries of the World',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={nunito_sans.className}>
        <div className="bg-very-light-gray text-very-dark-blue-text dark:bg-very-dark-blue dark:text-white">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  )
}
