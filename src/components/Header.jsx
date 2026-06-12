import { Link, NavLink } from 'react-router-dom'
import { headerLinks } from '../navItems.js'

// Tepadagi ball/coin "pill"lari (hozircha namuna sonlar — keyin real datadan keladi)
const stats = [
  { icon: '💚', value: '747 501', color: 'text-emerald-600' },
  { icon: '🔥', value: '486', color: 'text-orange-500' },
  { icon: '🪙', value: '4 070', color: 'text-violet-600' },
]

// =====================================================================
//  HEADER — eng tepadagi panel (hamma sahifada ko'rinadi).
//  Chapda: MARS logo. O'ngda: ballar, Shop/Mars AI, "Obuna bo'ling", avatar.
// =====================================================================
function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1 text-2xl font-extrabold text-slate-900">
        MARS<span className="text-orange-500">°</span>
      </Link>

      {/* O'ng tomon */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Ball/coin pill'lari */}
        <div className="hidden items-center gap-2 sm:flex">
          {stats.map((s) => (
            <span
              key={s.icon}
              className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold"
            >
              <span>{s.icon}</span>
              <span className={s.color}>{s.value}</span>
            </span>
          ))}
        </div>

        {/* Space Shop / Mars AI ikona-knopkalari */}
        {headerLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            title={item.label}
            className={({ isActive }) =>
              [
                'flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors',
                isActive ? 'bg-orange-500' : 'bg-slate-100 hover:bg-slate-200',
              ].join(' ')
            }
          >
            {item.icon}
          </NavLink>
        ))}

        {/* Obuna bo'ling */}
        <button className="rounded-full bg-violet-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-violet-700">
          Obuna bo‘ling
        </button>

        {/* Avatar */}
        <Link to="/registration">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-violet-500" />
        </Link>
      </div>
    </header>
  )
}

export default Header
