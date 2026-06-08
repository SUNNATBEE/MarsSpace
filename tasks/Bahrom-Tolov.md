# 💳 Bahrom — Onlayn to'lov sahifasi

## Sening fayling
```
src/pages/TolovPage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/tolov` — yuqori menyudagi **Onlayn to‘lov** knopkasi bosilganda ochiladi.

## Vazifang
Onlayn to'lov bo'limini yasaysan: to'lov formasi (karta raqami, summa) yoki to'lov turlari (Payme, Click).

## Misol (oddiy forma)
```jsx
import { useState } from 'react'

function TolovPage() {
  const [karta, setKarta] = useState('')

  return (
    <div>
      <h1 className="text-4xl font-bold">Onlayn to‘lov</h1>

      <input
        value={karta}
        onChange={(e) => setKarta(e.target.value)}
        placeholder="Karta raqami"
        className="mt-4 w-full rounded-lg bg-slate-800 px-4 py-2"
      />
      <button className="mt-3 rounded-lg bg-green-500 px-6 py-2 font-semibold">
        To'lash
      </button>
    </div>
  )
}

export default TolovPage
```

## Tekshirish
`npm run dev` -> menyudan **Onlayn to‘lov** ni bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
