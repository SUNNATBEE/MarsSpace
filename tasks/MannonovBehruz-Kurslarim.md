# 📚 Mannonov Behruz — Kurslarim sahifasi

## Sening fayling
```
src/pages/KurslarimPage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/kurslarim` — yuqori menyudagi **Kurslarim** knopkasi bosilganda ochiladi.

## Vazifang
Foydalanuvchining kurslari ro'yxatini chiroyli qilib ko'rsatasan (kart shaklida: nomi, rasmi, foizi).

## Misol (ro'yxatni chizish)
```jsx
function KurslarimPage() {
  const kurslar = [
    { id: 1, nom: 'React asoslari', foiz: 40 },
    { id: 2, nom: 'JavaScript', foiz: 80 },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold">Kurslarim</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {kurslar.map((k) => (
          <div key={k.id} className="rounded-xl bg-slate-800 p-4">
            <h3 className="text-lg font-semibold">{k.nom}</h3>
            <p className="text-slate-400">Tugallandi: {k.foiz}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KurslarimPage
```

> 💡 Ro'yxatni chizishda `.map()` ishlatamiz va har bir elementga `key={...}` beramiz.

## Tekshirish
`npm run dev` -> menyudan **Kurslarim** ni bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
