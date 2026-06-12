import React, { useState } from 'react';

const Begginer = () => {
  // State: 'dashboard' (ro'yxat sahifasi) yoki 'quiz' (test sahifasi)
  const [view, setView] = useState('dashboard');
  
  // Hozir qaysi darsning testi ishlanayotganini saqlash uchun id va sarlavha
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [activeLessonTitle, setActiveLessonTitle] = useState("");

  // Barcha darslar ro'yxati (Barcha darslar ochiq va ballari 0 holatida)
  const [lessons, setLessons] = useState([
    // MODUL 1, BLOK 1
    { id: 1, block: 1, title: '1 MARS', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 2, block: 1, title: '2 Klaviatura (Typing)', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 3, block: 1, title: '3 Canva prezentasiya', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 4, block: 1, title: '4 Google Docs', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 5, block: 1, title: '5 Google Sheets', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    
    // MODUL 1, BLOK 2 (Barchasi ochildi)
    { id: 7, block: 2, title: '7 Figma Basics', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 8, block: 2, title: '8 Figma Components', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 9, block: 2, title: "9 Sun'iy intellekt (AI)", quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 10, block: 2, title: '10 AI video va rasmlar', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
    { id: 11, block: 2, title: '11 AI - Projects', quizScore: '0/5', percent: 0, coins: 0, isLocked: false, hasFinished: false },
  ]);

  // HAR BIR MAVZU UCHUN MAXSUS SAVOLLAR (1 dan 5 gacha)
  const allLessonQuestions = {
    1: [
      { id: 1, question: "1. MARS platformasining asosiy vazifasi nima?", options: ["O'yin o'ynash", "O'quv jarayonini boshqarish va monitoring qilish", "Kino ko'rish", "Rasm chizish"], correctAnswer: 1 },
      { id: 2, question: "2. MARSda tangalar (coin) qanday yig'iladi?", options: ["Sotib olinganda", "Darslarni va testlarni yaxshi topshirganda", "Faqat saytga kirganda", "Do'stlarni taklif qilganda"], correctAnswer: 1 },
      { id: 3, question: "3. MARS platformasida profil parolini o'zgartirish mumkinmi?", options: ["Ha, sozlamalar bo'limida", "Yo'q, mutlaqo mumkin emas", "Faqat o'qituvchi qila oladi", "Faqat administrator qila oladi"], correctAnswer: 0 },
      { id: 4, question: "4. MARS darslaridagi 'Vazifa' bo'limi nima uchun kerak?", options: ["Yangiliklarni o'qish uchun", "Uyga berilgan topshiriqlarni yuklash uchun", "Chatda gaplashish uchun", "Ballarni ko'rish uchun"], correctAnswer: 1 },
      { id: 5, question: "5. MARS tizimida darslar qanday bloklarga bo'linadi?", options: ["Faqat 1 ta blokdan iborat", "Modul va bloklarga", "Haftalik darslarga", "Hech qanday bo'limi yo'q"], correctAnswer: 1 },
    ],
    2: [
      { id: 1, question: "1. Klaviaturada 'Ko'r-ko'rona terish' (Touch Typing) nima?", options: ["Klaviaturaga qaramasdan tez yozish", "Ko'zlarni yumib uxlash", "Faqat bitta qo'lda yozish", "Sichqonchadan ko'p foydalanish"], correctAnswer: 0 },
      { id: 2, question: "2. Klaviaturadagi asosiy boshlang'ich qator (Home Row) qaysi harflardan iborat?", options: ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM", "123456789"], correctAnswer: 1 },
      { id: 3, question: "3. Chap qo'l ko'rsatkich barmog'i asosiy qatorda qaysi harfda turadi?", options: ["A harfida", "S harfida", "F harfida", "J harfida"], correctAnswer: 2 },
      { id: 4, question: "4. Yozuvda yangi qatorga o'tish uchun qaysi tugma bosiladi?", options: ["Space (Probel)", "Enter", "Shift", "Caps Lock"], correctAnswer: 1 },
      { id: 5, question: "5. Caps Lock tugmasining vazifasi nima?", options: ["Hamma harflarni bosh harf qilib yozish", "Harflarni o'chirish", "Matnni saqlash", "Sahifani yangilash"], correctAnswer: 0 },
    ],
    3: [
      { id: 1, question: "1. Canva qanday platforma hisoblanadi?", options: ["Dasturlash muhiti", "Grafik dizayn va prezentatsiyalar yaratish onlayn vositasi", "Video pleyer", "Ma'lumotlar bazasi"], correctAnswer: 1 },
      { id: 2, question: "2. Canvada tayyor dizayn andozalari nima deyiladi?", options: ["Elementlar", "Shablonlar (Templates)", "Shriftlar", "Kadrlar"], correctAnswer: 1 },
      { id: 3, question: "3. Prezentatsiyaga harakatlanuvchi effektlar berish nima deyiladi?", options: ["Animatsiya", "Filtr", "Kadr", "Fon"], correctAnswer: 0 },
      { id: 4, question: "4. Canvada yaratilgan prezentatsiyani qaysi formatda yuklab olish qulay?", options: ["MP3", "PDF yoki PPTX", "TXT", "EXE"], correctAnswer: 1 },
      { id: 5, question: "5. Canvaga o'z kompyuterimizdagi rasmlarni qaysi bo'lim orqali yuklaymiz?", options: ["Elements", "Uploads (Yuklamalar)", "Text", "Draw"], correctAnswer: 1 },
    ],
    4: [
      { id: 1, question: "1. Google Docs (Hujjatlar) nima uchun ishlatiladi?", options: ["Matnli hujjatlar bilan onlayn ishlash uchun", "Prezentatsiya qilish uchun", "Rasm tahrirlash uchun", "Sayt kodini yozish uchun"], correctAnswer: 0 },
      { id: 2, question: "2. Google Docs hujjatini saqlash uchun qaysi tugma bosiladi?", options: ["Ctrl + S", "Fayl -> Saqlash", "U avtomatik ravishda bulutga saqlanadi", "Hech qanday"], correctAnswer: 2 },
      { id: 3, question: "3. Matn tagiga chizish uchun qaysi tugmalar birikmasi bosiladi?", options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + C"], correctAnswer: 2 },
      { id: 4, question: "4. Google Docs-da boshqa odam bilan birga ishlash uchun nima qilish kerak?", options: ["Hujjatni skrinshot qilish", "Share (Do'stlar bilan ulashish) tugmasi orqali ruxsat berish", "Faylni telegramdan yuborish", "Mumkin emas"], correctAnswer: 1 },
      { id: 5, question: "5. Matndan nusxa olish (Copy) klaviatura kombinatsiyasi qaysi?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + Z", "Ctrl + C"], correctAnswer: 3 },
    ],
    5: [
      { id: 1, question: "1. Google Sheets (Jadvallar) nima uchun mo'ljallangan?", options: ["Matn yozish uchun", "Elektron jadvallar va formulalar bilan ishlash uchun", "Video montaj uchun", "O'yin yaratish uchun"], correctAnswer: 1 },
      { id: 2, question: "2. Google Sheets-da balla formulalar qaysi belgi bilan boshlanadi?", options: ["+ (Plyus)", "/ (Bo'lish)", "= (Tenglik)", "$ (Dollar)"], correctAnswer: 2 },
      { id: 3, question: "3. Katakchalarni qo'shish (yig'indi) funksiyasi qaysi?", options: ["AVERAGE", "SUM", "MIN", "COUNT"], correctAnswer: 1 },
      { id: 4, question: "4. Jadvallardagi tik ustunlar nima bilan belgilanadi?", options: ["Raqamlar bilan (1, 2, 3...)", "Harflar bilan (A, B, C...)", "Ranglar bilan", "Belgilar bilan"], correctAnswer: 1 },
      { id: 5, question: "5. Google Sheets-da ma'lumotlarni vizual ko'rsatish uchun nima yaratiladi?", options: ["Matn", "Diagramma va grafiklar", "Rasm", "Klaviatura"], correctAnswer: 1 },
    ],
    7: [
      { id: 1, question: "1. Figma nima?", options: ["Dasturlash tili", "UI/UX va veb-dizayn yaratish uchun onlayn vosita", "Operatsion tizim", "Video tahrirlagich"], correctAnswer: 1 },
      { id: 2, question: "2. Figmada yangi ish maydoni (ekran o'lchami) yaratish uchun qaysi vosita tanlanadi?", options: ["Slice", "Frame (F)", "Pen tool", "Hand tool"], correctAnswer: 1 },
      { id: 3, question: "3. Figmada ob'ektlarni guruhlash (Group) uchun qaysi tugmalar bosiladi?", options: ["Ctrl + G", "Ctrl + Alt", "Ctrl + Shift", "Ctrl + E"], correctAnswer: 0 },
      { id: 4, question: "4. Figma-da loyihani boshqalarga ko'rsatish va jonli ko'rish uchun qaysi tugma bosiladi?", options: ["Share", "Present (Play ikonkachasi)", "Export", "Design"], correctAnswer: 1 },
      { id: 5, question: "5. Figmada tayyor komponentlar nima deyiladi?", options: ["Layers", "Components", "Plugins", "Assets"], correctAnswer: 1 },
    ],
    8: [
      { id: 1, question: "1. Figmada 'Constraints' funksiyasi nima uchun kerak?", options: ["Rasm rangini o'zgartirish", "Ekran o'lchami o'zgarganda elementlarning joylashuvini boshqarish", "Matnni o'chirish", "Loyiha nusxasini olish"], correctAnswer: 1 },
      { id: 2, question: "2. Figmada 'Auto Layout' nima vazifani bajaradi?", options: ["Dizaynni avtomatik kodga o'tkazadi", "Elementlarni masofasiga qarab avtomat joylashtiradi va moslashtiradi", "Ranglarni tanlaydi", "Rasmni kesadi"], correctAnswer: 1 },
      { id: 3, question: "3. Figmadagi komponentlar (Components) nima beradi?", options: ["Xatolarni ko'rsatadi", "Bitta elementni o'zgartirganda boshqa nusxalari ham avtomat o'zgaradi", "Loyiha hajmini kamaytiradi", "Hech narsa"], correctAnswer: 1 },
      { id: 4, question: "4. Figma loyihasini rasmli formatda (PNG/JPG) saqlash qanday deyiladi?", options: ["Import", "Export", "Save as", "Share"], correctAnswer: 1 },
      { id: 5, question: "5. Figmada doira chizish uchun qaysi harf tugmasi tezkor vosita hisoblanadi?", options: ["R", "O", "T", "L"], correctAnswer: 1 },
    ],
    9: [
      { id: 1, question: "1. Sun'iy intellekt (AI) nima?", options: ["Inson kabi fikrlash va muammolarni hal qilishga mo'ljallangan kompyuter tizimi", "Oddiy kalkulyator programmasi", "Faqat rasm chizadigan sayt", "Kompyuterning qattiq diski"], correctAnswer: 0 },
      { id: 2, question: "2. Quyidagilardan qaysi biri mashhur matnli AI hisoblanadi?", options: ["Photoshop", "ChatGPT / Gemini", "Excel", "Windows"], correctAnswer: 1 },
      { id: 3, question: "3. Sun'iy intellektga beriladigan matnli buyruq yoki topshiriq nima deyiladi?", options: ["Kod", "Prompt", "Skript", "Algoritm"], correctAnswer: 1 },
      { id: 4, question: "4. AI qaysi sohalarda yordam bera oladi?", options: ["Faqat matematika", "Dasturlash, yozish, tahlil va deyarli barcha sohalarda", "Faqat o'yinlarda", "Hech qaysi sohada"], correctAnswer: 1 },
      { id: 5, question: "5. Neyron tarmoqlar (Neural Networks) nima asosida ishlaydi?", options: ["Inson miyasi ishlash prinsipi modelida", "Oddiy jadvallar asosida", "Mexanik viteslar yordamida", "Faqat qog'ozda"], correctAnswer: 0 },
    ],
    10: [
      { id: 1, question: "1. Matn asosida rasm (Text-to-Image) yaratuvchi mashhur AI qaysi?", options: ["Midjourney / DALL-E", "Google Docs", "Notepad", "VLC Player"], correctAnswer: 0 },
      { id: 2, question: "2. Sun'iy intellekt yordamida video yaratishda nima muhim?", options: ["Faqat kompyuter chiroqlari", "Aniq yozilgan ssenariy va promptlar", "Sichqonchaning tezligi", "Internet tezligi"], correctAnswer: 1 },
      { id: 3, question: "3. 'Deepfake' texnologiyasi nima?", options: ["Rasmlarni arxivlash", "AI yordamida videodagi yuz va ovozlarni boshqasiga o'zgartirish", "Kompyuterni tozalash", "O'yin yuklash"], correctAnswer: 1 },
      { id: 4, question: "4. AI yordamida rasm kengaytirish (Generative Fill) qaysi dasturda mavjud?", options: ["Adobe Photoshop", "Paint", "Calculator", "Word"], correctAnswer: 0 },
      { id: 5, question: "5. AI yaratgan rasmlarning sifatini oshirish nima deyiladi?", options: ["Compress", "Upscaling", "Delete", "Crop"], correctAnswer: 1 },
    ],
    11: [
      { id: 1, question: "1. AI loyihalarida 'Prompt Engineering' nima?", options: ["Kompyuter yig'ish", "To'g'ri va samarali promptlar yozish san'ati", "Saytni buzib kirish", "Rasm formatini o'zgartirish"], correctAnswer: 1 },
      { id: 2, question: "2. Shaxsiy AI yordamchini (Custom GPT) yaratish uchun kod bilish shartmi?", options: ["Ha, mukammal bilish shart", "Yo'q, oddiy matnli ko'rsatmalar orqali yaratsa bo'ladi", "Faqat olimlar qila oladi", "Mutlaqo ilojsiz"], correctAnswer: 1 },
      { id: 3, question: "3. AI loyihasini yaratishda ma'lumotlar to'plami nima deyiladi?", options: ["Dataset", "Folder", "Hard Drive", "Cloud"], correctAnswer: 0 },
      { id: 4, question: "4. Yaratilgan AI loyihasini test qilish qanday ataladi?", options: ["Exporting", "Evaluation / Testing", "Designing", "Coding"], correctAnswer: 1 },
      { id: 5, question: "5. Kelajakda AI loyihalarining asosiy maqsadi nima?", options: ["Inson ishini yengillashtirish va muammolarni tezroq yechish", "Insonlarni butkul ishsiz qoldirish", "Faqat vaqtni sarflash", "Kompyuterlarni buzish"], correctAnswer: 0 },
    ],
    // Loyiha ishi uchun test (p1)
    'p1': [
      { id: 1, question: "1. Loyiha ishini topshirishda eng asosiysi nima?", options: ["Topshiriqni to'liq va sifatli bajarish", "Tez tugatish", "Faqat dizayniga qarash", "Hech narsa yozmaslik"], correctAnswer: 0 },
      { id: 2, question: "2. Hujjatlar va prezentatsiyalar loyiha tarkibiga kirishi kerakmi?", options: ["Yo'q shart emas", "Ha, agar topshiriqda so'ralgan bo'lsa", "Faqat rasm bo'linger kerak", "Faqat matn"], correctAnswer: 1 },
      { id: 3, question: "3. Google Docs va Sheets loyihalari qanday ulashiladi?", options: ["Skrinshot orqali", "Havola (Link) orqali kirish ruxsatini berib", "Telegram fayl qilib", "Ulashib bo'lmaydi"], correctAnswer: 1 },
      { id: 4, question: "4. Yaxshi taqdimot (Prezentatsiya) slaydlari qanday bo'lishi kerak?", options: ["Hamma joyi matnga to'la", "Tushunarli, qisqa matn va mos rasmlar bilan", "Faqat oq-qora", "Rasmsiz"], correctAnswer: 1 },
      { id: 5, question: "5. Loyihani yakunlashda qaysi ko'nikmalar tekshiriladi?", options: ["Faqat yozish", "Modul davomida o'tilgan barcha dasturlar bilan ishlash", "Tezlik", "Klaviatura sifati"], correctAnswer: 1 },
    ]
  };

  // Test holatlari (Quiz States)
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answersStatus, setAnswersStatus] = useState([null, null, null, null, null]);
  const [quizFinished, setQuizFinished] = useState(false);

  // === DYNAMIC BALL HISOBLASH ===
  // Blok 1 uchun o'rtacha ballni hisoblash
  const block1Lessons = lessons.filter(l => l.block === 1);
  const totalPercentB1 = block1Lessons.reduce((sum, lesson) => sum + lesson.percent, 0);
  const averageBallB1 = Math.round(totalPercentB1 / block1Lessons.length);

  // Blok 2 uchun o'rtacha ballni hisoblash
  const block2Lessons = lessons.filter(l => l.block === 2);
  const totalPercentB2 = block2Lessons.reduce((sum, lesson) => sum + lesson.percent, 0);
  const averageBallB2 = Math.round(totalPercentB2 / block2Lessons.length);

  // Testga kirish funksiyasi
  const startQuiz = (lessonId, lessonTitle) => {
    setActiveLessonId(lessonId);
    setActiveLessonTitle(lessonTitle);
    setCurrentIdx(0);
    setSelectedOption(null);
    setAnswersStatus([null, null, null, null, null]);
    setQuizFinished(false);
    setView('quiz');
  };

  // Test savolini tasdiqlash va keyingisiga o'tish
  const handleNext = () => {
    if (selectedOption === null) return;

    const currentQuestions = allLessonQuestions[activeLessonId] || allLessonQuestions[1];
    const isCorrect = selectedOption === currentQuestions[currentIdx].correctAnswer;
    const updatedStatus = [...answersStatus];
    updatedStatus[currentIdx] = isCorrect;
    setAnswersStatus(updatedStatus);

    if (currentIdx < currentQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
    } else {
      // Test tugadi -> Natijalarni hisoblash va dars ma'lumotlarini yangilash
      const correctCount = updatedStatus.filter(status => status === true).length;
      const calculatedPercent = (correctCount / currentQuestions.length) * 100;

      setLessons(prevLessons => 
        prevLessons.map(lesson => 
          lesson.id === activeLessonId 
            ? {
                ...lesson,
                quizScore: `${correctCount}/${currentQuestions.length}`,
                percent: calculatedPercent,
                coins: correctCount,
                hasFinished: true
              }
            : lesson
        )
      );
      setQuizFinished(true);
    }
  };

  // Bosh sahifaga qaytish
  const backToDashboard = () => {
    setView('dashboard');
  };

  // Hozirgi darsga mos savollarni olish
  const activeQuestions = allLessonQuestions[activeLessonId] || allLessonQuestions[1];

  // Darslar ro'yxatini render qilish uchun yordamchi funksiya
  const renderLessonsBlock = (blockNumber) => {
    return lessons
      .filter(lesson => lesson.block === blockNumber)
      .map((lesson, index, filteredArray) => (
        <div 
          key={lesson.id} 
          className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 ${
            index !== filteredArray.length - 1 ? 'border-b border-gray-100' : ''
          }`}
        >
          {/* Dars nomi */}
          <div className="text-[#2D3748] text-base md:text-lg font-medium mb-3 sm:mb-0">
            {lesson.title}
          </div>

          {/* O'ng tomondagi tugmalar va badgeler */}
          <div className="flex items-center space-x-3 self-end sm:self-auto">
            {lesson.isLocked ? (
              <span className="text-gray-400 text-xs md:text-sm font-medium bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl">
                {lesson.label}
              </span>
            ) : lesson.hasFinished ? (
              /* Ishlab bo'lingan testlar uchun chiroyli ko'k badge */
              <div className="flex items-center space-x-1.5 bg-[#E6F4FF] text-[#1677FF] border border-[#B3D8FF] px-2.5 py-1 rounded-full text-xs font-medium">
                <svg className="w-3.5 h-3.5 text-[#1677FF]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                </svg>
                <span>Quiz</span>
                <span className="text-gray-300">·</span>
                <span className="text-gray-700 font-bold">{lesson.quizScore}</span>
                <span className="text-gray-700 font-bold">{lesson.percent}</span>
                <span className="text-gray-300">·</span>
                <span className="text-[#FAAD14] font-bold">{lesson.coins}</span>
                <span className="text-[#FAAD14]">🪙</span>
              </div>
            ) : (
              /* Aktiv dars uchun faol ko'k Quiz tugmasi */
              <button 
                onClick={() => startQuiz(lesson.id, lesson.title)}
                className="bg-[#F0F5FF] text-[#1D39C4] hover:bg-[#ADC6FF] transition px-5 py-1.5 rounded-xl font-medium text-sm border border-transparent cursor-pointer"
              >
                Quiz
              </button>
            )}

            {/* O'ng chekkadagi Project / Vazifa tugmasi */}
            {lesson.isLocked || lesson.hasFinished ? (
              <button disabled className="bg-[#F5F5F5] text-[#BFBFBF] border border-[#D9D9D9] px-4 py-1.5 rounded-lg text-sm font-medium cursor-not-allowed">
                Project
              </button>
            ) : (
              <button className="bg-[#FFF1F0] text-[#FF4D4F] border border-[#FFCCC7] hover:bg-[#FFF2F0] transition px-5 py-1.5 rounded-xl font-medium text-sm">
                Vazifa
              </button>
            )}
          </div>
        </div>
      ));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 md:p-6 font-sans flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-8">
        
        {/* ==================== 1-SAHIFA: DASHBOARD ==================== */}
        {view === 'dashboard' && (
          <>
            {/* -------------------- MODUL 1, BLOK 1 SEKSIYASI -------------------- */}
            <div className="space-y-4">
              <div className="bg-[#00C486] text-white rounded-2xl p-6 flex justify-between items-center shadow-sm">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold tracking-wide">MODUL 1, BLOK 1</h1>
                  <p className="text-sm opacity-90 mt-1">[New] Beginner</p>
                </div>
                <div className="text-center min-w-[80px]">
                  <p className="text-[10px] opacity-90 font-medium uppercase tracking-wider">O'rtacha ball</p>
                  <p className="text-4xl md:text-5xl font-black leading-none my-1">{averageBallB1}</p>
                  <p className="text-[10px] font-bold tracking-widest opacity-90">BALL</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2">
                {renderLessonsBlock(1)}
              </div>

              {/* Loyiha ishi Blok 1 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[#2D3748] text-xl font-medium">Loyiha ishi</div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button onClick={() => startQuiz('p1', 'Loyiha ishi (Modul 1)')} className="flex-1 sm:flex-initial bg-[#F0F5FF] text-[#1D39C4] hover:bg-[#ADC6FF] transition px-6 py-2 rounded-xl font-medium text-sm cursor-pointer">Quiz</button>
                  <button className="flex-1 sm:flex-initial bg-[#FFF1F0] text-[#FF4D4F] border border-[#FFCCC7] hover:bg-[#FFF2F0] transition px-6 py-2 rounded-xl font-medium text-sm">Vazifa</button>
                </div>
              </div>
            </div>

            {/* -------------------- MODUL 1, BLOK 2 SEKSIYASI -------------------- */}
            <div className="space-y-4">
              <div className="bg-[#00C486] text-white rounded-2xl p-6 flex justify-between items-center shadow-sm">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold tracking-wide">MODUL 1, BLOK 2</h1>
                  <p className="text-sm opacity-90 mt-1">[New] Beginner</p>
                </div>
                <div className="text-center min-w-[80px]">
                  <p className="text-[10px] opacity-90 font-medium uppercase tracking-wider">O'rtacha ball</p>
                  <p className="text-4xl md:text-5xl font-black leading-none my-1">{averageBallB2}</p>
                  <p className="text-[10px] font-bold tracking-widest opacity-90">BALL</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-2">
                {renderLessonsBlock(2)}
              </div>

              {/* Loyiha ishi Blok 2 (Endi ochiq) */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-[#2D3748] text-xl font-medium">Loyiha ishi</div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button onClick={() => startQuiz('p1', 'Loyiha ishi (Blok 2)')} className="flex-1 sm:flex-initial bg-[#F0F5FF] text-[#1D39C4] hover:bg-[#ADC6FF] transition px-6 py-2 rounded-xl font-medium text-sm cursor-pointer">Quiz</button>
                  <button className="flex-1 sm:flex-initial bg-[#FFF1F0] text-[#FF4D4F] border border-[#FFCCC7] hover:bg-[#FFF2F0] transition px-6 py-2 rounded-xl font-medium text-sm">Vazifa</button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==================== 2-SAHIFA: QUIZ (TEST REJIMI) ==================== */}
        {view === 'quiz' && (
          <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative">
            
            {/* Header ko'rinishi */}
            <div className="flex flex-wrap items-center justify-between border-b border-gray-100 pb-4 mb-6 gap-2 text-xs text-gray-500 font-medium">
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">[New] Front-End</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">MODUL 1</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px]">BLOK {activeLessonId === 'p1' ? '1' : lessons.find(l => l.id === activeLessonId)?.block}</span>
              </div>
              <div className="text-gray-700 font-semibold text-sm">{activeLessonTitle}</div>
              <div>Variantli savol</div>
            </div>

            {/* Qatorli Progress Bar */}
            <div className="w-full flex space-x-1.5 mb-8 h-2">
              {answersStatus.map((status, index) => {
                let bgClass = "bg-gray-100"; 
                if (status === true) bgClass = "bg-[#00C486]";
                if (status === false) bgClass = "bg-[#FF4D4F]";

                return (
                  <div key={index} className={`flex-1 h-full rounded-full transition-colors duration-300 ${bgClass}`} />
                );
              })}
            </div>

            {!quizFinished ? (
              <div>
                {/* Savol matni */}
                <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-6">
                  {activeQuestions[currentIdx]?.question}
                </h2>

                {/* Variantlar */}
                <div className="space-y-3 mb-8">
                  {activeQuestions[currentIdx]?.options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedOption(index)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center space-x-3 ${
                          isSelected 
                            ? 'border-[#1677FF] bg-[#E6F4FF] text-[#1677FF] font-medium' 
                            : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#1677FF] bg-white' : 'border-gray-300'
                        }`}>
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#1677FF]" />}
                        </div>
                        <span className="text-sm md:text-base">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* OK tugmasi */}
                <div className="flex justify-center">
                  <button
                    onClick={handleNext}
                    disabled={selectedOption === null}
                    className={`w-full sm:w-48 py-3 rounded-xl font-medium transition-all text-center ${
                      selectedOption !== null
                        ? 'bg-[#ADC6FF] text-[#1D39C4] hover:bg-[#1677FF] hover:text-white cursor-pointer'
                        : 'bg-[#D9D9D9] text-white cursor-not-allowed'
                    }`}
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : (
              /* Natija oynasi */
              <div className="text-center py-10">
                <div className="text-4xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Test yakunlandi!</h2>
                <p className="text-gray-500 mb-6">
                  Ushbu darsdan to'plangan ball muvaffaqiyatli saqlandi!
                </p>
                <button
                  onClick={backToDashboard}
                  className="bg-[#00C486] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-[#00A873] transition shadow-sm cursor-pointer"
                >
                  Ro'yxatga qaytish va ballni ko'rish
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Begginer;