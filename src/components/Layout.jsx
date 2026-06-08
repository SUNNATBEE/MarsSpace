import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

// =====================================================================
//  LAYOUT — umumiy "ramka" (Mars Space dizayniga mos):
//    - Tepada Header (logo, ballar, avatar)
//    - Chapda Sidebar (menyu)
//    - O'rtada <Outlet /> -> hozirgi sahifa shu joyga chiziladi.
//  Header va Sidebar doim turadi, faqat o'rta qism o'zgaradi.
// =====================================================================
function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Header />
      <div className="mx-auto flex max-w-[1400px]">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
