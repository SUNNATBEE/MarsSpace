# 👨‍💻 Bahodir — Asosiy (Home) sahifasi

## Sening fayling
```
src/pages/HomePage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
Sayt ochilganda birinchi ko'rinadigan sahifa: `/`

## Vazifang
Saytning bosh sahifasini chiroyli qilib yasaysan. Bu sahifada ikkita maxsus knopka bor:
- **Typing** knopkasi — bosilsa `/typing` sahifasiga o'tadi (uni Aziz qiladi).
- **Unity** knopkasi — bosilsa `/unity` sahifasiga o'tadi (uni Azamat qiladi).

> ⚠️ Bu ikkita knopka allaqachon yozilgan. Ularning dizaynini o'zgartirsang bo'ladi,
> lekin `<Link to="/typing">` va `<Link to="/unity">` qismini **o'chirma** — aks holda
> knopkalar boshqa sahifaga o'tmay qoladi.

## Qanday qilaman? (oddiy qilib)
1. `src/pages/HomePage.jsx` faylini ochasan.
2. `return ( ... )` ichidagi narsalarni o'zgartirib, o'zingning dizayningni qo'yasan.
3. Yangi narsa qo'shsang, `className="..."` ichiga Tailwind klasslarini yozasan (rang, joy va h.k.).

## Misol
```jsx
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">MarsHub'ga xush kelibsiz!</h1>
      <p className="mt-3 text-slate-400">Bu yerda o'zingni matningni yoz.</p>

      <div className="mt-8 flex gap-4">
        <Link to="/typing" className="rounded-xl bg-orange-500 px-6 py-3">⌨️ Typing</Link>
        <Link to="/unity" className="rounded-xl bg-indigo-500 px-6 py-3">🎮 Unity</Link>
      </div>
    </div>
  )
}

export default HomePage
```

## Tekshirish
Terminalda `npm run dev` ishlayotgan bo'lsin. Brauzerda `http://localhost:5173/` ni och —
o'zgarishlaring darrov ko'rinadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**.
- Faqat o'z faylingni o'zgartir.
