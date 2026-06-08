# 🤖 Behruz — Mars AI sahifasi

## Sening fayling
```
src/pages/MarsAiPage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/mars-ai` — yuqori menyudagi **Mars AI** knopkasi bosilganda ochiladi.

## Vazifang
Mars AI bo'limini yasaysan: masalan, chat oynasi (savol yozasan, AI javob beradi ko'rinishi).

## Misol (oddiy chat ko'rinishi)
```jsx
import { useState } from 'react'

function MarsAiPage() {
  const [savol, setSavol] = useState('')

  return (
    <div>
      <h1 className="text-4xl font-bold">Mars AI</h1>

      <div className="mt-6 rounded-xl bg-slate-800 p-4 text-slate-300">
        Salom! Men Mars AI. Savolingni yoz.
      </div>

      <input
        value={savol}
        onChange={(e) => setSavol(e.target.value)}
        placeholder="Savol yoz..."
        className="mt-4 w-full rounded-lg bg-slate-800 px-4 py-2"
      />
    </div>
  )
}

export default MarsAiPage
```

## Tekshirish
`npm run dev` -> menyudan **Mars AI** ni bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
