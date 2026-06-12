import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import marscod from '../assets/marscod.webp'
import facebook from '../assets/facebook.png'
import google from '../assets/google.png'
import netflix from '../assets/netflix.jpeg'
import amazon from '../assets/amazon.webp'
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

const MarsCodePage = () => {
  const [progress, setProgress] = useState({
    amazon: 0,
    google: 0,
    netflix: 0,
    facebook: 0
  });

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('marscode_completed');
    if (saved) {
      try {
        const completed = JSON.parse(saved);
        const newProgress = {};
        Object.keys(tests).forEach(company => {
          const totalQuestions = tests[company]?.length || 10;
          const completedCount = completed[company]?.length || 0;
          newProgress[company] = Math.round((completedCount / totalQuestions) * 100);
        });
        setProgress(newProgress);
      } catch (e) {
        console.error("Error reading localStorage:", e);
      }
    }
  }, []);

  const companies = Object.keys(tests);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Title & Breadcrumbs */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">MarsCode</h1>
        <p className="mt-1 text-slate-500">Kompaniyalar bo'yicha saralash testlari va masalalari</p>
      </div>

      {/* Hero Banner */}
      <div 
        style={{ backgroundImage: `url(${marscod})` }} 
        className="relative overflow-hidden rounded-3xl bg-cover bg-center h-[280px] shadow-lg shadow-slate-200"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent flex flex-col justify-center p-8 md:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 mb-4 border border-orange-500/30 w-fit">
            🚀 HR Tayyorgarlik Platformasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white max-w-xl leading-tight">
            TOP KOMPANIYALARGA ISHGA KIRING
          </h2>
          <p className="mt-2 text-slate-300 max-w-md text-sm md:text-base leading-relaxed">
            Dunyoning nufuzli IT kompaniyalari ishga qabul qilishda shu kabi kodlash masalalari va texnik testlardan foydalanadi.
          </p>
        </div>
      </div>

      {/* Grid of Companies */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800">TOP Kompaniyalar</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((companyId) => {
            const compProgress = progress[companyId] || 0;
            const isCompleted = compProgress === 100;
            
            return (
              <Link 
                key={companyId}
                to={`/marscode/questions/${companyId}`}
                className={`group relative flex items-center justify-between bg-white rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isCompleted 
                    ? 'border-amber-400 bg-amber-50/10 shadow-md shadow-amber-100/50' 
                    : 'border-slate-100 hover:border-orange-200 hover:shadow-slate-100'
                }`}
              >
                {/* Crown badge */}
                <div className="absolute top-4 right-4 text-xl">
                  {isCompleted ? (
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 font-bold text-sm shadow-sm">
                      🏆
                    </span>
                  ) : (
                    <span className="text-yellow-400 drop-shadow-sm group-hover:scale-110 transition-transform">👑</span>
                  )}
                </div>

                <div className="flex items-center gap-4 w-full">
                  {/* Logo Container */}
                  <div className="flex-shrink-0 w-20 h-20 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <img 
                      className="w-full h-full object-contain" 
                      src={companyLogos[companyId]} 
                      alt={`${companyNames[companyId]} logo`} 
                    />
                  </div>

                  {/* Text & Progress */}
                  <div className="flex-1 space-y-2 pr-6">
                    <h4 className="text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors">
                      {companyNames[companyId]}
                    </h4>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-500">
                        <span>{tests[companyId]?.length || 10} ta masala</span>
                        <span className={isCompleted ? 'text-amber-600 font-bold' : 'text-orange-500'}>
                          {compProgress}% bajarildi
                        </span>
                      </div>
                      
                      {/* Custom Progress Bar */}
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          style={{ width: `${compProgress}%` }}
                          className={`h-full rounded-full transition-all duration-500 ${
                            isCompleted 
                              ? 'bg-gradient-to-r from-amber-400 to-amber-500 shadow shadow-amber-300' 
                              : 'bg-gradient-to-r from-orange-500 to-amber-500'
                          }`}
                        ></div>
                      </div>
                    </div>

                    <span 
                      className="inline-flex items-center gap-1 text-sm font-bold text-orange-500 hover:text-orange-600 group-hover:translate-x-1 transition-all"
                    >
                      Kirish <span className="text-xs">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default MarsCodePage
