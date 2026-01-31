import MoleculeFooter from "@/components/molecules/m_footer"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import "react-loading-skeleton/dist/skeleton.css"
import { AuthProvider } from "@/providers/auth.provider"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Famnest",
  description: "Family management apps",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <AuthProvider>
          {children}
          <MoleculeFooter/>
        </AuthProvider>
      </body>
    </html>
  )
}
