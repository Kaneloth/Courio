import './globals.css'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Layout({ children }) {
 return (
  <html>
   <body className="bg-gray-100">
    <Header />
    <main className="pb-20">{children}</main>
    <BottomNav />
   </body>
  </html>
 )
}