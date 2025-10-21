import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata = {
  title: 'Create Your ToDo List',
  description: 'A simple to-do list app built with Next.js'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='font-sans antialiased'>
        {children}
        <Toaster position='top-center' />
      </body>
    </html>
  )
}
