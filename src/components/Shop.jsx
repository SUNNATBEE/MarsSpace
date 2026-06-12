import React, { useState, useEffect } from 'react';


const passwordDatabase = {
  "51690": "Asadbek Olimov",
  "25784": "Farrux Toshpulatov",
  "10678": "Madina Karimova",
  "39786": "Jasur Rahimov",
  "67342": "Zilola Axmedova"
};


const initialHeroProducts = [
  { id: 1, name: "BG (Night)", price: 29, image: "https://lab.marsit.uz/media/hero_details/None/ChatGPT_Image_Jul_21_2025_03_54_50_PM.png", status: "buy" },
  { id: 2, name: "Hat", price: 39, image: "https://lab.marsit.uz/media/hero_details/None/ItemHat.png", status: "buy" },
  { id: 3, name: "Headset", price: 29, image: "https://lab.marsit.uz/media/hero_details/None/ItemHeadset.png", status: "buy" },
  { id: 4, name: "Crown", price: 149, image: "https://lab.marsit.uz/media/hero_details/None/ItemCrown.png", status: "buy", hasLvl: true },
  { id: 5, name: "Box", price: 39, image: "https://lab.marsit.uz/media/hero_details/None/ItemBox.png", status: "buy" },
  { id: 6, name: "Batman", price: 99, image: "https://lab.marsit.uz/media/hero_details/None/ItemBatman.png", status: "buy" },
  { id: 7, name: "Anonymous", price: 99, image: "https://lab.marsit.uz/media/hero_details/None/ItemAnonymous.png", status: "buy" },
  { id: 8, name: "IronMan", price: 129, image: "https://lab.marsit.uz/media/hero_details/None/ItemIronMan_oJbtGAC.png", status: "buy" },
  { id: 9, name: "SpiderMan", price: 99, image: "https://lab.marsit.uz/media/hero_details/None/ItemSpiderMan.png", status: "buy" },
  { id: 10, name: "Sunglasses", price: 19, image: "https://lab.marsit.uz/media/hero_details/None/ItemSunglasses.png", status: "owned" },
  { id: 11, name: "VR", price: 59, image: "https://lab.marsit.uz/media/hero_details/None/ItemVR.png", status: "buy" },
  { id: 12, name: "Barcelona", price: 79, image: "https://lab.marsit.uz/media/hero_details/None/ItemBarcelona.png", status: "buy" },
  { id: 13, name: "BMW M-Series", price: 89, image: "https://lab.marsit.uz/media/hero_details/None/ItemBMWM.png", status: "buy" },
  { id: 14, name: "Mercedes-Benz", price: 99, image: "https://lab.marsit.uz/media/hero_details/None/ItemMercedesBenz.png", status: "buy" },
  { id: 15, name: "PSG Jersey", price: 49, image: "https://lab.marsit.uz/media/hero_details/None/ItemPSG_DsCBeNe.png", status: "buy" },
  { id: 16, name: "RealMadrid (Green)", price: 89, image: "https://lab.marsit.uz/media/hero_details/None/ItemRealMadrid.png", status: "buy" },
  { id: 17, name: "RealMadrid (White)", price: 99, image: "https://lab.marsit.uz/media/hero_details/None/ItemRealMadridWhite.png", status: "buy" },
  { id: 18, name: "Black Jeans", price: 29, image: "https://lab.marsit.uz/media/hero_details/None/ItemBlackPants.png", status: "buy" },
  { id: 19, name: "Shorts", price: 19, image: "https://lab.marsit.uz/media/hero_details/None/ItemBlackShorts.png", status: "buy" },
];


