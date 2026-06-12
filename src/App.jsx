import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

// Sahifalar (pages) — har bir a'zo o'z faylida ishlaydi
import HomePage from './pages/HomePage.jsx'
import TypingPage from './pages/TypingPage.jsx'
import KurslarimPage from './pages/KurslarimPage.jsx'
import EduversePage from './pages/EduversePage.jsx'
import MarsCodePage from './pages/MarsCodePage.jsx'
import MarsCodeQuestionsPage from './pages/MarsCodeQuestionsPage.jsx'
import MarsCodeQuizPage from './pages/MarsCodeQuizPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import TolovPage from './pages/TolovPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import MarsAiPage from './pages/MarsAiPage.jsx'
import UnityPage from './pages/UnityPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// =====================================================================
//  BU YER — ILOVANING "XARITASI" (router).
//  Qaysi manzilga (URL) borilsa, qaysi sahifa ochilishi shu yerda yozilgan.
//  Masalan: "/blog" manziliga borsa -> BlogPage ochiladi.
//
//  <Layout> ichidagi hamma sahifalarda Navbar (menyu) ko'rinadi.
//  Yangi sahifa qo'shmoqchi bo'lsangiz: yuqorida import qiling,
//  pastda <Route ... /> qatorini qo'shing. Tamom!
// =====================================================================
function App() {
  return (
    <Routes>
      {/* Layout — umumiy ramka (Navbar + sahifa joyi). Ichidagilar shu ramkada ochiladi. */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />            {/* "/"          -> Bahodir */}
        <Route path="typing" element={<TypingPage />} />  {/* "/typing"    -> Aziz */}
        <Route path="kurslarim" element={<KurslarimPage />} /> {/* "/kurslarim" -> Mannonov Behruz */}
        <Route path="eduverse" element={<EduversePage />} />   {/* "/eduverse"  -> Mansur */}
        <Route path="marscode" element={<MarsCodePage />} />   {/* "/marscode"  -> Ayub */}
        <Route path="marscode/questions/:companyId" element={<MarsCodeQuestionsPage />} />
        <Route path="marscode/quiz/:companyId/:questionId" element={<MarsCodeQuizPage />} />
        <Route path="blog" element={<BlogPage />} />           {/* "/blog"      -> Mirlan */}
        <Route path="tolov" element={<TolovPage />} />         {/* "/tolov"     -> Bahrom */}
        <Route path="shop" element={<ShopPage />} />           {/* "/shop"      -> Sohiba */}
        <Route path="mars-ai" element={<MarsAiPage />} />      {/* "/mars-ai"   -> Behruz */}
        <Route path="unity" element={<UnityPage />} />         {/* "/unity"     -> Azamat */}

        {/* Mavjud bo'lmagan manzil yozilsa -> 404 sahifa */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
