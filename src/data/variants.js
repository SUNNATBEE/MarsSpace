export const variants = {
  amazon: [
    {
      id: 1,
      options: [
        "const getAvg = arr => arr.reduce((acc, item) => acc + item.price, 0) / arr.length;",
        "const getAvg = arr => arr.map(item => item.price) / arr.length;",
        "const getAvg = arr => arr.reduce((acc, item) => acc + item.price) / arr.length;",
        "const getAvg = arr => arr.forEach(item => acc += item.price) / arr.length;"
      ]
    },
    {
      id: 2,
      options: [
        "const getShortest = arr => arr.reduce((a, b) => a.name.length < b.name.length ? a : b);",
        "const getShortest = arr => arr.sort((a, b) => a.name.length - b.name.length)[0].name;",
        "const getShortest = arr => arr.filter(item => item.name.length < 5);",
        "const getShortest = arr => arr.find(item => item.name.length === Math.min(...arr.map(x => x.name.length)));"
      ]
    },
    {
      id: 3,
      options: [
        "Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24))",
        "Math.abs(date2.getDate() - date1.getDate())",
        "Math.abs(date2 - date1) / 1000",
        "date2.getTime() - date1.getTime()"
      ]
    },
    {
      id: 4,
      options: [
        "products.filter(p => p.inStock && p.price > 50)",
        "products.find(p => p.inStock && p.price > 50)",
        "products.map(p => p.inStock && p.price > 50)",
        "products.filter(p => p.inStock || p.price > 50)"
      ]
    },
    {
      id: 5,
      options: [
        "Birinchi element ob'ekt bo'lgani uchun natija '[object Object]20' yoki shunga o'xshash kutilmagan satr/NaN bo'ladi.",
        "Natija 30 chiqadi, chunki reduce avtomatik ravishda 0 dan boshlaydi.",
        "Dastur TypeError xatoligini berib darhol to'xtaydi.",
        "Natija massivning nusxasi bo'ladi."
      ]
    },
    {
      id: 6,
      options: [
        "const getMost = arr => {\n  const count = arr.reduce((acc, x) => (acc[x] = (acc[x] || 0) + 1, acc), {});\n  return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);\n};",
        "const getMost = arr => arr.filter((x, i) => arr.indexOf(x) === i).sort()[0];",
        "const getMost = arr => Math.max(...arr);",
        "const getMost = arr => arr.find(x => arr.lastIndexOf(x) !== arr.indexOf(x));"
      ]
    },
    {
      id: 7,
      options: [
        "[...new Set(cities)].sort()",
        "cities.filter((c, i) => cities.indexOf(c) === i).reverse()",
        "new Set(cities).sort()",
        "cities.distinct().sort()"
      ]
    },
    {
      id: 8,
      options: [
        "structuredClone(original)",
        "JSON.parse(JSON.stringify(original))",
        "{ ...original }",
        "Object.assign({}, original)"
      ]
    },
    {
      id: 9,
      options: [
        "4",
        "10",
        "6",
        "Xatolik yuz beradi, chunki forEach ichida return ishlatib bo'lmaydi"
      ]
    },
    {
      id: 10,
      options: [
        "Ob'ektning key-value (kalit-qiymat) juftliklaridan iborat [key, value] massivlarining massivini",
        "Ob'ektning faqat kalitlaridan iborat massivni",
        "Ob'ektning faqat qiymatlaridan iborat massivni",
        "Ob'ektning barcha xususiyatlarini JSON formatida"
      ]
    }
  ],
  google: [
    {
      id: 1,
      options: [
        "Bir nechta state o'zgarishlarini bitta renderlash (re-render)ga birlashtirish (taymerlar, eventlar va va'dalarda ham)",
        "State-larni faqat server tomonda yuklash mexanizmi",
        "Renderlash tezligini oshirish uchun barcha state o'zgarishlarini o'chirish",
        "React-ning faqat useEffect ichidagi statelarni yangilashi"
      ]
    },
    {
      id: 2,
      options: [
        "Nomi har doim 'use' so'zi bilan boshlanishi kerak (masalan, useFetch)",
        "Nomi faqat katta harf bilan boshlanishi kerak",
        "Nomi 'hook' so'zi bilan tugashi kerak",
        "Maxsus qoidasi yo'q, istalgancha nomlash mumkin"
      ]
    },
    {
      id: 3,
      options: [
        "Uzatilayotgan ob'ektni parent komponentda useMemo yordamida keshlab qo'yish kerak",
        "Komponentni useEffect ichida chaqirish kerak",
        "React.memo o'rniga har doim useMemo ishlatish kerak",
        "Hech narsa qilish shart emas, React buni avtomatik hal qiladi"
      ]
    },
    {
      id: 4,
      options: [
        "Effect ichida o'zgartiriladigan state o'zgaruvchisini dependency (bog'liqlik) massiviga kiritish",
        "Dependency massivini butunlay bo'sh qoldirish",
        "useEffect ichida tozalash funksiyasini (cleanup) qaytarmaslik",
        "State o'zgaruvchisini dependency massiviga umuman kiritmaslik"
      ]
    },
    {
      id: 5,
      options: [
        "Props-drilling muammosini hal qilib, ma'lumotlarni komponentlar daraxti bo'ylab global uzatish uchun",
        "Komponentlar o'rtasida CSS stillarini osongina almashish uchun",
        "React ilovasida sahifalararo marshrutlash (routing)ni amalga oshirish uchun",
        "Serverdan ma'lumotlarni tezroq yuklab olish uchun"
      ]
    },
    {
      id: 6,
      options: [
        "Yo'q, ref.current qiymatining o'zgarishi re-render chaqirmaydi",
        "Ha, har doim re-render bo'ladi",
        "Faqat ref input elementiga biriktirilgan bo'lsa re-render bo'ladi",
        "Faqat useEffect ichida o'zgartirilsa re-render bo'ladi"
      ]
    },
    {
      id: 7,
      options: [
        "Production rejimida u hech qanday qo'shimcha tekshiruvlar yoki renderlarni bajarmaydi (effektsiz bo'ladi)",
        "Ilovani xatolik yuz berganda avtomatik ravishda qayta ishga tushiradi",
        "Production da ham effektlarni ikki marta chaqirishda davom etadi",
        "Saytni tezkor optimizatsiya qiladi"
      ]
    },
    {
      id: 8,
      options: [
        "Ro'yxat elementlari tartibi o'zgarganda re-render va state chalkashliklariga olib kelishi mumkin",
        "React index berilgan ro'yxatni umuman chizmaydi",
        "Bu xavfsizlik (security) xatolariga sabab bo'ladi",
        "Faqat localstorage-ga yozishda xatolik beradi"
      ]
    },
    {
      id: 9,
      options: [
        "useCallback funksiyaning o'zini keshlaydi, useMemo esa funksiya hisoblagan natijani keshlaydi",
        "useCallback renderdan oldin, useMemo esa renderdan keyin ishlaydi",
        "useCallback faqat state o'zgarganda ishlaydi, useMemo esa prop o'zgarganda",
        "Ularning hech qanday farqi yo'q"
      ]
    },
    {
      id: 10,
      options: [
        "Parent komponentning DOM iyerarxiyasidan tashqarida (masalan, body oxirida) komponent chizish uchun",
        "Boshqa veb-saytdan ma'lumotlarni import qilish uchun",
        "React-da animatsiyalarni osonroq boshqarish uchun",
        "Ilova fayllarini serverga yuklash uchun"
      ]
    }
  ],
  netflix: [
    {
      id: 1,
      options: [
        "#header .nav-item (ID + Class selektori)",
        ".nav-item a (Class + Teg selektori)",
        "div.navigation a (Teg.Class + Teg selektori)",
        "header nav a (Uchta Teg selektori)"
      ]
    },
    {
      id: 2,
      options: [
        "justify-content: center; align-items: center;",
        "align-content: center; text-align: center;",
        "margin: auto; text-align: center;",
        "float: center; vertical-align: middle;"
      ]
    },
    {
      id: 3,
      options: [
        "gap (yoki grid-gap)",
        "spacing",
        "margin-between",
        "grid-padding"
      ]
    },
    {
      id: 4,
      options: [
        "<nav> tegi",
        "<navigation> tegi",
        "<div id=\"menu\"> tegi",
        "<menu-bar> tegi"
      ]
    },
    {
      id: 5,
      options: [
        "Belgilangan width o'z ichiga padding va border qalinligini oladi (umumiy kenglik 300px bo'lib qoladi)",
        "Belgilangan width-ga padding va border qo'shimcha ravishda qo'shiladi (umumiy kenglik 350px bo'ladi)",
        "Width faqat kontentni belgilaydi, padding hisobga olinmaydi",
        "Element kengligi avtomatik ravishda 100% qilib olinadi"
      ]
    },
    {
      id: 6,
      options: [
        ":root { --main-color: red; } va keyin color: var(--main-color);",
        "var-main-color: red; va keyin color: $main-color;",
        "$main-color: red; va keyin color: var(main-color);",
        "root { main-color: red; } va keyin color: main-color;"
      ]
    },
    {
      id: 7,
      options: [
        "Rasm yuklanmay qolganda uning o'rniga chiqadigan matnni belgilaydi va SEO/ekran o'quvchilarga yordam beradi",
        "Rasm ustiga sichqoncha olib borilganda tooltip matnini chiqaradi",
        "Rasmning URL manzilini ko'rsatadi",
        "Rasm yuklanish tezligini oshiradi"
      ]
    },
    {
      id: 8,
      options: [
        "Element skroll bo'lib ma'lum bir chegaraga (masalan, top: 0) yetganda",
        "Sahifa yuklanishi bilanoq doim ekranning tepasida qoladi (position: fixed kabi)",
        "Faqat uni o'rab turgan parent element bo'lmasa ishlaydi",
        "Faqat sichqoncha ustiga bosilganda yopishadi"
      ]
    },
    {
      id: 9,
      options: [
        "display: none elementni butunlay DOM va joylashuvdan o'chiradi; visibility: hidden esa joyini saqlab qolib, faqat yashiradi",
        "display: none faqat matnni yashiradi, visibility: hidden esa butun blokni",
        "display: none faqat mobil qurilmalarda ishlaydi, visibility: hidden esa desktopda",
        "Ularning hech qanday farqi yo'q"
      ]
    },
    {
      id: 10,
      options: [
        "@media (max-width: 768px) { ... }",
        "@media (min-width: 768px) { ... }",
        "@media (width < 768px) { ... }",
        "@screen and (max-width: 768px) { ... }"
      ]
    }
  ],
  facebook: [
    {
      id: 1,
      options: [
        "1, 4, 3, 2",
        "1, 2, 3, 4",
        "1, 4, 2, 3",
        "1, 3, 4, 2"
      ]
    },
    {
      id: 2,
      options: [
        "Ichki funksiyaning o'zini o'rab turgan tashqi funksiya skopidagi o'zgaruvchilarga kirish huquqi",
        "Dasturni xatoliklardan so'ng darhol yopish mexanizmi",
        "Ob'ektlarni JSON formatiga o'tkazish funksiyasi",
        "O'zgaruvchilarni o'zgartirib bo'lmas holatga keltirish"
      ]
    },
    {
      id: 3,
      options: [
        "Object.getPrototypeOf(obj)",
        "obj.prototype",
        "obj.getProto()",
        "Object.prototypeOf(obj)"
      ]
    },
    {
      id: 4,
      options: [
        "Debounce hodisalar oqimi tugagandan so'ng chaqiradi, Throttle esa ma'lum vaqt oralig'ida faqat bir marta chaqiradi",
        "Debounce faqat React-da ishlaydi, Throttle oddiy JS-da",
        "Debounce animatsiyalar uchun, Throttle API so'rovlar uchun",
        "Ularning vazifasi butunlay bir xil"
      ]
    },
    {
      id: 5,
      options: [
        "O'zgaruvchini let, const yoki var kalit so'zisiz e'lon qilish (global scope ifloslanishi)",
        "Sikl ichida break kalit so'zini ishlatish",
        "Funksiyadan qiymat qaytarish (return)",
        "Massiv elementlarini o'zgartirish"
      ]
    },
    {
      id: 6,
      options: [
        "U o'zining leksik (lexical) muhitidan, ya'ni o'zi yozilgan joydagi this qiymatini oladi",
        "U dinamik ravishda funksiya chaqirilgan ob'ektga bog'lanadi",
        "Arrow funksiyalarda this har doim undefined bo'ladi",
        "U har doim global window ob'ektiga teng bo'ladi"
      ]
    },
    {
      id: 7,
      options: [
        "localStorage ma'lumotlari brauzer yopilganda o'chmaydi, sessionStorage esa tab yopilganda o'chib ketadi",
        "localStorage faqat satrlarni saqlaydi, sessionStorage esa ob'ektlarni ham",
        "localStorage xavfsizroq va shifrlangan bo'ladi",
        "localStorage faqat server tomonda mavjud"
      ]
    },
    {
      id: 8,
      options: [
        "Promise.all bitta promise reject bo'lsa darhol rad etiladi, allSettled esa hammasi tugashini (muvaffaqiyatli yoki xato) kutadi",
        "Promise.all tezroq ishlaydi",
        "Promise.allSettled faqat muvaffaqiyatli promisalarni qaytaradi",
        "Ularning hech qanday farqi yo'q"
      ]
    },
    {
      id: 9,
      options: [
        "?? faqat null yoki undefined bo'lganda o'ng tomondagi qiymatni oladi, || esa barcha falsy (0, '', false) qiymatlarda ham",
        "?? faqat musbat sonlar bilan ishlaydi",
        "?? sekinroq ishlaydi",
        "?? sintaktik jihatdan xato hisoblanadi"
      ]
    },
    {
      id: 10,
      options: [
        "Funksiya bajarilishini vaqtincha to'xtatib, belgilangan qiymatni qaytaradi va keyingi safar to'xtagan joyidan davom ettiradi",
        "Dasturni butunlay to'xtatib, xotirani tozalaydi",
        "Funksiyani parallel ravishda boshqa thread-da ishga tushiradi",
        "Serverga ma'lumot yuboradi"
      ]
    }
  ]
};