const initialSpaceProducts = [
  { id: 1, name: "Mars Pen", price: 49, left: "5 ta qoldi", image: "https://lab.marsit.uz/media/shop/Mars pen/sensor_ruchka_mars-removebg-preview.png" },
  { id: 2, name: "Keyboard Sticker", price: 49, left: "8 ta qoldi", image: "https://lab.marsit.uz/media/shop/Keyboard sticker/Shop_keyboard_sticker-removebg-preview.png" },
  { id: 3, name: "Strobar", price: 49, left: "82 ta qoldi", image: "https://lab.marsit.uz/media/shop/Strobar/strobar_compressed.png" },
  { id: 4, name: "Notepad", price: 149, left: "7 ta qoldi", image: "https://lab.marsit.uz/media/shop/Notepad/mars_it_schoool-removebg-preview.png" },
  { id: 5, name: "Mars Rug", price: 149, left: "2 ta qoldi", image: "https://lab.marsit.uz/media/shop/Mars rug/mars_kovrik_-removebg-preview.png" },
  { id: 6, name: "Keychain", price: 149, left: "10 ta qoldi", image: "https://lab.marsit.uz/media/shop/Keychain/brelok_mars-removebg-preview.png" },
  { id: 7, name: "Phone Stand", price: 199, left: "2 ta qoldi", image: "https://lab.marsit.uz/media/shop/Phone Stand/mars_telefon_stoyka-removebg-preview.png" },
  { id: 8, name: "Mug", price: 199, left: "3 ta qoldi", image: "https://lab.marsit.uz/media/shop/Mug/mars_bakal-removebg-preview.png" },
  { id: 9, name: "Branded Cap", price: 299, left: "11 ta qoldi", image: "https://lab.marsit.uz/media/shop/Branded Cap/kepka_mars-removebg-preview.png" },
  { id: 10, name: "USB Flash Drive", price: 299, left: "2 ta qoldi", image: "https://lab.marsit.uz/media/shop/USB flash drive/fleshka_mars-removebg-preview.png" },
  { id: 11, name: "Wireless Mouse", price: 299, left: "5 ta qoldi", image: "https://lab.marsit.uz/media/shop/Wireless mouse/wireless_mouse_compressed.png" },
  { id: 12, name: "Branded Thermos", price: 349, left: "3 ta qoldi", image: "https://lab.marsit.uz/media/shop/Branded Thermos/termos_mars-removebg-preview.png" },
  { id: 13, name: "Mouse", price: 349, left: "14 ta qoldi", image: "https://lab.marsit.uz/media/shop/Mouse/mouse_compressed.png" },
  { id: 14, name: "Keyboard", price: 399, left: "7 ta qoldi", image: "https://lab.marsit.uz/media/shop/Keyboard/keyboard_compressed.png" },
  { id: 15, name: "MARS Futbolka", price: 499, left: "1 ta qoldi", image: "https://lab.marsit.uz/media/shop/MARS Futbolka/hf_20260223_083624_5bcebba8_bb5b_4bdf_a53f_16f35244f840_Photoroom.png" },
  { id: 16, name: "Keyboard&Mouse", price: 549, left: "3 ta qoldi", image: "https://lab.marsit.uz/media/shop/Keyboard&mouse/keyboard__mouse_compressed.png" },
  { id: 17, name: "AirPods Max", price: 599, left: "8 ta qoldi", image: "https://lab.marsit.uz/media/shop/AirPods Max/Shop_AirPodsmax-removebg-preview.png" },
  { id: 18, name: "Wireless Keyboard & Mouse", price: 599, left: "14 ta qoldi", image: "https://lab.marsit.uz/media/shop/Wireless keyboard & mouse/Shop_keyboardmouse-removebg-preview.png" },
  { id: 19, name: "Branded Hoodie", price: 699, left: "0 ta qoldi", image: "https://lab.marsit.uz/media/shop/Branded Hoodie/1be3f684-6bbb-4340-8a07-c59581d19c5d-0.png" },
  { id: 20, name: "Branded Powerbank", price: 699, left: "0 ta qoldi", image: "https://lab.marsit.uz/media/shop/Branded Powerbank/branded_powerband.png" },
  { id: 21, name: "Mars Backpack", price: 799, left: "oldindan zakaz", image: "https://lab.marsit.uz/media/shop/Mars Backpack/backpack.png", isPreorder: true },
  { id: 22, name: "AirPods", price: 799, left: "0 ta qoldi", image: "https://lab.marsit.uz/media/shop/AirPods/Shop_Airpods-removebg-preview.png" },
  { id: 23, name: "Smartwatch", price: 949, left: "6 ta qoldi", image: "https://lab.marsit.uz/media/shop/Smart watch/Shop_smart_watch-removebg-preview.png" },
  { id: 24, name: "Yandex Station", price: 2490, left: "0 ta qoldi", image: "https://lab.marsit.uz/media/shop/Yandex Station/Shop_Yandex_station-removebg-preview.png" },
  { id: 25, name: "Smartphone", price: 5490, left: "oldindan zakaz", image: "https://lab.marsit.uz/media/shop/Smartphone/Shop_phone-removebg-preview.png", isPreorder: true },
  { id: 26, name: "Planshet Samsung", price: 6990, left: "oldindan zakaz", image: "https://lab.marsit.uz/media/shop/Planshet Samsung/Shop_planshet-removebg-preview.png", isPreorder: true },
];

