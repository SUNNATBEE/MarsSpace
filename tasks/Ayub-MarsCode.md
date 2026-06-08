# 💻 Ayub — MarsCode sahifasi

## Sening fayling
```
src/pages/MarsCodePage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/marscode` — yuqori menyudagi **MarsCode** knopkasi bosilganda ochiladi.

## Vazifang
MarsCode bo'limini yasaysan (kod yozish/mashq yoki kod misollari ko'rsatiladigan joy).

## Misol (boshlang'ich)
```jsx
function MarsCodePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">MarsCode</h1>
      <pre className="mt-6 rounded-xl bg-slate-800 p-4 text-green-300">
        <code>{`console.log("Salom MarsCode")`}</code>
      </pre>
    </div>
  )
}

export default MarsCodePage
```

## Tekshirish
`npm run dev` -> menyudan **MarsCode** ni bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
