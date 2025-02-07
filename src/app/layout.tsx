
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}