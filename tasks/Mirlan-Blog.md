# 📝 Mirlan — Blog sahifasi

## Sening fayling
```
src/pages/BlogPage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/blog` — yuqori menyudagi **Blog** knopkasi bosilganda ochiladi.

## Vazifang
Blog (maqolalar) bo'limini yasaysan: maqolalar ro'yxati (sarlavha, qisqa matn, sana).

## Misol (maqolalar ro'yxati)
```jsx
function BlogPage() {
  const maqolalar = [
    { id: 1, sarlavha: 'React nima?', sana: '2026-06-01' },
    { id: 2, sarlavha: 'Router qanday ishlaydi?', sana: '2026-06-05' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-6 space-y-4">
        {maqolalar.map((m) => (
          <article key={m.id} className="rounded-xl bg-slate-800 p-4">
            <h3 className="text-lg font-semibold">{m.sarlavha}</h3>
            <p className="text-sm text-slate-400">{m.sana}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
```

## Tekshirish
`npm run dev` -> menyudan **Blog** ni bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
