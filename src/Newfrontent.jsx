import React, { useState, useEffect } from 'react';

const initialModules = [
  {
    id: 1, block: 1, moduleNum: 1, blockNum: 1, name: "1 MARS", type: "Interaktiv testlar",
    questions: [
      { id: "m1_1", type: "variant", title: "1. Mars platformasida darslarni qanday tartibda ko'rish kerak?", options: ["Ketma-ketlikda", "Xohlagan usulda", "Faqat oxirgisini", "Faqat birinchisini"], correct: "Ketma-ketlikda" },
      { id: "m1_2", type: "variant", title: "2. Platformada o'tilgan darslar uchun ballar qanday hisoblanadi?", options: ["Avtomatik tizim tomonidan", "Ustoz qo'lda kiritadi", "Hisoblanmaydi", "O'quvchi o'zi yozadi"], correct: "Avtomatik tizim tomonidan" },
      { id: "m1_3", type: "variant", title: "3. Mars platformasining asosiy vazifasi nima?", options: ["O'quv jarayonini va natijalarni kuzatish", "Kino ko'rish", "O'yinlar yuklab olish", "Rasm tahrirlash"], correct: "O'quv jarayonini va natijalarni kuzatish" },
      {
        id: "m1_4",
        type: "drag-drop",
        title: "4. Quyidagi Mars terminlarini to'g'ri ta'rifiga moslashtiring:",
        leftItems: [
          { id: "L1", text: "1. Coin" },
          { id: "L2", text: "2. Space Shop" },
          { id: "L3", text: "3. XP" }
        ],
        rightItems: [
          { id: "R1", text: "Sovg'alar sotib olish do'koni" },
          { id: "R2", text: "Darsda to'planadigan virtual pul" },
          { id: "R3", text: "O'quvchining tajriba ballari" }
        ],
        correctMapping: { "L1": "R2", "L2": "R1", "L3": "R3" } 
      },
      { id: "m1_5", type: "variant", title: "5. Platformada vazifalar qayerga topshiriladi?", options: ["Maxsus 'Vazifa' bo'limiga", "Telegram guruhga", "Ustozning shaxsiy pochtasiga", "Fleshkaga yoziladi"], correct: "Maxsus 'Vazifa' bo'limiga" }
    ]
  },
  {
    id: 2, block: 1, moduleNum: 1, blockNum: 1, name: "2 Klaviatura (Typing)", type: "Variantli savol",
    questions: [
      { id: "m2_1", type: "variant", title: "1. Klaviaturada qaramasdan tez yozish uslubi nima deyiladi?", options: ["Touch Typing", "Tezkor nusxalash", "Mexanik yozish", "Avtomatik yozish"], correct: "Touch Typing" },
      { id: "m2_2", type: "variant", title: "2. Tez yozishni mashq qilish uchun qaysi onlayn trenajerdan foydalaniladi?", options: ["Ratatype", "Photoshop", "Google Docs", "Excel"], correct: "Ratatype" },
      { id: "m2_3", type: "variant", title: "3. Klaviaturada asosiy boshlang'ich pozitsiya qaysi harflar hisoblanadi?", options: ["A, S, D, F va J, K, L, ;", "Q, W, E, R va T, Y, U, I", "Z, X, C, V va B, N, M", "Faqat raqamlar qatori"], correct: "A, S, D, F va J, K, L, ;" },
      { id: "m2_4", type: "variant", title: "4. Ko'rsatkich barmoqlar tinch holatda qaysi harflar ustida turishi kerak?", options: ["F va J", "A va L", "S va K", "D va M"], correct: "F va J" },
      { id: "m2_5", type: "variant", title: "5. Klaviaturada bo'shliq (probel) tugmasi qaysi barmoq bilan bosiladi?", options: ["Bosh barmoq", "Ko'rsatkich barmoq", "Jimjiloq", "Nomsiz barmoq"], correct: "Bosh barmoq" }
    ]
  },
  {
    id: 3, block: 1, moduleNum: 1, blockNum: 1, name: "3 Canva prezentasiya", type: "Variantli savol",
    questions: [
      { id: "m3_1", type: "variant", title: "1. Canva nima uchun mo'ljallangan grafik platforma?", options: ["Dizayn va prezentatsiyalar yaratish", "Kod yozish va dasturlash", "Video o'yinlar yaratish", "Ma'lumotlar bazasini boshqarish"], correct: "Dizayn va prezentatsiyalar yaratish" },
      { id: "m3_2", type: "variant", title: "2. Canva dasturida tayyor shablonlardan foydalanish mumkinmi?", options: ["Ha, juda ko'p tayyor shablonlar bor", "Yo'q, hamma narsani noldan chizish shart", "Faqat pullik foydalanuvchilarga", "Faqat matnli shablonlar bor"], correct: "Ha, juda ko'p tayyor shablonlar bor" },
      { id: "m3_3", type: "variant", title: "3. Canva loyihasini kompyuterga qanday formatlarda yuklab olish mumkin?", options: ["PDF, PNG, JPG, MP4", "EXE, APK, DMG", "HTML, CSS, JS", "TXT, DOCX, XLSX"], correct: "PDF, PNG, JPG, MP4" },
      { id: "m3_4", type: "variant", title: "4. Canva dasturida prezentatsiyaga elementlar qaysi bo'limdan qo'shiladi?", options: ["Elements (Elementlar)", "Text (Matn)", "Uploads (Yuklanmalar)", "Draw (Chizish)"], correct: "Elements (Elementlar)" },
      { id: "m3_5", type: "variant", title: "5. Canva loyihasini boshqalar bilan birga tahrirlash mumkinmi?", options: ["Ha, havola orqali hamkorlikda ishlash mumkin", "Yo'q, faqat bir kishi ishlay oladi", "Faqat pullik versiyada mumkin", "Faqat yuklab olgandan keyin"], correct: "Ha, havola orqali hamkorlikda ishlash mumkin" }
    ]
  },
  {
    id: 4, block: 1, moduleNum: 1, blockNum: 1, name: "4 Google Docs", type: "Variantli savol",
    questions: [
      { id: "m4_1", type: "variant", title: "1. Google Docs nima?", options: ["Onlayn matn muharriri", "Jadvallar bilan ishlash dasturi", "Rasm chizish dasturi", "Prezentatsiya dasturi"], correct: "Onlayn matn muharriri" },
      { id: "m4_2", type: "variant", title: "2. Google Docs'ning Microsoft Word dasturidan asosiy afzalligi nimada?", options: ["Bulutli saqlash va onlayn hamkorlik", "Internet talab qilmasligi", "Faqat telefonlarda ishlashi", "Kod yozish imkoniyati borligi"], correct: "Bulutli saqlash va onlayn hamkorlik" },
      { id: "m4_3", type: "variant", title: "3. Google Docs'da yozilgan matnlar qayerga saqlanadi?", options: ["Google Drive bulutiga avtomatik", "Kompyuter qattiq diskiga qo'lda", "Saqlanmaydi, o'chib ketadi", "Fleshkaga saqlanadi"], correct: "Google Drive bulutiga avtomatik" },
      { id: "m4_4", type: "variant", title: "4. Google Docs hujjatini MS Word formatida yuklab olish buyrug'i qaysi?", options: ["File -> Download -> Microsoft Word (.docx)", "File -> Save as PDF", "Edit -> Copy to Word", "Tools -> Share to Microsoft"], correct: "File -> Download -> Microsoft Word (.docx)" },
      { id: "m4_5", type: "variant", title: "5. Matndagi barcha so'zlarni birdiga belgilash uchun qaysi klavishlar bosiladi?", options: ["Ctrl + A", "Ctrl + C", "Ctrl + V", "Ctrl + Z"], correct: "Ctrl + A" }
    ]
  },
  {
    id: 5, block: 1, moduleNum: 1, blockNum: 1, name: "5 Google Sheets", type: "Variantli savol",
    questions: [
      { id: "m5_1", type: "variant", title: "1. Google Sheets yordamida qanday hujjatlar bilan ishlanadi?", options: ["Elektron jadvallar va hisob-kitoblar", "Faqat audio-video fayllar", "Matnli slaydlar", "3D modellar"], correct: "Elektron jadvallar va hisob-kitoblar" },
      { id: "m5_2", type: "variant", title: "2. Google Sheets dasturida har bir formula qaysi belgi bilan boshlanishi shart?", options: ["= (Tenglik)", "+ (Plyus)", "$ (Dollar)", "# (Reshotka)"], correct: "= (Tenglik)" },
      { id: "m5_3", type: "variant", title: "3. Jadvaldagi ma'lum bir kataklar diapazonining yig'indisini hisoblaydigan formula qaysi?", options: ["SUM", "AVERAGE", "COUNT", "MIN"], correct: "SUM" },
      { id: "m5_4", type: "variant", title: "4. Google Sheets'da ustunlar nima bilan belgilanadi?", options: ["Lotin harflari bilan (A, B, C...)", "Raqamlar bilan (1, 2, 3...)", "Belgilar bilan (*, #, &)", "Ranglar bilan"], correct: "Lotin harflari bilan (A, B, C...)" },
      { id: "m5_5", type: "variant", title: "5. Ma'lumotlarning o'rtacha qiymatini topish uchun qaysi funksiya ishlatiladi?", options: ["AVERAGE", "SUM", "MAX", "IF"], correct: "AVERAGE" }
    ]
  },

  {
    id: 6, block: 2, moduleNum: 1, blockNum: 2, name: "7 Figma", type: "Variantli savol",
    questions: [
      { id: "m6_1", type: "variant", title: "1. Figma dasturi asosan nima uchun ishlatiladi?", options: ["UI/UX dizayn yaratish uchun", "Video montaj qilish uchun", "Sayt kodini yozish uchun", "Kompyuter tizimini tozalash"], correct: "UI/UX dizayn yaratish uchun" },
      { id: "m6_2", type: "variant", title: "2. Figma dasturida yangi ishchi maydon (ekran shakli) yaratish tugmasi qaysi?", options: ["Frame (F)", "Rectangle (R)", "Text (T)", "Slice (S)"], correct: "Frame (F)" },
      { id: "m6_3", type: "variant", title: "3. Figmada yaratilgan dizaynlarni elementlarini guruhlash uchun qaysi kombinatsiya bosiladi?", options: ["Ctrl + G", "Ctrl + E", "Ctrl + D", "Ctrl + Alt + G"], correct: "Ctrl + G" },
      { id: "m6_4", type: "variant", title: "4. Figmada qatlamlar (Layers) paneli odatda ekranning qaysi tomonida joylashadi?", options: ["Chap tomonida", "O'ng tomonida", "Tepada", "Pastda"], correct: "Chap tomonida" },
      { id: "m6_5", type: "variant", title: "5. Figmada bitta elementdan xuddi shunday nusxa olish qisqa yo'li qaysi?", options: ["Ctrl + D", "Ctrl + C", "Ctrl + V", "Ctrl + Z"], correct: "Ctrl + D" }
    ]
  },
  {
    id: 7, block: 2, moduleNum: 1, blockNum: 2, name: "8 Figma", type: "Variantli savol",
    questions: [
      { id: "m7_1", type: "variant", title: "1. Figmada 'Component' nima vazifani bajaradi?", options: ["Elementni master qilib saqlab, qayta ishlatish", "Rangni o'chirish", "Rasmni kesish", "Loyihani o'chirish"], correct: "Elementni master qilib saqlab, qayta ishlatish" },
      { id: "m7_2", type: "variant", title: "2. Figmada 'Auto Layout' funksiyasi nima uchun kerak?", options: ["Elementlarni avtomatik moslashuvchan bo'lishi uchun", "Ranglarni chiroyli tanlash uchun", "Matn xatolarini tuzatish uchun", "Prezentatsiyani boshlash"], correct: "Elementlarni avtomatik moslashuvchan bo'lishi uchun" },
      { id: "m7_3", type: "variant", title: "3. Master komponent o'zgartirilsa, undan nusxa olingan elementlar nima bo'ladi?", options: ["Ularda ham o'zgarish avtomatik aks etadi", "Ular o'zgarishsiz qoladi", "Ular loyihadan o'chib ketadi", "Ular xatolik beradi"], correct: "Ularda ham o'zgarish avtomatik aks etadi" },
      { id: "m7_4", type: "variant", title: "4. Figmada tayyor dizaynni interaktiv qilish boim nima deyiladi?", options: ["Prototype", "Design", "Inspect", "Export"], correct: "Prototype" },
      { id: "m7_5", type: "variant", title: "5. Figmada ob'ektlarning shaffofligini (Opacity) qayerdan o'zgartiriladi?", options: ["Design panelidagi Layer qismidan", "Layer nomini o'zgartirib", "Faqat rang berish bo'limidan", "O'zgartirib bo'lmaydi"], correct: "Design panelidagi Layer qismidan" }
    ]
  },
  {
    id: 8, block: 2, moduleNum: 1, blockNum: 2, name: "9 Sun'iy intellekt (AI)", type: "Variantli savol",
    questions: [
      { id: "m8_1", type: "variant", title: "1. Sun'iy intellekt (AI) nima?", options: ["Inson ongiga xos funksiyalarni bajaruvchi tizim", "Oddiy kalkulyator dasturi", "Faqat viruslarni o'chiruvchi dastur", "Klaviatura mexanizmi"], correct: "Inson ongiga xos funksiyalarni bajaruvchi tizim" },
      { id: "m8_2", type: "variant", title: "2. Dunyodagi eng mashhur matnli muloqot qiluvchi AI neyrotarmog'i qaysi?", options: ["ChatGPT", "Photoshop", "Windows Player", "WinRAR"], correct: "ChatGPT" },
      { id: "m8_3", type: "variant", title: "3. Sun'iy intellektga beriladigan maxsus buyruq va matnlar nima deyiladi?", options: ["Prompt", "Code", "Tag", "Script"], correct: "Prompt" },
      { id: "m8_4", type: "variant", title: "4. Sun'iy intellekt texnologiyalari qaysi sohalarda qo'llanilishi mumkin?", options: ["Tibbiyot, ta'lim, dasturlash va deyarli barcha sohada", "Faqat o'yinlarda", "Faqat kosmosda", "Hech qayerda qo'llanilmaydi"], correct: "Tibbiyot, ta'lim, dasturlash va deyarli barcha sohada" },
      { id: "m8_5", type: "variant", title: "5. Quyidagilardan qaysi biri OpenAI kompaniyasi tomonidan yaratilgan?", options: ["ChatGPT", "Google Search", "Facebook", "Linux"], correct: "ChatGPT" }
    ]
  },
  {
    id: 9, block: 2, moduleNum: 1, blockNum: 2, name: "10 AI video va rasmlar", type: "Variantli savol",
    questions: [
      { id: "m9_1", type: "variant", title: "1. Matnli prompt orqali yuqori sifatli rasmlar yaratuvchi AI qaysi?", options: ["Midjourney / DALL-E", "Google Docs", "Excel", "Notepad"], correct: "Midjourney / DALL-E" },
      { id: "m9_2", type: "variant", title: "2. Sun'iy intellekt yordamida rasm va videolarni qayta ishlash nima deb ataladi?", options: ["AI Generatsiya va Neyro-montaj", "Formatlash", "Arxivlash", "Kodlash"], correct: "AI Generatsiya va Neyro-montaj" },
      { id: "m9_3", type: "variant", title: "3. Rasm generatori bo'lgan Midjourney qaysi platforma ichida ishlaydi?", options: ["Discord", "Telegram", "WhatsApp", "Zoom"], correct: "Discord" },
      { id: "m9_4", type: "variant", title: "4. Matndan professional darajada video generatsiya qila oladigan neyrotarmoq?", options: ["Sora / Runway", "Microsoft Word", "Paint", "Calculator"], correct: "Sora / Runway" },
      { id: "m9_5", type: "variant", title: "5. AI tomonidan rasmlarni generatsiya qilishda prompt qanchalik aniq yozilsa, natija qanday bo'ladi?", options: ["Natija shunchalik mukammal chiqadi", "Hech narsa o'zgarmaydi", "Rasm sifati buziladi", "Xatolik beradi"], correct: "Natija shunchalik mukammal chiqadi" }
    ]
  },
  {
    id: 10, block: 2, moduleNum: 1, blockNum: 2, name: "11 AI - Projects", type: "Variantli savol",
    questions: [
      { id: "m10_1", type: "variant", title: "1. AI - Projects darslarining asosiy maqsadi nima?", options: ["AI asboblaridan foydalanib amaliy loyihalar yaratish", "Kompyuterni qismlarga ajratish", "Faqat matn ko'chirish", "O'yin dasturlarini buzish"], correct: "AI asboblaridan foydalanib amaliy loyihalar yaratish" },
      { id: "m10_2", type: "variant", title: "2. AI loyihalarni namoyish qilish uchun qayerda portfolio ochish qulay?", options: ["Veb-saytlar yoki maxsus platformalarda", "Daftarda", "Faqat telefon xotirasida", "Hech qayerda"], correct: "Veb-saytlar yoki maxsus platformalarda" },
      { id: "m10_3", type: "variant", title: "3. Loyiha ustida ishlashda AI bizga qanday yordam bera oladi?", options: ["Goya berish, kontent yozish va kodni tekshirishda", "Kompyuter tokini tejashda", "Vazifani yashirincha topshirishda", "Internetni tezlashtirishda"], correct: "Goya berish, kontent yozish va kodni tekshirishda" },
      { id: "m10_4", type: "variant", title: "4. Yaratilgan amaliy AI loyihasini taqdimot qilishda qaysi dastur asqotadi?", options: ["Canva / PowerPoint", "WinRAR", "Antivirus", "Sublime Text"], correct: "Canva / PowerPoint" },
      { id: "m10_5", type: "variant", title: "5. Tayyor AI loyihasi foydalanuvchilar uchun qanday bo'lishi kerak?", options: ["Tushunarli, foydali va qulay", "Murakkab va tushunarsiz", "Faqat pullik", "Hech qanday dizaynsiz"], correct: "Tushunarli, foydali va qulay" }
    ]
  },

  {
    id: 11, block: 3, moduleNum: 3, blockNum: 1, name: "1 Animation", type: "Variantli savol",
    questions: [
      { id: "m11_1", type: "variant", title: "1. CSS-da murakkab bosqichli animatsiyalar yaratish uchun qaysi kalit so'z ishlatiladi?", options: ["@keyframes", "animation-name", "transition", "transform"], correct: "@keyframes" },
      { id: "m11_2", type: "variant", title: "2. CSS animatsiyaning davomiylik vaqtini belgilovchi xossa qaysi?", options: ["animation-duration", "animation-delay", "animation-iteration-count", "animation-time"], correct: "animation-duration" },
      { id: "m11_3", type: "variant", title: "3. Animatsiya cheksiz marta takrorlanishi uchun qaysi qiymat beriladi?", options: ["infinite", "loop", "forever", "always"], correct: "infinite" },
      { id: "m11_4", type: "variant", title: "4. Oddiy element holati o'zgarishini silliq qiluvchi xossa?", options: ["transition", "transform", "translate", "keyframe"], correct: "transition" },
      { id: "m11_5", type: "variant", title: "5. Elementni aylantirish, kattalashtirish yoki surish uchun qaysi xossa kerak?", options: ["transform", "transition", "position", "display"], correct: "transform" }
    ]
  },
  {
    id: 12, block: 3, moduleNum: 3, blockNum: 1, name: "2 Box Shadow va Text shadow", type: "Variantli savol",
    questions: [
      { id: "m12_1", type: "variant", title: "1. Blok elementlariga soya berish uchun qaysi xossa ishlatiladi?", options: ["box-shadow", "text-shadow", "shadow", "border-shadow"], correct: "box-shadow" },
      { id: "m12_2", type: "variant", title: "2. Matn harflariga alohida soya berish xossasi qaysi?", options: ["text-shadow", "box-shadow", "font-shadow", "content-shadow"], correct: "text-shadow" },
      { id: "m12_3", type: "variant", title: "3. box-shadow: 2px 4px 5px black; yozuvida uchinchi qiymat (5px) nima anglatadi?", options: ["Soyaning tarqalishi/g'uborligi (Blur)", "O'ngga surilishi", "Pastga surilishi", "Soyaning rangi"], correct: "Soyaning tarqalishi/g'uborligi (Blur)" },
      { id: "m12_4", type: "variant", title: "4. Soyani blokning ichki tomoniga yo'naltirish uchun qaysi kalit so'z qo'shiladi?", options: ["inset", "inside", "internal", "inner"], correct: "inset" },
      { id: "m12_5", type: "variant", title: "5. Soya rangini shaffofroq qilish uchun qaysi rang formatidan foydalangan ma'qul?", options: ["rgba()", "hex (#fff)", "oddiy nomlar", "ishlatib bo'lmaydi"], correct: "rgba()" }
    ]
  },
  {
    id: 13, block: 3, moduleNum: 3, blockNum: 1, name: "3 Position", type: "Variantli savol",
    questions: [
      { id: "m13_1", type: "variant", title: "1. Elementni skroll bo'lganda ham ekranning ma'lum joyida qotirib qo'yuvchi qiymat?", options: ["fixed", "absolute", "relative", "static"], correct: "fixed" },
      { id: "m13_2", type: "variant", title: "2. Position: absolute; berilgan element o'zini qaysi elementga nisbatan joylashtiradi?", options: ["Position: relative (yoki static bo'lmagan) ajdodiga", "Faqat body elementiga", "O'zidan keyingi elementga", "Hech kimga"], correct: "Position: relative (yoki static bo'lmagan) ajdodiga" },
      { id: "m13_3", type: "variant", title: "3. Position xossasining standart qiymati qaysi?", options: ["static", "relative", "absolute", "sticky"], correct: "static" },
      { id: "m13_4", type: "variant", title: "4. Pozitsiyalangan elementlarning ustma-ust turish tartibini qaysi xossa belgilaydi?", options: ["z-index", "float", "display", "opacity"], correct: "z-index" },
      { id: "m13_5", type: "variant", title: "5. Element skroll davomida ma'lum joyga yetguncha oddiy, yetgach fixed bo'lib qoladigan qiymat?", options: ["sticky", "fixed", "absolute", "relative"], correct: "sticky" }
    ]
  },
  {
    id: 14, block: 3, moduleNum: 3, blockNum: 1, name: "4 Background video", type: "Variantli savol",
    questions: [
      { id: "m14_1", type: "variant", title: "1. HTML sahifa fonida video ko'rsatish uchun qaysi teg ishlatiladi?", options: ["<video>", "<object>", "<embed>", "<iframe>"], correct: "<video>" },
      { id: "m14_2", type: "variant", title: "2. Orqa fondagi video avtomatik qo'yilishi va ovozsiz bo'lishi uchun qaysi atributlar yoziladi?", options: ["autoplay muted loop", "controls autoplay", "preload volume", "hidden play"], correct: "autoplay muted loop" },
      { id: "m14_3", type: "variant", title: "3. Fon videosi ustiga matnlarni bemalol yozish uchun videoga qanday CSS joylashuvi beriladi?", options: ["position: absolute; z-index: -1;", "position: static;", "display: none;", "float: left;"], correct: "position: absolute; z-index: -1;" },
      { id: "m14_4", type: "variant", title: "4. Video butun fon maydonini to'liq qoplab turishi uchun qaysi CSS xossasi beriladi?", options: ["object-fit: cover;", "width: 100%; height: auto;", "display: block;", "background-size: contain;"], correct: "object-fit: cover;" },
      { id: "m14_5", type: "variant", title: "5. Videoning pleyer tugmalari ko'rinmasligi uchun qaysi atributni YOZMASLIK kerak?", options: ["controls", "autoplay", "muted", "loop"], correct: "controls" }
    ]
  },
  {
    id: 15, block: 3, moduleNum: 3, blockNum: 1, name: "5 Dropdown va Tag Select (options)", type: "Variantli savol",
    questions: [
      { id: "m15_1", type: "variant", title: "1. Ochiladigan ro'yxat (Dropdown) yaratish uchun qaysi asosiy teg ishlatiladi?", options: ["<select>", "<input>", "<form>", "<datalist>"], correct: "<select>" },
      { id: "m15_2", type: "variant", title: "2. <select> tegi ichidagi har bir tanlov variantini yaratuvchi teg qaysi?", options: ["<option>", "<item>", "<list>", "<choice>"], correct: "<option>" },
      { id: "m15_3", type: "variant", title: "3. Dasturchi serverga jo'natmoqchi bo'lgan ma'lumot option'ning qaysi atributiga yoziladi?", options: ["value", "name", "id", "text"], correct: "value" },
      { id: "m15_4", type: "variant", title: "4. Ochiladigan ro'yxatda bir nechta variantni birdiga tanlash imkonini beruvchi atribut?", options: ["multiple", "disabled", "selected", "required"], correct: "multiple" },
      { id: "m15_5", type: "variant", title: "5. Sahifa yuklanganda ro'yxatda ma'lum bir variant tanlangan turishi uchun qaysi atribut beriladi?", options: ["selected", "checked", "active", "first"], correct: "selected" }
    ]
  },

  {
    id: 16, block: 4, moduleNum: 3, blockNum: 2, name: "7 AOS Animation Scroll", type: "Variantli savol",
    questions: [
      { id: "m16_1", type: "variant", title: "1. AOS JavaScript kutubxonasi nima vazifani bajaradi?", options: ["Sahifa skroll qilinganda elementlarni animatsiya bilan chiqaradi", "Sayt yuklanishini tezlashtiradi", "Ranglarni o'zgartiradi", "Rasmlarni avtomatik siqadi"], correct: "Sahifa skroll qilinganda elementlarni animatsiya bilan chiqaradi" },
      { id: "m16_2", type: "variant", title: "2. HTML elementga AOS animatsiya turini berish uchun qaysi maxsus atribut ishlatiladi?", options: ["data-aos", "aos-type", "animation", "class"], correct: "data-aos" },
      { id: "m16_3", type: "variant", title: "3. AOS animatsiya davomiyligi qaysi atribut orqali millisoniyalarda beriladi?", options: ["data-aos-duration", "data-aos-delay", "data-aos-time", "data-aos-speed"], correct: "data-aos-duration" },
      { id: "m16_4", type: "variant", title: "4. Element skroll bo'lib ko'ringach, bir oz kutib keyin animatsiya boshlanishi uchun qaysi atribut yoziladi?", options: ["data-aos-delay", "data-aos-offset", "data-aos-once", "data-aos-anchor"], correct: "data-aos-delay" },
      { id: "m16_5", type: "variant", title: "5. Script qismida AOS kutubxonasini ishga tushirish buyrug'i qanday yoziladi?", options: ["AOS.init();", "AOS.start();", "initAOS();", "AOS.run();"], correct: "AOS.init();" }
    ]
  },
  {
    id: 17, block: 4, moduleNum: 3, blockNum: 2, name: "8 Responsive va Adaptive", type: "Interaktiv (Moslashtirish)",
    questions: [
      { id: "m17_1", type: "variant", title: "1. Responsive veb-dizayn nima?", options: ["Saytning barcha qurilmalar ekraniga moslashishi", "Faqat kompyuterda chiroyli ko'rinishi", "Saytning tez yuklanishi", "Matnlarning tarjima qilinishi"], correct: "Saytning barcha qurilmalar ekraniga moslashishi" },
      { id: "m17_2", type: "variant", title: "2. Mobil qurilmalarda sahifa o'lchamlari to'g'ri aks etishi uchun qaysi meta teg yoziladi?", options: ["<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta charset='UTF-8'>", "<meta name='description'>", "<meta http-equiv='X-UA-Compatible'>"], correct: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" },
      { id: "m17_3", type: "variant", title: "3. Responsive dizaynda 'px' o'rniga qaysi nisbiy o'lchov birliklaridan foydalaniladi?", options: ["%, vw, vh, rem, em", "cm, mm, in", "pt, pc", "faqat px"], correct: "%, vw, vh, rem, em" },
      {
        id: "m17_4",
        type: "drag-drop", 
        title: "4. Ekran o'lchamlari (Breakpoints) va ularga mos keluvchi qurilmalarni to'g'ri moslashtiring:",
        leftItems: [
          { id: "L1", text: "1. 768px" },
          { id: "L2", text: "2. 320px" },
          { id: "L3", text: "3. 1024px" },
          { id: "L4", text: "4. 1440px" }
        ],
        rightItems: [
          { id: "R1", text: "Telefonlar" },
          { id: "R2", text: "Planshetlar" },
          { id: "R3", text: "Kichik laptoplar" },
          { id: "R4", text: "Katta monitorlar" }
        ],
        correctMapping: { "L1": "R2", "L2": "R1", "L3": "R3", "L4": "R4" }
      },
      { id: "m17_5", type: "variant", title: "5. Ekranning kengligiga qarab o'zgaradigan o'lchov birligi qaysi?", options: ["vw (viewport width)", "vh (viewport height)", "px", "rem"], correct: "vw (viewport width)" }
    ]
  },
  {
    id: 18, block: 4, moduleNum: 3, blockNum: 2, name: "9 Responsive va Adaptive asoslari", type: "Variantli savol",
    questions: [
      { id: "m18_1", type: "variant", title: "1. CSS-da ekran o'lchamiga qarab alohida stillar yozish uchun qaysi media qoidasi ishlatiladi?", options: ["@media", "@keyframes", "@import", "@font-face"], correct: "@media" },
      { id: "m18_2", type: "variant", title: "2. Ekran kengligi maksimal 768px va undan kichik bo'lganda ishlaydigan media sharti qanday yoziladi?", options: ["@media (max-width: 768px)", "@media (min-width: 768px)", "@media (width: 768px)", "@media (screen-768)"], correct: "@media (max-width: 768px)" },
      { id: "m18_3", type: "variant", title: "3. 'Mobile First' yondashuvida @media ichida qaysi shart ko'proq ishlatiladi?", options: ["min-width", "max-width", "orientation", "device-height"], correct: "min-width" },
      { id: "m18_4", type: "variant", title: "4. Responsive dizaynda 'Breakpoint' nima?", options: ["Stillar o'zgaradigan muayyan ekran kengligi pikseli", "Saytning buzilib qolgan joyi", "Koddagi xatolik chizig'i", "Internet uzilib qolgan holat"], correct: "Stillar o'zgaradigan muayyan ekran kengligi pikseli" },
      { id: "m18_5", type: "variant", title: "5. Rasm ekran o'lchamidan chiqib ketmasligi va moslashuvchan bo'lishi uchun qaysi CSS beriladi?", options: ["max-width: 100%; height: auto;", "width: 500px;", "display: none;", "position: absolute;"], correct: "max-width: 100%; height: auto;" }
    ]
  },
  {
    id: 19, block: 4, moduleNum: 3, blockNum: 2, name: "10 Responsive va Adaptive (mustahkamlash)", type: "Variantli savol",
    questions: [
      { id: "m19_1", type: "variant", title: "1. Telefon qurilmalari uchun asosan qaysi breakpoint o'lchami olingan?", options: ["480px yoki 576px gacha", "1200px dan katta", "1440px", "1024px"], correct: "480px yoki 576px gacha" },
      { id: "m19_2", type: "variant", title: "2. Planshetlar uchun odatiy standart breakpoint diapazoni qaysi?", options: ["768px dan 992px gacha", "320px gacha", "1920px dan katta", "Faqat 100px"], correct: "768px dan 992px gacha" },
      { id: "m19_3", type: "variant", title: "3. Flexbox yoki Grid ishlatganda responsive qilish nega osonroq kechadi?", options: ["Elementlar avtomatik moslashish va qatorga sinish xususiyatiga ega", "Media so'rovlarni talab qilmaydi", "Rasmlarni avtomatik yuklaydi", "Yordam bermaydi"], correct: "Elementlar avtomatik moslashish va qatorga sinish xususiyatiga ega" },
      { id: "m19_4", type: "variant", title: "4. Brauzerda responsive dizaynni tekshirish uchun qaysi tugma bosiladi?", options: ["Toggle device toolbar (Mobil ko'rinish rejimi)", "Refresh", "Clear cache", "Elements panel"], correct: "Toggle device toolbar (Mobil ko'rinish rejimi)" },
      { id: "m19_5", type: "variant", title: "5. Katta ekranlardagi ko'p ustunli bloklar mobilda qanday joylashishi kerak?", options: ["Ketma-ket bir ustun bo'lib, pastga qarab", "Yopishib bir qatorda siqilib qolishi kerak", "Butunlay yashirib yuborilishi shart", "O'ng tomonga chiqib ketishi kerak"], correct: "Ketma-ket bir ustun bo'lib, pastga qarab" }
    ]
  },
  {
    id: 20, block: 4, moduleNum: 3, blockNum: 2, name: "11 Responsive va Adaptive (proektni tugatish)", type: "Variantli savol",
    questions: [
      { id: "m20_1", type: "variant", title: "1. Mukammal tayyorlangan responsive loyiha qayerga yuklanadi?", options: ["GitHub serveriga", "Faqat shaxsiy telegram botga", "Kompyuter korzinasiga", "Faqat Figma fayliga"], correct: "GitHub serveriga" },
      { id: "m20_2", type: "variant", title: "2. Saytni internetda hammaga ko'rinadigan qilib jonli joylashtirish nima deyiladi?", options: ["Deployment (Hostingga joylash)", "Coding", "Debugging", "Designing"], correct: "Deployment (Hostingga joylash)" },
      { id: "m20_3", type: "variant", title: "3. Loyihani topshirishdan oldin uni qaysi qurilmalarda test qibly ko'rish zarur?", options: ["Ham kompyuterda, ham real mobil telefon ekranlarida", "Faqat bitta kompyuterda kifoya", "Hech qayerda test qilish shart emas", "Faqat printerda"], correct: "Ham kompyuterda, ham real mobil telefon ekranlarida" },
      { id: "m20_4", type: "variant", title: "4. Loyihani yakunlashda kodlarni toza, ortiqcha izohlarsiz va tartibli yozish nima deyiladi?", options: ["Clean Code (Toza kod)", "Spam Code", "Bug", "Error Fix"], correct: "Clean Code (Toza kod)" },
      { id: "m20_5", type: "variant", title: "5. Loyiha ishi yakunlangach, 'Vazifa' tugmasi bosilganda kodlar havolasi odatda kimga yuboriladi?", options: ["Tekshirish va baholash uchun ustozga (tizimga)", "Do'stlariga o'yin uchun", "Hech kimga, o'chirib yuboriladi", "Google kompaniyasiga"], correct: "Tekshirish va baholash uchun ustozga (tizimga)" }
    ]
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("menu");
  const [activeModule, setActiveModule] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const [selectedOption, setSelectedOption] = useState(null);
  
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragDropAnswers, setDragDropAnswers] = useState({}); 
  
  const [progressTrack, setProgressTrack] = useState([]);
  const [lastQuizResult, setLastQuizResult] = useState({ correct: 0, total: 0, score: 0, coins: 0 });
  const [showNoExamModal, setShowNoExamModal] = useState(false);
  
  const getInitialUserResults = () => {
    const initial = {};
    initialModules.forEach(m => {
      initial[m.id] = { quizAttempts: "0/0", quizScore: 0, quizCoins: 0, quizCompleted: false };
    });
    return initial;
  };
  
  const [userResults, setUserResults] = useState(() => {
    const saved = localStorage.getItem("quiz_userResults_v6");
    return saved ? JSON.parse(saved) : getInitialUserResults();
  });
  
  useEffect(() => {
    localStorage.setItem("quiz_userResults_v6", JSON.stringify(userResults));
  }, [userResults]);
  
  const currentQuestion = activeModule?.questions?.[currentQuestionIndex];
  
  const startQuiz = (id, isBlockProj = false) => {
    if (isBlockProj) {
      setShowNoExamModal(true);
      return;
    }

    const targetModule = initialModules.find(m => m.id === id);
    if (!targetModule) return;
    setActiveModule(targetModule);
    setCurrentQuestionIndex(0);
    setProgressTrack(Array(targetModule.questions.length).fill("empty"));
    setSelectedOption(null);
    setDragDropAnswers({});
    setCurrentPage("quiz-page");
  };
  
  const handleOkClick = () => {
    if (!activeModule || !currentQuestion) return;
    
    let isCorrect = false;
    
    if (currentQuestion.type === "variant") {
      isCorrect = selectedOption === currentQuestion.correct;
    } else if (currentQuestion.type === "drag-drop") {
      const correctMapping = currentQuestion.correctMapping;
      let allMatch = true;
      
      Object.keys(correctMapping).forEach(leftId => {
        if (dragDropAnswers[leftId] !== correctMapping[leftId]) {
          allMatch = false;
        }
      });
      isCorrect = allMatch;
    }
    
    const updatedTrack = [...progressTrack];
    updatedTrack[currentQuestionIndex] = isCorrect ? "correct" : "wrong";
    setProgressTrack(updatedTrack);
    
    if (currentQuestionIndex < (activeModule.questions.length - 1)) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        setDragDropAnswers({}); 
      }, 300);
    } else {
      const correctCount = updatedTrack.filter(s => s === "correct").length;
      const totalQuestions = activeModule.questions.length;
      const finalScore = Math.round((correctCount / totalQuestions) * 100);
      const earnedCoins = correctCount * 1; 
      
      setLastQuizResult({ correct: correctCount, total: totalQuestions, score: finalScore, coins: earnedCoins });
      
      setUserResults(prev => ({
        ...prev,
        [activeModule.id]: { quizAttempts: `${correctCount}/${totalQuestions}`, quizScore: finalScore, quizCoins: earnedCoins, quizCompleted: true }
      }));
      setTimeout(() => { setCurrentPage("final-result"); }, 400);
    }
  };

  const onDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, leftId) => {
    e.preventDefault();
    if (!draggedItem) return;
    
    setDragDropAnswers(prev => ({
      ...prev,
      [leftId]: draggedItem.id
    }));
    setDraggedItem(null);
  };

  const getAssignedItemText = (leftId) => {
    const rightId = dragDropAnswers[leftId];
    if (!rightId) return "Sichqoncha bilan surib keling...";
    const item = currentQuestion.rightItems.find(r => r.id === rightId);
    return item ? item.text : "Sichqoncha bilan surib keling...";
  };

  const isOkDisabled = () => {
    if (!currentQuestion) return true;
    if (currentQuestion.type === "variant") {
      return selectedOption === null;
    }
    if (currentQuestion.type === "drag-drop") {
      return Object.keys(dragDropAnswers).length !== currentQuestion.leftItems.length;
    }
    return true;
  };

  const calculateBlockAverage = (blockId) => {
    const blockModules = initialModules.filter(m => m.block === blockId);
    let totalScore = 0;
    let totalItems = 0;
    
    blockModules.forEach(m => {
      const res = userResults[m.id];
      if (res && res.quizCompleted) { totalScore += res.quizScore; totalItems++; }
    });
    
    if (totalItems === 0) return 0;
    return Math.round(totalScore / totalItems);
  };
  
  const renderBlock = (blockId, title, label = "[New] Beginner") => {
    return (
      <div key={blockId} className="space-y-4 mb-8 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm max-w-4xl mx-auto font-sans">
        <div className="bg-[#00cc76] text-white rounded-2xl p-5 flex justify-between items-center shadow-xs">
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide uppercase">{title}</h1>
            <p className="text-xs opacity-90 mt-1 font-medium">{label}</p>
          </div>
          <div className="text-center min-w-[80px]">
            <div className="text-[10px] uppercase tracking-wider opacity-90 font-bold">O'rtacha ball</div>
            <div className="text-4xl md:text-5xl font-black leading-none my-1">{calculateBlockAverage(blockId)}</div>
            <div className="text-[10px] uppercase tracking-widest opacity-90 font-bold">BALL</div>
          </div>
        </div>
        
        <div className="divide-y divide-slate-100 px-2">
          {initialModules.filter(m => m.block === blockId).map((mod) => {
            const res = userResults[mod.id] || { quizCompleted: false, quizAttempts: "0/0", quizScore: 0, quizCoins: 0 };
            return (
              <div key={mod.id} className="group py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-h-[64px] relative">
                <span className="text-base md:text-lg text-slate-800 font-medium">{mod.name}</span>
                
                <div className="flex items-center gap-3 text-xs self-end sm:self-auto">
                  {res.quizCompleted ? (
                    <>
                      <div className="flex group-hover:hidden bg-[#e6f4ff] text-[#1677ff] px-3 py-1.5 rounded-full items-center gap-1.5 border border-[#b3d8ff] text-[12px] font-medium transition-all">
                        <span className="w-3.5 h-3.5 bg-[#1677ff] text-white text-[9px] flex items-center justify-center rounded-full font-bold">✓</span>
                        <span>Quiz · {res.quizAttempts} · {res.quizScore} · {res.quizCoins}🪙</span>
                      </div>

                      <div className="hidden group-hover:flex items-center gap-3 transition-all">
                        <button onClick={() => startQuiz(mod.id, false)} className="text-[#1677ff] bg-[#e6f4ff] hover:bg-[#1677ff] hover:text-white transition px-5 py-1.5 rounded-xl font-medium text-sm border border-[#b3d8ff] cursor-pointer">
                          Quiz
                        </button>
                        <button className="text-slate-400 bg-slate-100 px-4 py-1.5 rounded-lg font-medium text-sm cursor-not-allowed border-0">
                          Project
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex group-hover:hidden text-slate-400 font-medium px-2 py-1 transition-all">
                        Quiz - 5 ta savol
                      </div>
                      <div className="hidden group-hover:flex items-center gap-3 transition-all">
                        <button onClick={() => startQuiz(mod.id, false)} className="text-[#1677ff] bg-[#e6f4ff] hover:bg-[#1677ff] hover:text-white transition px-5 py-1.5 rounded-xl font-medium text-sm border border-[#b3d8ff] cursor-pointer">
                          Quiz
                        </button>
                        <button className="text-slate-400 bg-slate-100 px-4 py-1.5 rounded-lg font-medium text-sm cursor-not-allowed border-0">
                          Project
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="group bg-white border-t border-slate-100 pt-4 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2 min-h-[52px]">
          <span className="text-base md:text-lg text-slate-800 font-medium">Loyiha ishi</span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-3">
              <button onClick={() => startQuiz(blockId, true)} className="bg-[#e6f4ff] text-[#1677ff] hover:bg-[#1677ff] hover:text-white transition px-6 py-2 rounded-xl font-medium text-sm border border-[#b3d8ff] cursor-pointer w-24">
                Quiz
              </button>
              <button onClick={() => alert("Loyiha topshirish tizimi ulandi!")} className="bg-[#fff1f0] text-[#ff4d4f] border border-[#ffccc7] hover:bg-[#ff4d4f] hover:text-white transition px-6 py-2 rounded-xl font-medium text-sm w-24 cursor-pointer">
                Vazifa
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 md:p-6 relative">
      
      {showNoExamModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 font-sans backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl border border-slate-100 animate-scale-up">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-amber-500">⚠️</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">Imtihon mavjud emas</h3>
            <p className="text-slate-500 text-sm mb-6 font-medium">Hech qanaqa imtihon topilmadi</p>
            <button
              onClick={() => setShowNoExamModal(false)}
              className="w-full bg-[#1677ff] text-white py-2.5 rounded-xl font-semibold hover:bg-blue-600 transition border-0 cursor-pointer text-sm shadow-xs"
            >
              Yopish
            </button>
          </div>
        </div>
      )}

      {currentPage === "menu" && (
        <div className="py-4">
          {renderBlock(1, "MODUL 1, BLOK 1", "[New] Beginner")}
          {renderBlock(2, "MODUL 1, BLOK 2", "[New] Beginner")}
          {renderBlock(3, "MODUL 3, BLOK 1", "[New] Front-End")}
          {renderBlock(4, "MODUL 3, BLOK 2", "[New] Front-End")}
        </div>
      )}

      {currentPage === "quiz-page" && activeModule && currentQuestion && (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-6 font-sans mt-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-4 mb-6 gap-2 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1">
              <span>[New] Kurs</span>
              <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">MODUL {activeModule.moduleNum}</span>
              <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">BLOK {activeModule.blockNum}</span>
            </div>
            <div className="text-slate-700 font-semibold text-sm">{activeModule.name}</div>
            <div>{currentQuestion.type === "drag-drop" ? "Moslashtirish testi" : "Variantli test"}</div>
          </div>

          <div className="w-full flex gap-1.5 mb-8 h-2">
            {progressTrack.map((status, idx) => (
              <div
                key={idx}
                className={`flex-1 h-full rounded-full transition-all duration-300 ${
                  idx === currentQuestionIndex ? 'bg-blue-500' : status === "correct" ? 'bg-[#00cc76]' : status === "wrong" ? 'bg-[#ff4d4f]' : 'bg-slate-100'
                }`}
              />
            ))}
          </div>

          <h2 className="text-lg md:text-xl font-medium text-slate-800 mb-6">{currentQuestion.title}</h2>

          {currentQuestion.type === "variant" && (
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((opt, i) => {
                const isSelected = selectedOption === opt;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedOption(opt)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                      isSelected ? 'border-[#1677ff] bg-[#e6f4ff] text-[#1677ff] font-medium' : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#1677ff] bg-white' : 'border-slate-300'}`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#1677ff]" />}
                    </div>
                    <span className="text-sm">{opt}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* ================= 2-TUR: RASMDAGI INTERAKTIV MOSLASHTIRISH (DRAG & DROP) CHIQARISH ================= */}
          {currentQuestion.type === "drag-drop" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative">
              
              {/* CHAP USTUN: Savollar/O'lchamlar va Drop Hududi */}
              <div className="space-y-3">
                {currentQuestion.leftItems.map((leftItem) => (
                  <div 
                    key={leftItem.id} 
                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 min-h-[58px]"
                  >
                    {/* Chap o'lcham qismi */}
                    <div className="w-24 text-slate-700 font-bold text-sm bg-white border border-slate-100 px-3 py-2 rounded-lg text-center shadow-2xs">
                      {leftItem.text}
                    </div>
                    
                    <div className="text-slate-300 font-light">|</div>

                    {/* Drop qabul qiluvchi zona (Buning ustiga sudrab kelinadi) */}
                    <div 
                      onDragOver={onDragOver}
                      onDrop={(e) => onDrop(e, leftItem.id)}
                      className={`flex-1 p-2 rounded-xl border-2 border-dashed text-center text-xs font-medium transition-all flex items-center justify-center min-h-[42px] ${
                        dragDropAnswers[leftItem.id] 
                          ? 'bg-[#e6f4ff] border-[#1677ff] text-[#1677ff]' 
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      {getAssignedItemText(leftItem.id)}
                    </div>
                  </div>
                ))}
              </div>

              {/* O'NG USTUN: Ko'k elementlar (Sichqoncha bilan ushlab jildiriladigan javoblar) */}
              <div className="space-y-3 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 flex flex-col justify-center">
                <p className="text-xs text-slate-400 font-medium mb-2 text-center">💡 O'ng tomondagi ko'k elementlarni chap tomondagi kataklarga sudrab joylashtiring:</p>
                {currentQuestion.rightItems.map((rightItem) => {
                  // Agar u allaqachon biror joyga joylangan bo'lsa, ro'yxatdan xiralashtiramiz
                  const isUsed = Object.values(dragDropAnswers).includes(rightItem.id);
                  return (
                    <div
                      key={rightItem.id}
                      draggable={!isUsed}
                      onDragStart={(e) => onDragStart(e, rightItem)}
                      className={`p-3 rounded-xl border text-sm font-medium select-none shadow-2xs flex items-center gap-2.5 transition-all ${
                        isUsed 
                          ? 'bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed opacity-40' 
                          : 'bg-[#e6f4ff] border-[#b3d8ff] text-[#1677ff] cursor-grab active:cursor-grabbing hover:bg-[#1677ff] hover:text-white group'
                      }`}
                    >
                      {/* Rasmdagi 6 ta nuqtali surish belgisi (Grip Icon) */}
                      <div className="flex flex-col gap-0.5 opacity-50 group-hover:opacity-100">
                        <div className="flex gap-0.5">
                          <span className="w-1 h-1 bg-current rounded-full"/>
                          <span className="w-1 h-1 bg-current rounded-full"/>
                        </div>
                        <div className="flex gap-0.5">
                          <span className="w-1 h-1 bg-current rounded-full"/>
                          <span className="w-1 h-1 bg-current rounded-full"/>
                        </div>
                        <div className="flex gap-0.5">
                          <span className="w-1 h-1 bg-current rounded-full"/>
                          <span className="w-1 h-1 bg-current rounded-full"/>
                        </div>
                      </div>
                      <span>{rightItem.text}</span>
                    </div>
                  );
                })}

                {/* Tozalash tugmasi (Xato bo'lsa boshqatdan joylash uchun) */}
                {Object.keys(dragDropAnswers).length > 0 && (
                  <button 
                    onClick={() => setDragDropAnswers({})} 
                    className="mt-2 text-xs text-[#ff4d4f] hover:underline bg-transparent border-0 cursor-pointer self-center"
                  >
                    🔄 Joylashuvlarni qayta tiklash
                  </button>
                )}
              </div>

            </div>
          )}

          {/* Pastki OK tugmasi */}
          <div className="flex justify-center border-t border-slate-100 pt-5">
            <button
              onClick={handleOkClick}
              disabled={isOkDisabled()}
              className={`w-full sm:w-48 py-3 rounded-xl font-semibold transition-all text-center border-0 text-sm tracking-wide ${
                !isOkDisabled() ? 'bg-[#00a3ff] text-white hover:bg-blue-600 cursor-pointer shadow-xs' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* ==================== NATIJA SAHIFASI ==================== */}
      {currentPage === "final-result" && (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md border border-slate-100 p-8 text-center font-sans mt-10 animate-scale-up">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Test yakunlandi!</h2>
          <div className="bg-slate-50 rounded-xl p-4 mb-6 flex justify-around items-center">
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold">Natija</div>
              <div className="text-2xl font-black text-slate-700">{lastQuizResult.score}%</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div>
              <div className="text-xs text-slate-400 uppercase font-bold">Yutug'ingiz</div>
              <div className="text-2xl font-black text-amber-500">{lastQuizResult.coins} 🪙</div>
            </div>
          </div>
          <button
            onClick={() => { setCurrentPage("menu"); setActiveModule(null); }}
            className="w-full bg-[#00cc76] text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition border-0 cursor-pointer"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      )}
    </div>
  );
}