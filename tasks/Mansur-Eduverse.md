# 🌌 Mansur — Eduverse sahifasi

## Sening fayling
```
src/pages/EduversePage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/eduverse` — yuqori menyudagi **Eduverse** knopkasi bosilganda ochiladi.

## Vazifang
Eduverse bo'limini yasaysan (ta'lim olami: bo'limlar, kategoriyalar yoki bannerlar).

## Misol (boshlang'ich)
```jsx
function EduversePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Eduverse</h1>
      <p className="mt-3 text-slate-400">Bu yerda o'zingning kontentingni qo'shasan.</p>

      <div className="mt-6 rounded-xl bg-slate-800 p-6">
        <h3 className="text-xl font-semibold">Bo'lim nomi</h3>
        <p className="text-slate-400">Tavsif...</p>
      </div>
    </div>
  )
}

export default EduversePage
```

## Tekshirish
`npm run dev` -> menyudan **Eduverse** ni bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
- Ko'p komponent kerak bo'lsa `src/pages/eduverse/` papka ochib ishla.
