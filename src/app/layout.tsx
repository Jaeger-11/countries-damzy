import Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
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
    <html lang="en">
      <body className={nunito_sans.className}>
        <Provider>
        <div className="w-full h-[100%] min-h-[100vh] bg-very-light-gray text-very-dark-blue-text dark:bg-very-dark-blue dark:text-white">
          <Navbar/>
          {children}
        </div>
        </Provider>
      </body>
    </html>
  )
}
