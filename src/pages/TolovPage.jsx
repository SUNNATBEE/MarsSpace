import React, { useState } from "react";

const TELEGRAM_BOT_TOKEN = "8918532286:AAFaDowlLfHDgRdz-UKMzf5IbCzdG4TMJGw";
const TELEGRAM_CHAT_ID = "5498752340";

export default function Payment() {
  const [currentBalance, setCurrentBalance] = useState(28333.28);
  const [debtAmount, setDebtAmount] = useState(698333);
  const [inputAmount, setInputAmount] = useState("698333");

  const handlePresetAmount = (amount) => {
    setInputAmount(amount.toString());
  };

  const handlePayment = () => {
    const enteredAmount = parseFloat(inputAmount);

    if (isNaN(enteredAmount) || enteredAmount <= 0) {
      alert("Iltimos, to'g'ri summa kiriting!");
      return;
    }

    const newBalance = currentBalance + enteredAmount;
    const newDebt = Math.max(0, debtAmount - enteredAmount);

     const message =
      `🚀 <b>Yangi To'lov!</b>\n\n` +
      `👤 <b>O'quvchi:</b> Tohirjonov Bahrom\n` +
      `📍 <b>Filial:</b> YUNUSABAD\n` +
      `💰 <b>To'langan summa:</b> ${enteredAmount.toLocaleString()} so'm\n` +
      `📈 <b>Yangi balans:</b> ${newBalance.toLocaleString()} so'm\n` +
      `📉 <b>Qolgan qarz:</b> ${newDebt.toLocaleString()} so'm`;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("To'lov muvaffaqiyatli amalga oshirildi!");
          setCurrentBalance(newBalance);
          setDebtAmount(newDebt);
          setInputAmount("");
        } else {
          alert(`Telegramga yuborishda xatolik: ${data.description}`);
        }
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        alert("Tarmoq xatoligi yuz berdi.");
      });
  };

  const formatAmount = (val) => {
    const num = parseFloat(val);
    return isNaN(num) ? 0 : num;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-50 rounded-2xl shadow-sm font-sans">
       <div className="flex justify-end mb-6">
        <div className="bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full font-semibold text-sm border border-emerald-200 shadow-sm">
          🟩 {currentBalance.toLocaleString()} so'm
        </div>
      </div>

      <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">To'lov paneli</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col justify-between min-h-[320px]">
          <div>
            <h3 className="text-lg font-semibold text-slate-700 pb-3 mb-5 border-b-2 border-slate-100">
              To'lov ma'lumotlari
            </h3>
            
            <div className="flex justify-between items-center text-sm text-slate-600 mb-4">
              <span>O'quvchi:</span>
              <strong className="text-slate-800 font-semibold">Tohirjonov Bahrom</strong>
            </div>

            <div className="flex justify-between items-center text-sm text-slate-600 mb-4">
              <span>Filial:</span>
              <strong className="text-slate-800 font-semibold">YUNUSABAD</strong>
            </div>

            <div className="flex justify-between items-center text-sm text-slate-600 mb-4">
              <span>Qarzdorlik</span>
              <span className={`px-3 py-1.5 rounded-lg font-semibold ${
                debtAmount > 0 ? "text-red-600 bg-red-50" : "text-emerald-600 bg-emerald-50"
              }`}>
                {debtAmount > 0 ? `${debtAmount.toLocaleString()} so'm` : "Qarz yo'q"}
              </span>
            </div>
          </div>

          <div>
            <hr className="border-t border-dashed border-slate-200 my-5" />
            <div className="flex justify-between items-center font-bold text-2xl text-slate-900">
              <span>To'lov uchun:</span>
              <span className="text-slate-900">
                {formatAmount(inputAmount).toLocaleString()} so'm
              </span>
            </div>
          </div>
        </div>

         <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex flex-col justify-between min-h-[320px]">
          <h3 className="text-lg font-semibold text-slate-700 pb-3 mb-5 border-b-2 border-slate-100">
            Summani kiriting
          </h3>

          <div className="relative flex items-center mb-5">
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              placeholder="0"
              className="w-full pl-4 pr-16 py-3 text-lg font-semibold border-2 border-slate-200 rounded-xl outline-none transition-colors focus:border-blue-500"
            />
            <span className="absolute right-4 text-slate-400 font-semibold text-sm">so'm</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <button
              onClick={() => handlePresetAmount(30000)}
              className="bg-slate-50 border border-slate-200 rounded-lg py-2.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-200 active:scale-95"
            >
              30,000 so'm
            </button>
            <button
              onClick={() => handlePresetAmount(200000)}
              className="bg-slate-50 border border-slate-200 rounded-lg py-2.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-200 active:scale-95"
            >
              200,000 so'm
            </button>
            <button
              onClick={() => handlePresetAmount(860000)}
              className="bg-slate-50 border border-slate-200 rounded-lg py-2.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-200 active:scale-95"
            >
              860,000 so'm
            </button>
            <button
              onClick={() => handlePresetAmount(1090000)}
              className="bg-slate-50 border border-slate-200 rounded-lg py-2.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-200 active:scale-95"
            >
              1,090,000 so'm
            </button>
            <button
              onClick={() => handlePresetAmount(110000)}
              className="col-span-2 bg-slate-50 border border-slate-200 rounded-lg py-2.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-200 active:scale-95"
            >
              110,000 so'm
            </button>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-[0.99] text-white font-semibold py-3 rounded-2xl shadow-lg shadow-orange-500/20 transition-all flex justify-center items-center gap-2 text-sm"
          >
            To'lov qilish {formatAmount(inputAmount).toLocaleString()} so'm ➔
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            To'lov xavfsiz kanallar orqali amalga oshiriladi
          </p>
        </div>
      </div>
    </div>
  );
}