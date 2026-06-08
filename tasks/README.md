# 🚀 MarsHub — Jamoa uchun yo'riqnoma

Salom, jamoa! Men team lead'man. Loyihaning "skeleti" (asosiy strukturasi) tayyor.
Har biringizning o'z sahifangiz bor. Siz **faqat o'zingizning faylingizni** to'ldirasiz.

Bu papkada (`tasks/`) har biringiz uchun alohida yo'riqnoma fayli bor. O'zingiznikini oching va o'qing.

---

## 1-qadam: Loyihani yuklab olish (git clone)

Terminal (cmd / PowerShell) ochib quyidagini yozasiz:

```bash
git clone <LOYIHA_GITHUB_HAVOLASI>
cd MarsHub
npm install
npm run dev
```

`npm run dev` dan keyin terminalda `http://localhost:5173` chiqadi — uni brauzerda oching. Saytni ko'rasiz.

---

## 2-qadam: Kim qaysi faylda ishlaydi

| Ism | Sahifa | Qaysi faylda yozadi | Yo'riqnoma |
|---|---|---|---|
| **Bahodir** | Asosiy (Home) | `src/pages/HomePage.jsx` | [Bahodir-Asosiy.md](./Bahodir-Asosiy.md) |
| **Aziz** | Typing | `src/pages/TypingPage.jsx` | [Aziz-Typing.md](./Aziz-Typing.md) |
| **Mannonov Behruz** | Kurslarim | `src/pages/KurslarimPage.jsx` | [MannonovBehruz-Kurslarim.md](./MannonovBehruz-Kurslarim.md) |
| **Mansur** | Eduverse | `src/pages/EduversePage.jsx` | [Mansur-Eduverse.md](./Mansur-Eduverse.md) |
| **Ayub** | MarsCode | `src/pages/MarsCodePage.jsx` | [Ayub-MarsCode.md](./Ayub-MarsCode.md) |
| **Mirlan** | Blog | `src/pages/BlogPage.jsx` | [Mirlan-Blog.md](./Mirlan-Blog.md) |
| **Bahrom** | Onlayn to‘lov | `src/pages/TolovPage.jsx` | [Bahrom-Tolov.md](./Bahrom-Tolov.md) |
| **Sohiba** | Space Shop | `src/pages/ShopPage.jsx` | [Sohiba-Shop.md](./Sohiba-Shop.md) |
| **Behruz** | Mars AI | `src/pages/MarsAiPage.jsx` | [Behruz-MarsAI.md](./Behruz-MarsAI.md) |
| **Azamat** | Unity | `src/pages/UnityPage.jsx` | [Azamat-Unity.md](./Azamat-Unity.md) |

---

## 3-qadam: Muhim qoidalar (HAMMA O'QISIN!)

1. **Faqat o'zingizning faylingizni o'zgartiring.** Boshqa birovning sahifasini ushlamang.
2. **`src/App.jsx`, `src/main.jsx`, `src/components/` ni O'ZGARTIRMANG.** Bu yerda routing (sahifalar xaritasi) turadi — men (team lead) boshqaraman. Agar yangi route kerak bo'lsa — menga ayting.
3. Sahifa ichida xohlagancha komponent yarating. Masalan, Bahodir o'z papkasi yaratsa bo'ladi: `src/pages/home/` va ichiga komponentlarini qo'ysa bo'ladi.
4. **Stil (dizayn) uchun Tailwind klasslaridan foydalaning** (`className="..."`). Loyihada Tailwind sozlangan.
5. Ishni tugatgach `git add . && git commit -m "..." && git push` qiling. So'ng GitHub'da **Pull Request** oching.

---

## Loyiha tuzilishi (struktura)

```
MarsHub/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          ← BrowserRouter (TEGMANG)
    ├── App.jsx           ← Routes / sahifalar xaritasi (TEGMANG)
    ├── navItems.js       ← menyu knopkalari ro'yxati (TEGMANG)
    ├── index.css
    ├── components/
    │   ├── Layout.jsx    ← umumiy ramka: Header + Sidebar + Outlet (TEGMANG)
    │   ├── Header.jsx    ← tepa panel: logo, ballar, avatar (TEGMANG)
    │   └── Sidebar.jsx   ← chap menyu (TEGMANG)
    └── pages/            ← 👇 SIZNING ISHINGIZ SHU YERDA
        ├── HomePage.jsx        (Bahodir)
        ├── TypingPage.jsx      (Aziz)
        ├── KurslarimPage.jsx   (Mannonov Behruz)
        ├── EduversePage.jsx    (Mansur)
        ├── MarsCodePage.jsx    (Ayub)
        ├── BlogPage.jsx        (Mirlan)
        ├── TolovPage.jsx       (Bahrom)
        ├── ShopPage.jsx        (Sohiba)
        ├── MarsAiPage.jsx      (Behruz)
        └── UnityPage.jsx       (Azamat)
```

Omad, jamoa! 💪