const initialHistory = [
  { id: "hist_1", name: "Strobar", date: "10 Sep 2025 | 15:15", code: "107S5", status: "Qabul qilindi", image: "https://lab.marsit.uz/media/shop/Strobar/strobar_compressed.png" },
  { id: "hist_2", name: "Strobar", date: "15 Oct 2025 | 15:21", code: "296A5", status: "Qabul qilindi", image: "https://lab.marsit.uz/media/shop/Strobar/strobar_compressed.png" },
  { id: "hist_3", name: "AirPods Max", date: "07 Nov 2025 | 14:30", code: "7B19C", status: "Qabul qilindi", image: "https://lab.marsit.uz/media/shop/AirPods Max/Shop_AirPodsmax-removebg-preview.png" },
  { id: "hist_4", name: "Strobar", date: "09 Feb 2026 | 13:42", code: "1786Q", status: "Qabul qilindi", image: "https://lab.marsit.uz/media/shop/Strobar/strobar_compressed.png" },
  { id: "hist_5", name: "Branded Powerbank", date: "24 Mar 2026 | 15:09", code: "43H85", status: "Qabul qilindi", image: "https://lab.marsit.uz/media/shop/Branded Powerbank/branded_powerband.png" },
  { id: "hist_6", name: "Body (Default)", date: "15 Jul 2025 | 05:17", code: "—", status: "Qabul qilindi", image: "https://lab.marsit.uz/media/hero_details/2/BodyImage_CX8XwZm.png" },
  { id: "hist_7", name: "Hero Pants(Default)", date: "15 Jul 2025 | 05:17", code: "—", status: "Qabul qilindi", image: "https://lab.marsit.uz/media/hero_details/3/ItemDefaultPants.png" },
  { id: "hist_8", name: "Hero(Default)", date: "15 Jul 2025 | 05:17", code: "—", status: "Qabul qilindi", image: "https://img.icons8.com/isometric/512/anonymous-mask.png" },
];

