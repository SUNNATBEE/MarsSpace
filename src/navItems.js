// =====================================================================
//  CHAP MENYU (SIDEBAR) KNOPKALARI RO'YXATI
//  Sidebar shu ro'yxatdan o'qib knopkalarni chizadi.
//  "to" -> qaysi manzilga o'tishi.  "label" -> yozuv.  "icon" -> belgi.
//  Yangi sahifa qo'shsangiz, shu yerga ham bitta qator qo'shing.
// =====================================================================
export const navItems = [
  { to: '/', label: 'Asosiy', icon: '🏠', end: true }, // end:true -> faqat "/" da aktiv
  { to: '/kurslarim', label: 'Kurslarim', icon: '📚' },
  { to: '/eduverse', label: 'Eduverse', icon: '🌌' },
  { to: '/marscode', label: 'MarsCode', icon: '⟨⟩' },
  { to: '/blog', label: 'Blog', icon: '📝' },
  { to: '/tolov', label: 'Onlayn to‘lov', icon: '💳' },
]

// Header (tepa panel)dagi qo'shimcha bo'limlar (ikona-knopka shaklida)
export const headerLinks = [
  { to: '/shop', label: 'Space Shop', icon: '🛒' },
  { to: '/mars-ai', label: 'Mars AI', icon: '🤖' },
]
