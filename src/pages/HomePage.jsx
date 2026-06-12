import { useState } from "react";
import { Link } from 'react-router-dom';
import map from "../assets/marsmap.png";
import level from "../assets/level.png";
import coin from "../assets/coin.png"; 
import video from "../assets/video.webp"; 
import typing from "../assets/typing.webp"; 
import unity from "../assets/unity.webp"; 

function MarsSpace() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Kichik karta */}
      <div className="relative rounded-xl overflow-hidden shadow-md max-w-xl mx-auto md:ml-[160px]">
        <img
          src={map}
          alt="Map"
          className="w-full h-[200px] object-cover"
        />

        <div className="absolute top-3 left-3 bg-white/40 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-2 w-[240px] shadow-md">
          <div className="relative flex-shrink-0">
            <img
              src={level}
              alt="Level Icon"
              className="w-9 h-9"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[8px] px-1 rounded font-bold">
              LVL
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              Darajangiz
            </h3>
            <div className="mt-1 w-full h-2 bg-white/60 rounded-full overflow-hidden">
              <div className="h-2 w-[50%] bg-sky-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="absolute right-4 bottom-4 bg-white/80 px-5 py-3 rounded-lg shadow font-medium hover:bg-white transition"
        >
          Batafsil
        </button>
      </div>

      <div className="w-full max-w-6xl bg-white p-6 rounded-2xl shadow-sm font-sans text-gray-800 mt-6 mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-6 gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-100"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-sky-500"
                  strokeWidth="3"
                  strokeDasharray="63, 100"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-lg font-bold text-sky-500">63%</span>
              <span className="absolute -top-1 -right-1 bg-amber-400 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow">⭐️</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                <span className="text-gray-400 font-medium">[New]</span> Front-End
              </h1>
              <p className="text-sm text-gray-400 mt-0.5">nF-2803</p>
            </div>
          </div>
          <div className="flex items-center gap-8 self-end sm:self-center">
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">80</span>
              <span className="text-xs text-gray-400">bajarildi</span>
            </div>
            <div className="border-l h-8 border-gray-200" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">48</span>
              <span className="text-xs text-gray-400">dars</span>
            </div>
            <button className="flex items-center gap-1 text-sky-500 font-medium text-lg hover:text-sky-600 transition pl-4">
              Davom etish <span className="text-xl font-light">&gt;</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 my-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              className={`px-4 py-2 text-sm rounded-lg transition font-medium ${
                num === 3
                  ? "bg-sky-100 text-sky-600"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              module {num} <span className="text-xs opacity-60">12</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 mt-4 border-b pb-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Анимация
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Background video
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              AOS Animation Scroll
            </div>
            <div className="flex items-center justify-between p-2 pl-3 bg-sky-50 border border-sky-200 rounded-xl">
              <div className="flex items-center gap-3 text-sm font-semibold text-sky-600 truncate">
                <span className="bg-sky-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">▶️</span>
                <span className="truncate">Responsive и Adaptive (...</span>
              </div>
              <button className="bg-sky-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-sky-600 transition flex-shrink-0 ml-2">
                Davom etish
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Box Shadow и Text shadow
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Dropdown и Tag Select (options)
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Responsive и Adaptive
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Responsive и Adaptive (завершение ...
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Position
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Экзамен
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
              Основы Responsive и Adaptive
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
              <span className="bg-gray-100 text-gray-400 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">12</span>
              Экзамен
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          
         <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
  <h3 className="text-lg font-bold text-slate-800 mb-4">Qo'shimcha dars</h3>
  <div className="flex justify-between items-center gap-2">
    {[
      { day: "Dush", active: false },
      { day: "Sesh", active: false },
      { day: "Chor", active: true }, 
      { day: "Pay", active: false },
      { day: "Jum", active: false },
      { day: "Shan", active: false },
      { day: "yak", active: false },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center gap-2 flex-1">
        <span className={`text-xs sm:text-sm font-semibold ${item.active ? "text-sky-500" : "text-slate-600"}`}>
          {item.day}
        </span>
        <button 
          className={`w-full max-w-[44px] aspect-square hover:bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center font-light text-xl transition shadow-sm}`}
        >
          +
        </button>
      </div>
    ))}
  </div>
</div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-5">
            <div className="w-[64px] h-[64px] bg-gradient-to-tr from-cyan-400 to-sky-400 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
              <img src={video} alt="Video" className="w-7 h-7 object-contain" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="text-xl font-bold text-slate-400/90 leading-tight tracking-tight">
                Online kurs boshlanmagan
              </h4>
              <a 
                className="text-blue-500 font-semibold hover:text-blue-600 transition text-sm flex items-center gap-1 mt-1" 
                href="http://localhost:5173/eduverse"
              >
                Boshlash <span className="text-xs font-bold">&gt;</span>
              </a>
            </div>
          </div>

          <Link
            to="/typing"
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-5 hover:shadow-md transition text-left group"
          >
            <div className="w-[64px] h-[64px] rounded-full overflow-hidden flex-shrink-0 bg-purple-100 flex items-center justify-center">
              <img className="w-full h-full object-cover" src={typing} alt="Typing" />
            </div>

            <div className="flex flex-col gap-0.5">
              <h4 className="text-xl font-bold text-gray-800 tracking-tight">
                Typing
              </h4>
              <p className="text-gray-500 text-sm">
                Typing tezligini aniqlaymiz
              </p>
              <div className="text-blue-500 font-semibold text-sm flex items-center gap-1 mt-1 group-hover:text-blue-600 transition">
                <span>Play</span>
                <span className="text-xs font-bold opacity-80 group-hover:translate-x-0.5 transition-transform">&gt;</span>
              </div>
            </div>
          </Link>

          <Link
            to="/unity"
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-5 hover:shadow-md transition text-left group"
          >
            <div className="w-[64px] h-[64px] rounded-full bg-[#ff3b57] flex items-center justify-center flex-shrink-0 shadow-md">
              <img className="w-10 h-10 object-contain" src={unity} alt="Unity" />
            </div>

            <div className="flex flex-col gap-0.5">
              <h4 className="text-xl font-bold text-gray-800 tracking-tight">
               NF-2803
              </h4>
              <p className="text-gray-500 text-sm">
                8-dars, 8-modul
              </p>
              <div className="text-blue-500 font-semibold text-sm flex items-center gap-1 mt-1 group-hover:text-blue-600 transition">
                <span>Davom etish</span>
                <span className="text-xs font-bold opacity-80 group-hover:translate-x-0.5 transition-transform">&gt;</span>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-[95%] max-w-7xl rounded-xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-3xl text-gray-500 hover:text-black z-10"
            >
              &times;
            </button>

            <div className="grid lg:grid-cols-[3fr_1fr] gap-6 mt-4">
              <div className="relative">
                <img
                  src={map}
                  alt="Detailed Map"
                  className="w-full rounded-xl object-cover"
                />
              </div>

              <div className="border rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={level}
                      alt="Level"
                      className="w-14 h-14"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold">Darajangiz</h3>
                      <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                        <div className="bg-sky-500 h-3 rounded-full w-[40%]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 space-y-6">
                    <div>
                      <h4 className="font-medium">⚪️ 1 ta WebCourse videosini ko'ring</h4>
                      <p className="text-gray-500 text-sm">1 ta video ko‘rishingiz kerak</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600">✅ 20 ta coin yig'ing</h4>
                      <p className="text-gray-500 text-sm">
                        <img src={coin} alt="coin" className="w-4 h-4 inline mr-1" /> 
                        20 ta coin qo'lga kiriting
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex justify-center">
                  <button className="bg-sky-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-sky-600 transition w-full sm:w-auto">
                    Keyingi darajaga o'ting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// =====================================================================
// ASOSIY SAHIFA
// =====================================================================
export default function HomePage() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="mb-8">
        <MarsSpace />
      </div>
    </div>
  );
}