function Shop() {
  const [activeTab, setActiveTab] = useState('hero'); 

  const [heroProducts, setHeroProducts] = useState(() => {
    const saved = localStorage.getItem('heroProducts');
    return saved ? JSON.parse(saved) : initialHeroProducts;
  });

  const [spaceProducts, setSpaceProducts] = useState(() => {
    const saved = localStorage.getItem('spaceProducts');
    if (saved) {
      const parsedSaved = JSON.parse(saved);

      const isDataSame = parsedSaved.length === initialSpaceProducts.length && 
                         parsedSaved.every((prod, index) => prod.left === initialSpaceProducts[index].left);

      if (isDataSame) {
        return parsedSaved;
      }
    }
    return initialSpaceProducts;
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('purchaseHistory');
    return saved ? JSON.parse(saved) : initialHistory;
  });

  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [password, setPassword] = useState(''); 
  const [errorMsg, setErrorMsg] = useState(''); 


  useEffect(() => {
    localStorage.setItem('heroProducts', JSON.stringify(heroProducts));
  }, [heroProducts]);

  useEffect(() => {
    localStorage.setItem('spaceProducts', JSON.stringify(spaceProducts));
  }, [spaceProducts]);

  useEffect(() => {
    localStorage.setItem('purchaseHistory', JSON.stringify(history));
  }, [history]);


  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setPassword('');
    setErrorMsg('');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;

    const matchedUser = passwordDatabase[password.trim()];

    if (!matchedUser) {
      setErrorMsg('❌ Parol noto\'g\'ri! Qaytadan urinib ko\'ring.');
      return;
    }

    const randomCode = Math.random().toString(36).substring(2, 7).toUpperCase();
    const currentDate = new Date().toLocaleString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    }).replace(/,/g, ' |');

    const messageText = `🔔 YANGI XARID!\n\n👤 Foydalanuvchi: ${matchedUser}\n📦 Mahsulot: ${selectedProduct.name}\n💰 Narxi: ${selectedProduct.price} 🪙\n🆔 Kod: ${randomCode}\n\n${matchedUser} shu narsani sotvoldi!`;
    
    const inlineKeyboard = {
      inline_keyboard: [[{ text: "✅ Qabul qilindi", callback_data: `accept_${randomCode}` }]]
    };

    const TELEGRAM_TOKEN = "8744484907:AAFvW4MyJUg1fE8m9tIajbaFmImrW4F3-8s"; 
    const CHAT_ID = "7831570637"; 

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: messageText,
          reply_markup: inlineKeyboard
        }),
      });

      const resData = await response.json();

      if (resData.ok) {
        if (activeTab === 'space') {
          setSpaceProducts(prevProducts => 
            prevProducts.map(p => {
              if (p.id === selectedProduct.id && p.left.includes("ta qoldi")) {
                const currentCount = parseInt(p.left);
                if (currentCount > 0) {
                  return { ...p, left: `${currentCount - 1} ta qoldi` };
                }
              }
              return p;
            })
          );
        }

        if (activeTab === 'hero') {
          setHeroProducts(prevProducts =>
            prevProducts.map(p => p.id === selectedProduct.id ? { ...p, status: 'owned' } : p)
          );
        }

        const uniquePurchaseId = Date.now().toString();

        const completedPurchase = {
          id: uniquePurchaseId, 
          name: selectedProduct.name,
          date: currentDate,
          code: randomCode,
          status: "Qabul qilinmadi", 
          image: selectedProduct.image,
        };

        setHistory(prevHistory => [completedPurchase, ...prevHistory]); 
        setSelectedProduct(null); 
        setErrorMsg('');
        
        setActiveTab('history');

        setTimeout(() => {
          setHistory(prevHistory => 
            prevHistory.map(item => 
              item.id === uniquePurchaseId ? { ...item, status: "Qabul qilindi" } : item
            )
          );
        }, 3000); 

      } else {
        alert(`Telegram xatoligi: ${resData.description}`);
      }

    } catch (error) {
      console.error("Xatolik:", error);
      alert("Internet aloqasini tekshiring!");
    }
  };

  const handleResetStorage = () => {
    if (window.confirm("Barcha xaridlarni o'chirib yuborishni xohlaysizmi?")) {
      localStorage.clear();
      setHeroProducts(initialHeroProducts);
      setSpaceProducts(initialSpaceProducts);
      setHistory(initialHistory);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-transparent select-none font-sans text-[#2D3748] relative">
      

      <div className="flex justify-between items-center mb-6">
        <div className="flex bg-[#EBF1F5] p-1 rounded-2xl border border-gray-100 shadow-inner">
          <button
            onClick={() => setActiveTab('hero')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
              activeTab === 'hero' ? 'bg-[#E35E38] text-white shadow-md shadow-orange-500/20' : 'text-[#8EA1B4] hover:text-[#5B7083]'
            }`}
          >
            👕 HERO SHOP
          </button>
          
          <button
            onClick={() => setActiveTab('space')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
              activeTab === 'space' ? 'bg-[#E35E38] text-white shadow-md shadow-orange-500/20' : 'text-[#8EA1B4] hover:text-[#5B7083]'
            }`}
          >
            🎧 SPACE SHOP
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleResetStorage}
            className="text-[11px] text-gray-400 hover:text-red-500 transition-colors"
            title="Xotirani tozalash"
          >
            ⚙️ Tozalash
          </button>

          {activeTab !== 'history' ? (
            <button 
              onClick={() => setActiveTab('history')}
              className="text-xs font-bold text-[#D64E3E] hover:text-red-600 transition-colors flex items-center gap-1"
            >
              Xaridlar tarixi <span className="text-sm font-light">›</span>
            </button>
          ) : (
            <button 
              onClick={() => setActiveTab('hero')}
              className="text-xs font-bold text-[#4A90E2] hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              ‹ Do'konga qaytish
            </button>
          )}
        </div>
      </div>

      {activeTab === 'hero' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {heroProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between text-left hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 min-h-[260px] relative"
            >
              <div className="absolute top-3 right-3 text-sm opacity-40">👑</div>

              <div className="h-28 w-full flex items-center justify-center my-2">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
              </div>

              <div className="w-full border-t border-dashed border-gray-100 pt-4 mt-auto">
                <h4 className="font-bold text-[#2D3748] text-sm mb-1 line-clamp-1">{product.name}</h4>
                <div className="flex items-center gap-1 text-xs mb-4">
                  <span className="font-bold text-[#4A5568]">{product.price}</span>
                  <span className="text-[#FFC107] text-sm">🪙</span>
                  {product.hasLvl && (
                    <span className="ml-2 bg-blue-500 text-white text-[10px] px-1 rounded font-black scale-90">LVL</span>
                  )}
                </div>

                {product.status === 'owned' ? (
                  <div className="w-full bg-green-50 text-[#48BB78] font-bold text-xs py-2 rounded-xl text-center select-none">Sotib olindi</div>
                ) : (
                  <button 
                    onClick={() => handleBuyClick(product)}
                    className="w-full text-[#4A90E2] hover:text-[#2B6CB0] font-bold text-xs py-2 rounded-xl border border-transparent hover:bg-blue-50/50 transition-all text-center flex items-center justify-center gap-0.5"
                  >
                    Sotib olish <span className="text-sm font-normal">›</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

     -
      {activeTab === 'space' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spaceProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between text-left hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 min-h-[290px]"
            >
              <div className="h-28 w-full flex items-center justify-center my-2">
                <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
              </div>

              <div className="w-full border-t border-dashed border-gray-100 pt-4 mt-auto">
                <h4 className="font-bold text-[#2D3748] text-sm mb-1 line-clamp-1">{product.name}</h4>
                <div className="flex items-center gap-1 text-xs mb-4">
                  <span className="font-bold text-[#4A5568]">{product.price}</span>
                  <span className="text-[#FFC107] text-sm">🪙</span>
                  <span className="text-gray-300 mx-1">|</span>
                  <span className={`${product.isPreorder ? 'text-[#3182CE] font-medium' : 'text-[#A0AEC0]'}`}>
                    {product.left}
                  </span>
                </div>

                <button 
                  onClick={() => handleBuyClick(product)}
                  className="w-full text-[#4A90E2] hover:text-[#2B6CB0] font-bold text-xs py-2 rounded-xl border border-transparent hover:bg-blue-50/50 transition-all text-center flex items-center justify-center gap-0.5"
                >
                  Sotib olish <span className="text-sm font-normal">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}


      {activeTab === 'history' && (
        <div>
          <h2 className="text-xl font-bold mb-6 text-[#2D3748]">Haridlar tarixi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {history.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between text-left hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 min-h-[260px]"
              >
                <div className="h-28 w-full flex items-center justify-center my-2">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>

                <div className="w-full border-t border-dashed border-gray-100 pt-4 mt-auto">
                  <h4 className="font-bold text-[#2D3748] text-sm mb-1 line-clamp-1">{item.name}</h4>
                  <p className="text-[11px] text-[#A0AEC0] mb-3 font-medium">{item.date}</p>

                  <div className="flex justify-between items-center mt-2 pt-1">
                    <span className="bg-[#F7FAFC] border border-gray-100 text-[#718096] text-[10px] px-2.5 py-1 rounded-lg font-mono font-bold">
                      {item.code}
                    </span>
                    
                    <span className={`text-xs font-bold flex items-center gap-1 ${
                      item.status === 'Qabul qilindi' ? 'text-[#48BB78]' : 'text-[#E53E3E]'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full inline-block ${
                        item.status === 'Qabul qilindi' ? 'bg-[#48BB78]' : 'bg-[#E53E3E]'
                      }`}></span>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm border border-gray-100 shadow-2xl scale-95 transition-all">
            <h3 className="font-bold text-lg mb-2 text-[#2D3748]">Xaridni tasdiqlash</h3>
            <p className="text-xs text-gray-500 mb-4">
              <span className="font-semibold text-orange-500">{selectedProduct.name}</span> uchun maxfiy parolingizni kiriting:
            </p>
            <form onSubmit={handlePasswordSubmit}>
              <input 
                type="password" 
                required
                placeholder="Parolingizni kiriting" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-2 focus:outline-none focus:border-orange-500 bg-gray-50/50 font-mono text-center tracking-widest"
              />
              
              {errorMsg && (
                <p className="text-[11px] text-red-500 font-semibold mb-3 text-center">{errorMsg}</p>
              )}

              <div className="flex gap-2 mt-2">
                <button 
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="w-1/2 bg-gray-100 text-gray-600 font-bold text-xs py-3 rounded-xl hover:bg-gray-200 transition-all"
                >
                  Bekor qilish
                </button>
                <button 
                  type="submit"
                  className="w-1/2 bg-[#E35E38] text-white font-bold text-xs py-3 rounded-xl hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition-all"
                >
                  Tasdiqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Shop;