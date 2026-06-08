import { NavLink } from 'react-router-dom'
import { navItems } from '../navItems.js'

// =====================================================================
//  SIDEBAR — chap tomondagi menyu (hamma sahifada ko'rinadi).
//  NavLink — bosilganda sahifa qayta yuklanmaydi, react-router kerakli
//  sahifani ko'rsatadi. isActive -> hozir turgan sahifa knopkasi
//  to'q sariq (orange) rangda bo'ladi (dizayndagidek).
// =====================================================================
function Sidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-orange-500 text-white shadow-sm shadow-orange-200'
                  : 'text-slate-600 hover:bg-slate-100',
              ].join(' ')
            }
          >
            <span className="text-base leading-none">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
