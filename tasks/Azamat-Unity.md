# 🎮 Azamat — Unity sahifasi

## Sening fayling
```
src/pages/UnityPage.jsx
```
Faqat shu faylda ishlaysan.

## Manzil (URL)
`/unity` — **Asosiy sahifadagi** "Unity" knopkasi bosilganda ochiladi.

## Vazifang
Unity bo'limini yasaysan (Unity o'yini/loyihasi haqida ma'lumot yoki o'yinni ko'rsatadigan joy).

## Misol (boshlang'ich)
```jsx
function UnityPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Unity</h1>
      <p className="mt-3 text-slate-400">Bu yerda Unity bo'limini yasaysan.</p>

      <div className="mt-6 aspect-video rounded-xl bg-slate-800 flex items-center justify-center">
        <span className="text-slate-500">O'yin shu yerga joylashadi</span>
      </div>
    </div>
  )
}

export default UnityPage
```

## Tekshirish
`npm run dev` -> Asosiy sahifadagi **Unity** knopkasini bos -> sahifang chiqadi.

## Qoida
- `src/App.jsx`, `src/main.jsx`, `src/components/` ga **tegma**. Faqat o'z faylingni o'zgartir.
