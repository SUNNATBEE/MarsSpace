import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, HelpCircle, Code } from 'lucide-react'
import { tests } from '../data/tests.js'
import { variants } from '../data/variants.js'
import { answers } from '../data/answers.js'
import amazon from '../assets/amazon.webp'
import google from '../assets/google.png'
import netflix from '../assets/netflix.jpeg'
import facebook from '../assets/facebook.png'

const companyLogos = {
  amazon: amazon,
  google: google,
  netflix: netflix,
  facebook: facebook
};

const companyNames = {
  amazon: 'Amazon',
  google: 'Google',
  netflix: 'Netflix',
  facebook: 'Facebook'
};

const optionLetters = ['A', 'B', 'C', 'D'];

const MarsCodeQuizPage = () => {
  const { companyId, questionId } = useParams();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [alreadySolved, setAlreadySolved] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Parse IDs
  const qId = parseInt(questionId);

  // Get data
  const companyQuestions = tests[companyId] || [];
  const currentQuestion = companyQuestions.find(q => q.id === qId);
  const questionVariants = (variants[companyId] || []).find(v => v.id === qId);
  const questionAnswer = (answers[companyId] || []).find(a => a.id === qId);

  useEffect(() => {
    // Reset state on question change
    setSelectedOption(null);
    setIsChecked(false);
    setIsCorrect(false);

    // Check if already solved
    const saved = localStorage.getItem('marscode_completed');
    if (saved) {
      try {
        const completed = JSON.parse(saved);
        const solvedList = completed[companyId] || [];
        if (solvedList.includes(qId)) {
          setAlreadySolved(true);
        } else {
          setAlreadySolved(false);
        }
      } catch (e) {
        console.error(e);
      }
    }

    // Shuffle options dynamically so A is not always the correct answer
    if (questionVariants && questionVariants.options) {
      const mapped = questionVariants.options.map((text, idx) => ({
        text,
        originalIndex: idx
      }));
      
      // Fisher-Yates Shuffle
      for (let i = mapped.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
      }
      setShuffledOptions(mapped);
    }
  }, [companyId, questionId, questionVariants]);

  if (!currentQuestion || !questionVariants || !questionAnswer) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-slate-800">Masala topilmadi</h2>
        <p className="text-slate-500 mt-2">Bunday masala yoki test variantlari mavjud emas.</p>
        <Link to={`/marscode/questions/${companyId}`} className="inline-block mt-4 text-orange-500 font-bold hover:underline">
          &larr; Masalalar ro'yxatiga qaytish
        </Link>
      </div>
    );
  }

  const handleOptionSelect = (idx) => {
    if (isChecked) return; // Prevent selection after submission
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isChecked) return;

    const selectedOriginalIndex = shuffledOptions[selectedOption]?.originalIndex;
    const correctIndex = questionAnswer.correctAnswerIndex;
    const isUserCorrect = selectedOriginalIndex === correctIndex;

    setIsCorrect(isUserCorrect);
    setIsChecked(true);

    if (isUserCorrect) {
      // Save to localStorage
      const saved = localStorage.getItem('marscode_completed') || '{}';
      try {
        const completed = JSON.parse(saved);
        if (!completed[companyId]) {
          completed[companyId] = [];
        }
        
        const isFirstTime = !completed[companyId].includes(qId);
        
        if (isFirstTime) {
          completed[companyId].push(qId);
          localStorage.setItem('marscode_completed', JSON.stringify(completed));
          
          // Dispatch custom event to notify Header
          window.dispatchEvent(new Event('marscode-coins-updated'));
          
          alert("To'g'ri javob! 🎉 +3 Coin taqdim etildi!");
        } else {
          alert("To'g'ri javob! 🎉 (Ushbu masala uchun coin avval berilgan)");
        }
        setAlreadySolved(true);
      } catch (e) {
        console.error("Error saving progress:", e);
      }
    } else {
      alert("Noto'g'ri javob. ❌ Qaytadan urinib ko'ring!");
    }

    // Immediately navigate back to questions list
    navigate(`/marscode/questions/${companyId}`);
  };

  // Check if there is a next question
  const nextQuestion = companyQuestions.find(q => q.id === qId + 1);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Top Nav Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link 
          to={`/marscode/questions/${companyId}`}
          className="flex items-center gap-2 text-slate-600 hover:text-orange-500 font-medium transition-colors w-fit"
        >
          <ArrowLeft size={16} />
          <span>Masalalar ro'yxatiga qaytish</span>
        </Link>

        {/* Company Identity */}
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-2 self-start sm:self-auto">
          <img 
            className="w-6 h-6 object-contain" 
            src={companyLogos[companyId]} 
            alt={companyNames[companyId]} 
          />
          <span className="text-sm font-bold text-slate-700">{companyNames[companyId]}</span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-semibold text-slate-500">Masala {qId}/10</span>
        </div>
      </div>

      {/* Main Layout - Split screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Question Detail & Code Block */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-slate-400">
              <HelpCircle size={18} className="text-orange-500" />
              <span className="text-sm font-semibold uppercase tracking-wider">Texnik Savol</span>
            </div>
            
            <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
              {qId}. {currentQuestion.title}
            </h1>
            
            <p className="text-slate-600 text-base leading-relaxed whitespace-pre-line">
              {currentQuestion.question}
            </p>

            {/* Already Solved Badge */}
            {alreadySolved && !isChecked && (
              <div className="flex items-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-bold w-fit border border-emerald-100">
                <CheckCircle2 size={14} />
                Ushbu masala oldin muvaffaqiyatli yechilgan!
              </div>
            )}
          </div>

          {/* IDE/Code Editor Preview style box */}
          {currentQuestion.code && (
            <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
              {/* Window Header */}
              <div className="bg-slate-950/80 px-5 py-3 flex items-center justify-between border-b border-slate-800/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <Code size={12} className="text-slate-500" />
                  <span>index.js &mdash; Editor</span>
                </div>
                <div className="w-12"></div> {/* Spacer */}
              </div>

              {/* Code Content */}
              <pre className="p-6 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed bg-slate-900/90 select-all">
                <code>{currentQuestion.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Right Column: Choices & Submission */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-slate-800">To'g'ri javobni tanlang:</h3>

            {/* Option Cards */}
            <div className="space-y-3">
              {shuffledOptions.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const letter = optionLetters[idx];
                
                let cardStyles = "border-slate-100 hover:border-slate-200 hover:bg-slate-50";
                let badgeStyles = "bg-slate-100 text-slate-600";
                
                if (isSelected) {
                  cardStyles = "border-orange-500 bg-orange-50/20";
                  badgeStyles = "bg-orange-500 text-white";
                }
                
                if (isChecked) {
                  const isCorrectAnswer = option.originalIndex === questionAnswer.correctAnswerIndex;
                  if (isCorrectAnswer) {
                    cardStyles = "border-emerald-500 bg-emerald-50/20";
                    badgeStyles = "bg-emerald-500 text-white";
                  } else if (isSelected) {
                    cardStyles = "border-rose-500 bg-rose-50/20";
                    badgeStyles = "bg-rose-500 text-white";
                  } else {
                    cardStyles = "border-slate-100 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isChecked}
                    className={`w-full text-left flex items-start gap-3 p-4 rounded-2xl border-2 transition-all duration-200 ${cardStyles}`}
                  >
                    {/* Badge Letter */}
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${badgeStyles}`}>
                      {letter}
                    </span>

                    {/* Option Text */}
                    <span className="text-sm text-slate-700 font-mono leading-relaxed whitespace-pre-wrap">
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Result Banners */}
            {isChecked && (
              <div className={`p-4 rounded-2xl border flex items-start gap-3 animate-fade-in ${
                isCorrect 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-100' 
                  : 'bg-rose-50 text-rose-800 border-rose-100'
              }`}>
                <div className="mt-0.5">
                  {isCorrect ? (
                    <CheckCircle2 className="text-emerald-600" size={20} />
                  ) : (
                    <XCircle className="text-rose-600" size={20} />
                  )}
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm">
                    {isCorrect ? "To'g'ri javob! 🎉" : "Noto'g'ri javob. ❌"}
                  </h4>
                  <p className="text-xs opacity-90 leading-relaxed">
                    {isCorrect 
                      ? "Kod muvaffaqiyatli tekshirildi va yechim qabul qilindi. Keyingi masalaga o'tishingiz mumkin."
                      : "Siz tanlagan kodda xatolik mavjud. Muammoni qayta tahlil qiling va boshqa variantni sinab ko'ring."
                    }
                  </p>
                </div>
              </div>
            )}

            {/* Actions Button */}
            <div className="pt-2">
              {!isChecked ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className={`w-full py-4.5 rounded-2xl text-center font-bold text-sm shadow-md transition-all duration-200 ${
                    selectedOption !== null
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-100 hover:shadow-lg cursor-pointer'
                      : 'bg-slate-100 text-slate-400 shadow-none cursor-not-allowed'
                  }`}
                >
                  Javobni Tekshirish
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  {!isCorrect && (
                    <button
                      onClick={() => {
                        setIsChecked(false);
                        setSelectedOption(null);
                      }}
                      className="flex-1 py-4.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-2xl text-center cursor-pointer transition-colors"
                    >
                      Qayta urinish
                    </button>
                  )}
                  {isCorrect && nextQuestion && (
                    <Link
                      to={`/marscode/quiz/${companyId}/${nextQuestion.id}`}
                      className="flex-1 py-4.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-2xl text-center shadow-md shadow-orange-100 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Keyingi masala</span>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                  {isCorrect && !nextQuestion && (
                    <Link
                      to={`/marscode/questions/${companyId}`}
                      className="flex-1 py-4.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm rounded-2xl text-center shadow-md shadow-amber-100 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <span>Barcha masalalar yechildi! 🏆</span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarsCodeQuizPage
