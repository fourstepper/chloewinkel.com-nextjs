import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Chloe Winkel',
  description: 'Graphic designer, illustrator and photographer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='flex flex-col h-screen justify-between'>
        <Header></Header>
        {/* this div seems to be our "container" */}
        <div className='mb-auto p-12'>
        {children}
        </div>
        <Footer></Footer>
        </body>
    </html>
  )
}
