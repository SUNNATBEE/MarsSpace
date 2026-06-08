import { Link } from 'react-router-dom'

// =====================================================================
//  404 SAHIFA  (egasi yo'q — umumiy)
//  Mavjud bo'lmagan manzil yozilganda ko'rinadi.
// =====================================================================
function NotFoundPage() {
  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-slate-400">Bunday sahifa topilmadi.</p>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-2 font-semibold">
        Asosiyga qaytish
      </Link>
    </div>
  )
}

export default NotFoundPage
