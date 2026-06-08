# 🛒 Sohiba — Space Shop sahifasi

## Sening fayling
```
src/pages/ShopPage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/shop` — yuqori menyudagi **Space Shop** knopkasi bosilganda ochiladi.

## Vazifang
Do'kon (Space Shop) bo'limini yasaysan: mahsulotlar kartlari (rasm, nom, narx, "Sotib olish" knopkasi).

## Misol (mahsulotlar ro'yxati)
```jsx
function ShopPage() {
  const mahsulotlar = [
    { id: 1, nom: 'Mars futbolka', narx: '120 000' },
    { id: 2, nom: 'Mars krujka', narx: '60 000' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold">Space Shop</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {mahsulotlar.map((m) => (
          <div key={m.id} className="rounded-xl bg-slate-800 p-4">
            <h3 className="font-semibold">{m.nom}</h3>
            <p className="text-orange-400">{m.narx} so'm</p>
            <button className="mt-2 rounded-lg bg-orange-500 px-4 py-1.5 text-sm">
              Sotib olish
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopPage
```

## Tekshirish
`npm run dev` -> menyudan **Space Shop** ni bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
