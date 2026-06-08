# ⌨️ Aziz — Typing sahifasi

## Sening fayling
```
src/pages/TypingPage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/typing` — Asosiy sahifadagi **Typing** knopkasi bosilganda ochiladi.

## Vazifang
Typing (klaviaturada tez yozish) mashqi/o'yinini yasaysan. Masalan: ekranda matn chiqadi,
foydalanuvchi uni yozadi, to'g'ri yozganini tekshirasan.

## Qanday qilaman? (oddiy qilib)
1. `src/pages/TypingPage.jsx` faylini ochasan.
2. Yozilgan matnni saqlash uchun `useState` ishlatasan.
3. `<input>` ga yozganini ushlab, tekshirasan.

## Misol (boshlang'ich)
```jsx
import { useState } from 'react'

function TypingPage() {
  const [text, setText] = useState('')
  const namuna = 'Salom MarsHub'

  return (
    <div>
      <h1 className="text-4xl font-bold">Typing mashqi</h1>
      <p className="mt-3 text-lg text-slate-300">{namuna}</p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Shu yerga yoz..."
        className="mt-4 w-full rounded-lg bg-slate-800 px-4 py-2 text-white"
      />

      {text === namuna && <p className="mt-2 text-green-400">✅ To'g'ri!</p>}
    </div>
  )
}

export default TypingPage
```

## Tekshirish
`npm run dev` -> brauzerda Asosiy sahifadagi **Typing** knopkasini bos -> sening sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**.
- Faqat o'z faylingni o'zgartir. Ko'p komponent kerak bo'lsa `src/pages/typing/` papka ochib ichida yasa.
