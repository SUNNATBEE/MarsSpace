import { Link } from 'react-router-dom'

// =====================================================================
//  ASOSIY SAHIFA  (Egasi: BAHODIR)
//  Manzil: "/"
//
//  Bu — saytning bosh sahifasi. Pastdagi 2 ta knopka boshqa sahifalarga
//  olib boradi:
//    - "Typing" knopkasi  ->  /typing  (Aziz tayyorlaydi)
//    - "Unity"  knopkasi  ->  /unity   (Azamat tayyorlaydi)
//  Bahodir: bu sahifaning dizayni va boshqa qismlarini shu fayl ichida yoz.
// =====================================================================
function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Asosiy sahifa</h1>
      <p className="mt-2 text-slate-400">Egasi: Bahodir — bu fayl ichida ishla.</p>

      {/* Asosiy sahifadagi knopkalar */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/typing"
          className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
        >
          ⌨️ Typing
        </Link>
        <Link
          to="/unity"
          className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-600"
        >
          🎮 Unity
        </Link>
      </div>
    </div>
  )
}

export default HomePage
