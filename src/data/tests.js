export const tests = {
  amazon: [
    {
      id: 1,
      title: "Mahsulot Narxlarining O'rtacha Qiymatini Hisoblash",
      question: "Massivdagi ob'ektlarning 'price' maydoni bo'yicha o'rtacha qiymatini to'g'ri hisoblaydigan JavaScript funksiyasini aniqlang.",
      code: "const items = [{ price: 100 }, { price: 200 }, { price: 300 }];"
    },
    {
      id: 2,
      title: "Eng Qisqa Nomli Mahsulotni Topish",
      question: "Ob'ektlardan tashkil topgan massivda eng qisqa 'name' qiymatiga ega ob'ektni qaytaruvchi kod qaysi?",
      code: "const items = [{ name: 'Laptop' }, { name: 'PC' }, { name: 'Monitor' }];"
    },
    {
      id: 3,
      title: "Buyurtma Yetib Kelgan Kunlar Sonini Hisoblash",
      question: "Ikki sana (Date ob'ektlari) o'rtasidagi farqni kunlar sonida hisoblovchi to'g'ri ifodani toping.",
      code: "const date1 = new Date('2026-06-01');\nconst date2 = new Date('2026-06-09');"
    },
    {
      id: 4,
      title: "Ombordagi Mavjud Mahsulotlarni Filtrlash",
      question: "Quyidagi massivdan faqat omborda mavjud (inStock: true) va narxi 50 dan yuqori bo'lgan mahsulotlarni filtrlaydigan kodni aniqlang.",
      code: "const products = [\n  { id: 1, inStock: true, price: 60 },\n  { id: 2, inStock: false, price: 80 },\n  { id: 3, inStock: true, price: 40 }\n];"
    },
    {
      id: 5,
      title: "Buyurtmalar Umumiy Narxini Hisoblash",
      question: "Savatchadagi mahsulotlarning umumiy summasini hisoblashda reduce metodining boshlang'ich qiymati ko'rsatilmaganda nima yuz beradi?",
      code: "const cart = [{ price: 10 }, { price: 20 }];\ncart.reduce((sum, item) => sum + item.price);"
    },
    {
      id: 6,
      title: "Eng Ko'p Buyurtma Berilgan Mahsulotni Topish",
      question: "Berilgan buyurtmalar massividan qaysi mahsulot id'si eng ko'p marta takrorlanganini aniqlaydigan to'g'ri funksiya qaysi?",
      code: "const orders = [1, 2, 3, 1, 2, 1, 4];"
    },
    {
      id: 7,
      title: "Noyob Shaharlardan Alfavit Bo'yicha Ro'yxat Tuzish",
      question: "Takrorlanuvchi shaharlar nomlaridan iborat massivdan faqat noyoblarini olib, ularni alifbo tartibida saralovchi kodni aniqlang.",
      code: "const cities = ['Toshkent', 'Samarqand', 'Toshkent', 'Buxoro', 'Samarqand'];"
    },
    {
      id: 8,
      title: "Deep Clone (Chuqur Nusxalash)",
      question: "JavaScript-da ob'ektni chuqur nusxalash (deep clone) qilishning eng zamonaviy o'rnatilgan (built-in) usuli qaysi?",
      code: "const original = { a: 1, b: { c: 2 } };"
    },
    {
      id: 9,
      title: "Savatchadagi Umumiy Mahsulotlar Sonini Hisoblash",
      question: "Quyidagi kod bajarilgandan keyin count o'zgaruvchisining qiymati nima bo'ladi?",
      code: "let count = 0;\nconst nums = [1, 2, 3, 4];\nnums.forEach(num => {\n  if (num % 2 === 0) return;\n  count += num;\n});"
    },
    {
      id: 10,
      title: "Object Entries Vazifasi",
      question: "JavaScript-da Object.entries(obj) metodi nima qaytaradi?",
      code: "const user = { name: 'Ali', age: 20 };\nObject.entries(user);"
    }
  ],
  google: [
    {
      id: 1,
      title: "React State Batching",
      question: "React 18 da 'automatic batching' nima degani?",
      code: "setTimeout(() => {\n  setCount(c => c + 1);\n  setFlag(f => !f);\n}, 100);"
    },
    {
      id: 2,
      title: "React Custom Hook yaratish",
      question: "React-da custom hook yaratish uchun qaysi nomlash qoidasiga amal qilish shart?",
      code: "function useCustomLogic() {\n  const [state, setState] = useState(null);\n  return state;\n}"
    },
    {
      id: 3,
      title: "React.memo va performance",
      question: "React.memo bilan o'ralgan komponentga prop sifatida ob'ekt uzatilsa va u har renderda qayta yaratilsa, re-renderning oldini qanday olish mumkin?",
      code: "const Child = React.memo(({ data }) => <p>{data.info}</p>);"
    },
    {
      id: 4,
      title: "useEffect Dependency Array",
      question: "useEffect hooki ichida cheksiz re-render sikli (infinite loop) hosil bo'lishining eng keng tarqalgan sababi nima?",
      code: "useEffect(() => {\n  setCount(count + 1);\n}, [count]);"
    },
    {
      id: 5,
      title: "React Context API nima?",
      question: "React Context API nima maqsadda ishlatiladi?",
      code: "const UserContext = React.createContext();"
    },
    {
      id: 6,
      title: "useRef va DOM elementlari",
      question: "useRef orqali olingan ref.current qiymati o'zgarganda komponent qayta render bo'ladimi?",
      code: "const inputRef = useRef(null);\ninputRef.current = 'Yangi Qiymat';"
    },
    {
      id: 7,
      title: "Strict Mode vazifasi",
      question: "React-da <StrictMode> komponenti production (kod tayyor bo'lgan) rejimda qanday ishlaydi?",
      code: "<React.StrictMode>\n  <App />\n</React.StrictMode>"
    },
    {
      id: 8,
      title: "React-da Key Prop nima uchun kerak?",
      question: "Ro'yxatlarni render qilayotganda key propiga massiv indexini berish nima uchun tavsiya etilmaydi?",
      code: "items.map((item, index) => <li key={index}>{item}</li>);"
    },
    {
      id: 9,
      title: "useCallback vs useMemo",
      question: "useCallback va useMemo hooklarining asosiy farqi nimada?",
      code: "const memoizedCallback = useCallback(() => doSomething(a), [a]);\nconst memoizedValue = useMemo(() => computeValue(a), [a]);"
    },
    {
      id: 10,
      title: "React Portal nima?",
      question: "React Portal nima uchun ishlatiladi?",
      code: "ReactDOM.createPortal(children, domNode);"
    }
  ],
  netflix: [
    {
      id: 1,
      title: "CSS Specificity",
      question: "Quyidagi CSS selektorlaridan qaysi biri eng yuqori darajadagi ustunlikka (specificity) ega?",
      code: "/* CSS */\n#header .nav-item { color: red; }\n.nav-item a { color: blue; }\ndiv.navigation a { color: green; }\nheader nav a { color: yellow; }"
    },
    {
      id: 2,
      title: "Flexbox Center Alignment",
      question: "Flex konteyner ichidagi elementlarni ham gorizontal, ham vertikal ravishda markazlashtirish uchun qaysi CSS xossalari yozilishi kerak?",
      code: ".container {\n  display: flex;\n  /* ? */\n}"
    },
    {
      id: 3,
      title: "CSS Grid Gap",
      question: "CSS Grid-da ustunlar va qatorlar orasidagi masofani belgilash uchun qaysi zamonaviy xususiyat ishlatiladi?",
      code: ".grid-container {\n  display: grid;\n  /* ? */: 20px;\n}"
    },
    {
      id: 4,
      title: "HTML5 Semantic Elements",
      question: "HTML5 da qidiruv tizimlari (SEO) va ekran o'quvchilari (screen reader) uchun saytning asosiy navigatsiyasini qaysi teg yordamida o'rash eng to'g'ri hisoblanadi?",
      code: "<!-- HTML5 -->\n<header>\n  <!-- Qaysi teg? -->\n    <a href='/'>Bosh sahifa</a>\n  <!-- Qaysi teg? -->\n</header>"
    },
    {
      id: 5,
      title: "CSS Box Model - Border Box",
      question: "box-sizing: border-box; o'rnatilganda elementning umumiy kengligi (width) qanday hisoblanadi?",
      code: ".box {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid black;\n  box-sizing: border-box;\n}"
    },
    {
      id: 6,
      title: "CSS Custom Properties (Variables)",
      question: "CSS-da global o'zgaruvchini qanday e'lon qilish va undan qanday foydalanish to'g'ri ko'rsatilgan?",
      code: "/* CSS Variable Definition */"
    },
    {
      id: 7,
      title: "HTML5 Alt Attribute",
      question: "<img> tegida 'alt' atributi qanday vazifani bajaradi?",
      code: "<img src='logo.png' alt='Mars Space Logotipi' />"
    },
    {
      id: 8,
      title: "CSS Position - Sticky",
      question: "position: sticky; qachon ishlay boshlaydi (ya'ni ekranga yopishadi)?",
      code: ".header {\n  position: sticky;\n  top: 0;\n}"
    },
    {
      id: 9,
      title: "CSS Display None vs Visibility Hidden",
      question: "display: none; va visibility: hidden; xossalarining asosiy farqi nimada?",
      code: ".box-a { display: none; }\n.box-b { visibility: hidden; }"
    },
    {
      id: 10,
      title: "CSS Media Queries",
      question: "Faqat ekran kengligi 768 piksel yoki undan kichik bo'lgan qurilmalarga CSS stillarini qo'llash uchun qaysi media query to'g'ri yozilgan?",
      code: "/* Mobil qurilmalar uchun */"
    }
  ],
  facebook: [
    {
      id: 1,
      title: "Event Loop va Asynchronous JS",
      question: "Quyidagi kod bajarilganda konsolga qaysi tartibda natijalar chiqadi?",
      code: "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');"
    },
    {
      id: 2,
      title: "JS Closures (Yopilishlar)",
      question: "JavaScript-da 'closure' (yopilish) nima?",
      code: "function outer() {\n  let x = 10;\n  return function inner() {\n    console.log(x);\n  };\n}"
    },
    {
      id: 3,
      title: "JavaScript Prototype",
      question: "JavaScript-da ob'ektning prototipini (prototype) olish yoki tekshirish uchun qaysi standart metoddan foydalaniladi?",
      code: "const animal = { eats: true };\nconst rabbit = Object.create(animal);"
    },
    {
      id: 4,
      title: "Debounce va Throttle farqi",
      question: "Debounce va Throttle tushunchalarining asosiy farqi nimada?",
      code: "// UI optimization"
    },
    {
      id: 5,
      title: "Strict Mode in JS",
      question: "JavaScript-da 'use strict' rejimi yoqilganda qanday holat taqiqlanadi va xatolik beradi?",
      code: "\"use strict\";\nx = 10;"
    },
    {
      id: 6,
      title: "JavaScript 'this' kalit so'zi",
      question: "Arrow function (yoyli funksiya) ichidagi 'this' kalit so'zi qanday aniqlanadi?",
      code: "const obj = {\n  val: 42,\n  getVal: () => this.val\n};"
    },
    {
      id: 7,
      title: "localStorage va sessionStorage",
      question: "localStorage va sessionStorage o'rtasidagi asosiy farq nimada?",
      code: "localStorage.setItem('key', 'val');\nsessionStorage.setItem('key', 'val');"
    },
    {
      id: 8,
      title: "JavaScript Promise.all vs Promise.allSettled",
      question: "Promise.all va Promise.allSettled o'rtasidagi farq nima?",
      code: "const promises = [p1, p2, p3];"
    },
    {
      id: 9,
      title: "Nullish Coalescing Operator",
      question: "?? (Nullish coalescing) operatori || (OR) operatoridan qanday farq qiladi?",
      code: "const score = 0;\nconst val1 = score ?? 10;\nconst val2 = score || 10;"
    },
    {
      id: 10,
      title: "JavaScript Generators",
      question: "Generator funksiyalarda ishlatiladigan 'yield' kalit so'zining vazifasi nima?",
      code: "function* generator() {\n  yield 1;\n  yield 2;\n}"
    }
  ]
};
