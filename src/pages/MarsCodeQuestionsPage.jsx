import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, RotateCcw, CheckCircle2 } from 'lucide-react'
import amazon from '../assets/amazon.webp'
import google from '../assets/google.png'
import netflix from '../assets/netflix.jpeg'
import facebook from '../assets/facebook.png'
import { tests } from '../data/tests.js'

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

const MarsCodeQuestionsPage = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [completedList, setCompletedList] = useState([]);
  const [progressPercent, setProgressPercent] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Validate company existence
  const companyQuestions = tests[companyId];
  if (!companyQuestions) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-slate-800">Kompaniya topilmadi</h2>
        <p className="text-slate-500 mt-2">Bunday kompaniya mavjud emas yoki o'chirilgan.</p>
        <Link to="/marscode" className="inline-block mt-4 text-orange-500 font-bold hover:underline">
          &larr; MarsCode sahifasiga qaytish
        </Link>
      </div>
    );
  }

  const loadProgress = () => {
    const saved = localStorage.getItem('marscode_completed');
    if (saved) {
      try {
        const completed = JSON.parse(saved);
        const list = completed[companyId] || [];
        setCompletedList(list);
        const percent = Math.round((list.length / companyQuestions.length) * 100);
        setProgressPercent(percent);
      } catch (e) {
        console.error("Error reading localStorage:", e);
      }
    } else {
      setCompletedList([]);
      setProgressPercent(0);
    }
  };

  useEffect(() => {
    loadProgress();

    // Shuffle questions and cache in sessionStorage per company
    const sessionKey = `marscode_shuffled_${companyId}`;
    const savedShuffled = sessionStorage.getItem(sessionKey);
    
    if (savedShuffled) {
      try {
        const ids = JSON.parse(savedShuffled);
        const ordered = ids.map(id => companyQuestions.find(q => q.id === id)).filter(Boolean);
        setShuffledQuestions(ordered);
      } catch (e) {
        console.error(e);
      }
    } else {
      const questionsCopy = [...companyQuestions];
      for (let i = questionsCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
      }
      const ids = questionsCopy.map(q => q.id);
      sessionStorage.setItem(sessionKey, JSON.stringify(ids));
      setShuffledQuestions(questionsCopy);
    }
  }, [companyId]);

  const handleResetProgress = () => {
    if (window.confirm(`${companyNames[companyId]} uchun erishilgan barcha natijalarni nollamoqchimisiz?`)) {
      const saved = localStorage.getItem('marscode_completed');
      if (saved) {
        try {
          const completed = JSON.parse(saved);
          completed[companyId] = [];
          localStorage.setItem('marscode_completed', JSON.stringify(completed));
          
          // Dispatch custom event to notify Header to recalculate coins
          window.dispatchEvent(new Event('marscode-coins-updated'));
          
          // Clear shuffle cache to get a new randomized order on reset
          sessionStorage.removeItem(`marscode_shuffled_${companyId}`);
          
          loadProgress();

          // Reshuffle questions
          const questionsCopy = [...companyQuestions];
          for (let i = questionsCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
          }
          const ids = questionsCopy.map(q => q.id);
          sessionStorage.setItem(`marscode_shuffled_${companyId}`, JSON.stringify(ids));
          setShuffledQuestions(questionsCopy);
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back Button */}
      <div>
        <button 
          onClick={() => navigate('/marscode')}
          className="flex items-center gap-2 text-slate-600 hover:text-orange-500 font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kompaniyalar ro'yxatiga qaytish</span>
        </button>
      </div>

      {/* Company Header Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-3 shadow-inner">
            <img 
              className="w-full h-full object-contain" 
              src={companyLogos[companyId]} 
              alt={`${companyNames[companyId]} logo`} 
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-slate-800">{companyNames[companyId]}</h2>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-semibold text-slate-700">{companyQuestions.length} ta masala</span>
              <span>&bull;</span>
              <span className="font-bold text-orange-500">{progressPercent}% bajarildi</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {completedList.length > 0 && (
          <button 
            onClick={handleResetProgress}
            className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-semibold hover:bg-slate-50 hover:text-red-500 hover:border-red-200 transition-colors"
          >
            <RotateCcw size={14} />
            Natijani tozalash
          </button>
        )}
      </div>

      {/* Question List Card */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {shuffledQuestions.map((q, idx) => {
            const isDone = completedList.includes(q.id);
            return (
              <div 
                key={q.id}
                className="flex items-center justify-between p-5 hover:bg-slate-50/50 transition-colors group"
              >
                <div className="flex-1 pr-4">
                  <h3 className="text-base font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {idx + 1}. {q.title}
                  </h3>
                </div>

                <div>
                  {isDone ? (
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-semibold border border-emerald-100">
                      <CheckCircle2 size={16} />
                      Done
                    </span>
                  ) : (
                    <Link
                      to={`/marscode/quiz/${companyId}/${q.id}`}
                      className="inline-flex items-center px-5 py-1.5 bg-blue-50 text-blue-600 rounded-xl text-sm font-bold border border-blue-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md hover:shadow-blue-100 transition-all duration-200"
                    >
                      Start
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default MarsCodeQuestionsPage
