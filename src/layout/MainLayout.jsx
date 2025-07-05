import { Outlet } from 'react-router-dom'
import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'

const MainLayout = () => {
  return (
    <>
      <main className="overflow-x-hidden bg-[#F1F5F9] dark:bg-gray-900">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}
export default MainLayout
