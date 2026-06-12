import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// =====================================================================
//  TYPING SAHIFASI (MARS SPACE TYPING TRAINER)
//  A high-fidelity Monkeytype & Mars Typing clone in React + Tailwind
// =====================================================================

// Leaderboard Initial Data
const INITIAL_LEADERBOARD = [
  { name: "Sabirov Ibrohim", tag: "Yetakchi", wpm: 125, rank: 1, avatar: "SI", color: "from-yellow-400 to-amber-500" },
  { name: "G'ayratov Otabek", tag: "TOP 2-O'rin", wpm: 124, rank: 2, avatar: "GO", color: "from-slate-300 to-slate-400" },
  { name: "Nurmuhamedov Usmon", tag: "TOP 3-O'rin", wpm: 124, rank: 3, avatar: "NU", color: "from-amber-600 to-amber-700" },
  { name: "Boriboyev Saidazim", tag: "TOP 4-O'rin", wpm: 120, rank: 4, avatar: "BS", color: "from-blue-400 to-indigo-500" },
  { name: "Boxodirov Abdubosit", tag: "TOP 5-O'rin", wpm: 118, rank: 5, avatar: "BA", color: "from-purple-400 to-pink-500" },
  { name: "Umarov Abdurahmon", tag: "TOP 6-O'rin", wpm: 114, rank: 6, avatar: "UA", color: "from-teal-400 to-emerald-500" },
  { name: "Xasanov Abdulaziz", tag: "TOP 7-O'rin", wpm: 108, rank: 7, avatar: "XA", color: "from-orange-400 to-red-500" },
  { name: "Habibullayev A'zamjon", tag: "TOP 8-O'rin", wpm: 108, rank: 8, avatar: "HA", color: "from-cyan-400 to-blue-500" },
  { name: "Farhodov Biloliddin", tag: "TOP 9-O'rin", wpm: 107, rank: 9, avatar: "FB", color: "from-rose-400 to-red-500" },
  { name: "Akbar Maksudov", tag: "TOP 10-O'rin", wpm: 107, rank: 10, avatar: "AM", color: "from-indigo-400 to-purple-500" }
]

// Word list dictionary
const DICTIONARY = {
  UZ: {
    easy: [
      "bola", "til", "yurak", "gul", "non", "suv", "aka", "uka", "opa", "tog'", "yol", "kun", "dost", "daryo", "ilm", "kitob",
      "ona", "ota", "bog'", "tosh", "tuy", "tuz", "muz", "qor", "yer", "osmon", "quyosh", "oy", "nur", "soya", "uy", "xona", "pol"
    ],
    medium: [
      "maktab", "ustoz", "daftar", "qalam", "vatan", "bahor", "yoshlik", "tinchlik", "ozodlik", "farzand", "muallim", "talaba",
      "yulduz", "daraxt", "ko'prik", "chiroq", "telefon", "ruchka", "ko'zoynak", "oshqozon", "kartoshka", "pomidor", "qulupnay"
    ],
    hard: [
      "O'zbekiston", "yomg'ir", "ko'zlar", "ariqcha", "ko'priklar", "xo'jalik", "g'ayratli", "jo'natildi", "o'quvchi",
      "tadbirkorlik", "sanoatlashgan", "o'zgartirish", "sog'lik-boylik", "ijtimoiy-iqtisodiy", "universitet", "kompyuterlashtirish"
    ]
  },
  EN: {
    easy: [
      "the", "be", "to", "of", "and", "a", "in", "that", "have", "i", "it", "for", "not", "on", "with", "he", "as", "you", "do",
      "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "so", "up"
    ],
    medium: [
      "would", "there", "their", "what", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no",
      "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then"
    ],
    hard: [
      "development", "javascript", "technology", "programming", "performance", "responsive", "architecture", "information",
      "beautiful", "experience", "background", "understand", "successful", "everything", "implementation", "unbelievable"
    ]
  },
  RU: {
    easy: [
      "и", "в", "во", "не", "что", "он", "на", "я", "с", "со", "как", "а", "то", "все", "она", "так", "его", "но", "да", "ты",
      "к", "ко", "у", "же", "вы", "за", "бы", "по", "ее", "мне", "было", "вот", "от", "меня", "еще", "нет", "о", "об", "из", "им"
    ],
    medium: [
      "время", "город", "школа", "книга", "ручка", "слово", "жизнь", "земля", "ветер", "дождь", "солнце", "облако", "цветок",
      "дерево", "дорога", "работа", "ученик", "глаз", "первый", "день", "новый", "совет", "хотел", "сказал", "потом", "себя"
    ],
    hard: [
      "компьютер", "клавиатура", "университет", "программирование", "разработка", "библиотека", "информация", "технология",
      "эффективность", "соответствие", "превосходство", "интерактивный", "систематизация", "жизнедеятельность"
    ]
  },
  Code: [
    "const [state, setState] = useState(null);",
    "useEffect(() => { return () => clearInterval(id); }, []);",
    "const data = arr.map(item => item.value);",
    "function calculateWpm(correct, time) { return (correct / 5) / (time / 60); }",
    "export default function TypingPage() { return <div className=\"p-8\" /> }",
    "const element = document.getElementById('root');",
    "border: 1px solid rgba(255, 90, 0, 0.1);",
    "if (currentIndex === totalLength) { handleTestComplete(); }",
    "console.log(`Speed: ${wpm} WPM | Accuracy: ${acc}%`);",
    "const handleKeyDown = (e) => { e.preventDefault(); };"
  ]
}

function TypingPage() {
  const navigate = useNavigate()

  // Screen views: 'start', 'typing', 'results'
  const [screen, setScreen] = useState('start')

  // Animation triggers
  const [isEnterPressed, setIsEnterPressed] = useState(false)
  const [fadeState, setFadeState] = useState('fade-in') // 'fade-in', 'fade-out'

  // User Profile
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('mars_typing_username') || "Allomurodov Azizbek"
  })
  const [isEditingUsername, setIsEditingUsername] = useState(false)
  const [userBestWpm, setUserBestWpm] = useState(() => {
    return parseInt(localStorage.getItem('mars_typing_best_wpm')) || 0
  })

  // Settings
  const [mode, setMode] = useState('Vaqt') // 'Code', 'Vaqt', 'So\'z'
  const [difficulty, setDifficulty] = useState('Oson') // 'Oson', 'O\'rta', 'Qiyin'
  const [selectedTime, setSelectedTime] = useState(30) // 15, 30, 60, 120 seconds
  const [language, setLanguage] = useState('UZ') // 'UZ', 'RU', 'EN'

  // Typing Game Engine States
  const [words, setWords] = useState([])
  const [typedChars, setTypedChars] = useState([]) // Flat list of typed characters matching the text
  const [targetText, setTargetText] = useState("") // Flat string representation of all characters
  const [charStates, setCharStates] = useState([]) // 'unread', 'correct', 'incorrect', 'extra'
  const [currentIndex, setCurrentIndex] = useState(0) // Cursor index in targetText
  const [testStarted, setTestStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [startTime, setStartTime] = useState(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  // Real-time Metrics
  const [liveWpm, setLiveWpm] = useState(0)
  const [liveAcc, setLiveAcc] = useState(100)
  const [correctCount, setCorrectCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)
  const [totalKeysPressed, setTotalKeysPressed] = useState(0)

  // Results State
  const [results, setResults] = useState({
    wpm: 0,
    accuracy: 100,
    time: 0,
    words: 0,
    correct: 0,
    errors: 0
  })

  // References
  const textInputRef = useRef(null)
  const timerIntervalRef = useRef(null)
  const metricsIntervalRef = useRef(null)
  const wordsContainerRef = useRef(null)

  // Timestamp for Top 10
  const [updateTimeText, setUpdateTimeText] = useState("")

  useEffect(() => {
    // Generate static update time
    const now = new Date()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const formatted = `${now.getFullYear()}-${months[now.getMonth()]}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    setUpdateTimeText(`Reyting har 6 daqiqada yangilanadi. Oxirgi yangilanish: ${formatted}`)
  }, [])

  // Start screen enter handler
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (screen === 'start') {
        if (e.key === 'Enter') {
          e.preventDefault()
          triggerStartTransition()
        } else if (e.key === 'q' || e.key === 'Q') {
          e.preventDefault()
          navigate('/')
        }
      } else if (screen === 'typing') {
        if (e.key === 'Escape') {
          e.preventDefault()
          navigate('/')
        } else {
          // Focus input box and handle typing
          if (textInputRef.current && document.activeElement !== textInputRef.current) {
            textInputRef.current.focus()
          }
        }
      } else if (screen === 'results') {
        if (e.key === 'Enter') {
          e.preventDefault()
          restartTest()
        } else if (e.key === 'Escape' || e.key === 'q' || e.key === 'Q') {
          e.preventDefault()
          navigate('/')
        }
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [screen])

  // Trigger test text generation when screen opens or settings change
  useEffect(() => {
    if (screen === 'typing') {
      generateTestText()
    }
  }, [screen, mode, difficulty, language, selectedTime])

  // Timer Effect
  useEffect(() => {
    if (testStarted) {
      // Countdown Timer
      if (mode === 'Vaqt') {
        setTimeLeft(selectedTime)
        timerIntervalRef.current = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              clearInterval(timerIntervalRef.current)
              finishTest()
              return 0
            }
            return prev - 1
          })
        }, 1000)
      } else {
        // Count elapsed time up for Code / So'z modes
        setElapsedSeconds(0)
        timerIntervalRef.current = setInterval(() => {
          setElapsedSeconds((prev) => prev + 1)
        }, 1000)
      }

      // Live metric updates (WPM & Accuracy)
      metricsIntervalRef.current = setInterval(() => {
        calculateLiveStats()
      }, 500)
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
      if (metricsIntervalRef.current) clearInterval(metricsIntervalRef.current)
    }
  }, [testStarted])

  const triggerStartTransition = () => {
    setIsEnterPressed(true)
    setTimeout(() => {
      setFadeState('fade-out')
      setTimeout(() => {
        setScreen('typing')
        setFadeState('fade-in')
        setIsEnterPressed(false)
      }, 300)
    }, 150)
  }

  const goBackToHome = () => {
    resetGameState()
    setFadeState('fade-out')
    setTimeout(() => {
      setScreen('start')
      setFadeState('fade-in')
    }, 300)
  }

  const resetGameState = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
    if (metricsIntervalRef.current) clearInterval(metricsIntervalRef.current)
    setTestStarted(false)
    setStartTime(null)
    setCurrentIndex(0)
    setLiveWpm(0)
    setLiveAcc(100)
    setCorrectCount(0)
    setErrorCount(0)
    setTotalKeysPressed(0)
    setTimeLeft(selectedTime)
    setElapsedSeconds(0)
  }

  const restartTest = () => {
    resetGameState()
    setScreen('typing')
    generateTestText()
    setTimeout(() => {
      if (textInputRef.current) textInputRef.current.focus()
    }, 50)
  }

  // Generate words text based on mode, language, difficulty
  const generateTestText = () => {
    let wordPool = []
    if (mode === 'Code') {
      wordPool = DICTIONARY.Code
    } else {
      const langPool = DICTIONARY[language] || DICTIONARY.EN
      const diffKey = difficulty === 'Oson' ? 'easy' : difficulty === 'O\'rta' ? 'medium' : 'hard'
      wordPool = langPool[diffKey] || langPool.easy
    }

    let generatedWords = []
    const count = mode === 'So\'z' ? selectedTime : 80 // limit words in Word mode or load standard pool

    if (mode === 'Code') {
      // For code mode, we shuffle code snippets and combine them with newlines
      const shuffled = [...wordPool].sort(() => 0.5 - Math.random())
      generatedWords = shuffled.slice(0, 5) // 5 long lines of code
    } else {
      // General random word selection
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * wordPool.length)
        generatedWords.push(wordPool[randomIndex])
      }
    }

    const flatText = generatedWords.join(" ")
    setWords(generatedWords)
    setTargetText(flatText)
    setCurrentIndex(0)
    
    // Initialize state array
    const initialStates = flatText.split("").map(() => 'unread')
    setCharStates(initialStates)
    setTypedChars([])
    resetGameState()
  }

  // Calculate WPM and Accuracy live
  const calculateLiveStats = () => {
    const elapsed = getElapsedSeconds()
    if (elapsed <= 0) return

    const minutes = elapsed / 60
    // WPM = (correct characters / 5) / minutes
    const currentWPM = Math.round((correctCount / 5) / minutes)
    setLiveWpm(currentWPM)

    // Acc = (correct / total keys pressed) * 100
    const accuracy = totalKeysPressed > 0 ? Math.round((correctCount / totalKeysPressed) * 100) : 100
    setLiveAcc(accuracy)
  }

  const getElapsedSeconds = () => {
    if (!startTime) return 0
    return (Date.now() - startTime) / 1000
  }

  // Core typing event handler
  const handleKeyDown = (e) => {
    // Check for restart via Enter key
    if (e.key === 'Enter') {
      e.preventDefault()
      restartTest()
      return
    }

    // Start test on first valid keypress
    if (!testStarted) {
      setTestStarted(true)
      setStartTime(Date.now())
    }

    const key = e.key
    const totalLength = targetText.length

    // Disable default scrolls or navigations
    if (key === 'Spacebar' || key === ' ' || key === 'Backspace' || key === 'Tab') {
      e.preventDefault()
    }

    if (key === 'Backspace') {
      if (currentIndex > 0) {
        const newIndex = currentIndex - 1
        const newCharStates = [...charStates]
        
        // Reset state of character we are going back to
        newCharStates[newIndex] = 'unread'
        setCharStates(newCharStates)
        setCurrentIndex(newIndex)
        setTypedChars(prev => prev.slice(0, -1))
        
        // Re-tally correct count
        let correct = 0
        for (let i = 0; i < newIndex; i++) {
          if (newCharStates[i] === 'correct') correct++
        }
        setCorrectCount(correct)
      }
      return
    }

    // Spacebar word skipping logic (Monkeytype style)
    if (key === ' ' || key === 'Spacebar') {
      const nextSpaceIdx = targetText.indexOf(' ', currentIndex)
      const newCharStates = [...charStates]

      if (nextSpaceIdx !== -1) {
        // Mark all letters of the current word from currentIndex to the space as incorrect
        let errorsAdded = 0
        for (let i = currentIndex; i < nextSpaceIdx; i++) {
          if (newCharStates[i] === 'unread') {
            newCharStates[i] = 'incorrect'
            errorsAdded++
          }
        }
        // Mark the space itself as correct (user typed space)
        newCharStates[nextSpaceIdx] = 'correct'

        setCharStates(newCharStates)
        setCorrectCount(prev => prev + 1)
        setErrorCount(prev => prev + errorsAdded)
        setTotalKeysPressed(prev => prev + 1 + errorsAdded)
        const nextIndex = nextSpaceIdx + 1
        setCurrentIndex(nextIndex)
        setTypedChars(prev => [...prev, ...Array(errorsAdded).fill('x'), ' '])

        if (nextIndex >= totalLength) {
          finishTest()
        }
      } else {
        // No more spaces: user is on the last word. Pressing space finishes the test,
        // marking the rest of the characters of the last word as incorrect.
        let errorsAdded = 0
        for (let i = currentIndex; i < totalLength; i++) {
          if (newCharStates[i] === 'unread') {
            newCharStates[i] = 'incorrect'
            errorsAdded++
          }
        }
        setCharStates(newCharStates)
        setErrorCount(prev => prev + errorsAdded)
        setTotalKeysPressed(prev => prev + errorsAdded)
        setCurrentIndex(totalLength)
        finishTest()
      }
      return
    }

    // Normal printable character entry
    if (key.length === 1) {
      setTotalKeysPressed(prev => prev + 1)
      const expectedChar = targetText[currentIndex]
      const isCorrect = key === expectedChar
      
      const newCharStates = [...charStates]
      newCharStates[currentIndex] = isCorrect ? 'correct' : 'incorrect'
      
      if (isCorrect) {
        setCorrectCount(prev => prev + 1)
      } else {
        setErrorCount(prev => prev + 1)
      }

      setCharStates(newCharStates)
      setTypedChars(prev => [...prev, key])
      
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)

      // Auto-completion checks
      if (nextIndex >= totalLength) {
        finishTest()
      }
    }
  }

  const finishTest = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
    if (metricsIntervalRef.current) clearInterval(metricsIntervalRef.current)

    // Calculate final stats
    const elapsed = Math.max(getElapsedSeconds(), 1)
    const minutes = elapsed / 60
    const finalWPM = Math.round((correctCount / 5) / minutes)
    const finalAccuracy = totalKeysPressed > 0 ? Math.round((correctCount / totalKeysPressed) * 100) : 0
    const wordCount = targetText.slice(0, currentIndex).split(" ").length

    // Update Best WPM
    if (finalWPM > userBestWpm) {
      setUserBestWpm(finalWPM)
      localStorage.setItem('mars_typing_best_wpm', finalWPM)
    }

    setResults({
      wpm: finalWPM,
      accuracy: finalAccuracy,
      time: Math.round(elapsed),
      words: wordCount,
      correct: correctCount,
      errors: errorCount
    })

    setScreen('results')
  }

  const saveUsername = (newName) => {
    if (newName.trim()) {
      setUsername(newName.trim())
      localStorage.setItem('mars_typing_username', newName.trim())
    }
    setIsEditingUsername(false)
  }

  return (
    <div className={`min-h-screen bg-[#f8fafc] text-[#334155] font-sans antialiased selection:bg-orange-500/20 transition-opacity duration-300 ${fadeState === 'fade-out' ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Dynamic Style Injection for 3D Keyboard Cap and animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          50% { opacity: 0; }
        }
        .caret-blink {
          animation: blink 1s step-end infinite;
        }
        
        /* 3D Keycap Styling */
        .keyboard-wrapper {
          perspective: 1000px;
        }
        .keyboard-base {
          background: #e2e8f0;
          border-radius: 24px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.08), inset 0 2px 4px rgba(255,255,255,0.8);
          padding: 24px;
          display: inline-flex;
          gap: 16px;
          transform: rotateX(15deg) rotateY(-10deg) rotateZ(2deg);
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .keyboard-base:hover {
          transform: rotateX(10deg) rotateY(-5deg) rotateZ(1deg) scale(1.02);
        }
        .keycap-3d {
          position: relative;
          background: #ffffff;
          border-radius: 12px;
          font-weight: 700;
          color: #475569;
          box-shadow: 0 8px 0 #cbd5e1, 0 12px 20px rgba(0,0,0,0.1);
          transform: translateZ(0);
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }
        .keycap-3d.orange {
          background: linear-gradient(135deg, #ff6b00, #ff5100);
          color: #ffffff;
          box-shadow: 0 8px 0 #c2410c, 0 12px 20px rgba(255, 90, 0, 0.2);
        }
        .keycap-3d:active, .keycap-3d.pressed {
          transform: translateY(6px);
          box-shadow: 0 2px 0 #cbd5e1, 0 4px 6px rgba(0,0,0,0.08);
        }
        .keycap-3d.orange:active, .keycap-3d.orange.pressed {
          transform: translateY(6px);
          box-shadow: 0 2px 0 #c2410c, 0 4px 6px rgba(255, 90, 0, 0.1);
        }
      `}} />

      {/* =====================================================================
          SCREEN 1: START PAGE
          ===================================================================== */}
      {screen === 'start' && (
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col justify-between min-h-[calc(100vh-80px)]">


          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-8">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-800">
                Typingni boshlash <br className="hidden md:inline" />
                uchun <span className="relative inline-block px-4 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-lg shadow-orange-500/20 mx-1">ENTER</span>ni bosing
              </h1>


              {/* User profile card */}
              <div className="bg-white/75 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-center justify-between mt-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-orange-400 to-red-500 flex items-center justify-center p-0.5 shadow-md">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-slate-700">👤</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {isEditingUsername ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          defaultValue={username}
                          onBlur={(e) => saveUsername(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') saveUsername(e.target.value) }}
                          className="bg-slate-50 border border-slate-300 rounded px-2 py-1 text-sm font-semibold text-slate-700 focus:outline-none focus:border-orange-500"
                          autoFocus
                        />
                        <button className="text-xs text-green-600 font-bold hover:underline">Saqlash</button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-slate-800">{username}</h3>
                        <button 
                          onClick={() => setIsEditingUsername(true)}
                          className="text-xs text-slate-400 hover:text-orange-500 transition-colors"
                          title="Ismni tahrirlash"
                        >
                          ✏️
                        </button>
                      </div>
                    )}
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">Reytingda - O'rin</p>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Shaxsiy Rekord</span>
                  <div className="flex items-baseline justify-center md:justify-end gap-1">
                    <span className="text-3xl font-black text-slate-800">{userBestWpm}</span>
                    <span className="text-xs font-extrabold text-orange-500 uppercase">WPM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Keycap graphics */}
            <div className="lg:col-span-5 flex justify-center items-center keyboard-wrapper py-6">
              <div className="keyboard-base">
                {/* Q Keycap */}
                <div 
                  onClick={() => navigate('/')}
                  className="keycap-3d w-20 h-20 flex flex-col justify-between p-3 cursor-pointer select-none"
                >
                  <div className="text-slate-400 text-xs font-bold self-start">Q</div>
                  <div className="text-slate-300 text-xs font-semibold self-end">Chiqish</div>
                </div>
                {/* Enter Keycap */}
                <div 
                  onClick={triggerStartTransition}
                  className={`keycap-3d orange w-28 h-20 flex flex-col justify-between p-3 cursor-pointer select-none ${isEnterPressed ? 'pressed' : ''}`}
                >
                  <div className="text-white/70 text-xs font-bold self-start">Enter ↵</div>
                  <div className="text-white text-xs font-semibold self-end">MARS</div>
                </div>
              </div>
            </div>
          </div>

          {/* TOP-10 Leaderboard Section */}
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-lg shadow-slate-100/50 mt-4 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-6 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-orange-500">🏆</span> TOP-10 Reyting
                </h2>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Barcha o'quvchilar orasida</p>
              </div>
              <span className="text-[11px] text-slate-400 bg-slate-100 px-3 py-1 rounded-full font-medium">{updateTimeText}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[380px] overflow-y-auto pr-2">
              {INITIAL_LEADERBOARD.map((user, idx) => {
                // Determine badge style based on rank
                let badge = null
                if (user.rank === 1) badge = "🥇"
                else if (user.rank === 2) badge = "🥈"
                else if (user.rank === 3) badge = "🥉"
                else badge = `🏅 ${user.rank}`

                return (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center p-3 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-200/80 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      {/* Custom styled avatar bubble */}
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                        {user.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">{user.name}</h4>
                        <span className="text-[10px] bg-slate-200/60 text-slate-500 font-semibold px-2 py-0.5 rounded-full">{user.tag}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-baseline gap-0.5 justify-end">
                          <span className="font-black text-slate-800 text-sm">{user.wpm}</span>
                          <span className="text-[8px] font-extrabold text-slate-400">WPM</span>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-slate-500 w-10 text-right">
                        {badge}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 2: TYPING GAMEPLAY
          ===================================================================== */}
      {screen === 'typing' && (
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col justify-between min-h-[calc(100vh-8px)]">


          {/* User invitation card & Records details */}
          <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4 my-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-2xl shadow-inner">
                👩‍💻
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 text-base">{username}, Rekordni yangilay olasizmi?</h3>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Omad yor bo'lsin!</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Rekord tezlik</span>
              <div className="flex items-baseline gap-0.5 justify-center md:justify-end">
                <span className="text-2xl font-black text-slate-800">{userBestWpm}</span>
                <span className="text-[10px] font-bold text-orange-500 uppercase">WPM</span>
              </div>
            </div>
          </div>

          {/* Main Workspace: Settings and Typing Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4 items-start">
            
            {/* Settings & Text display panel */}
            <div className="lg:col-span-9 space-y-4">
              {/* settings pills bar */}
              <div className="bg-slate-200/50 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                
                {/* Modes selector */}
                <div className="flex bg-white rounded-xl p-0.5 shadow-sm border border-slate-200">
                  {['Code', 'Vaqt', 'So\'z'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`px-3 py-1.5 rounded-lg transition-all ${mode === m ? 'bg-orange-500 text-white shadow-sm' : 'hover:text-slate-800'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <div className="w-px h-6 bg-slate-300"></div>

                {/* Difficulty selector */}
                <div className="flex items-center gap-1">
                  {['Oson', 'O\'rta', 'Qiyin'].map((diff) => {
                    const dotColors = {
                      'Oson': 'bg-emerald-500',
                      'O\'rta': 'bg-orange-500',
                      'Qiyin': 'bg-red-500'
                    }
                    return (
                      <button
                        key={diff}
                        onClick={() => setDifficulty(diff)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${difficulty === diff ? 'bg-white text-slate-800 shadow-sm border border-slate-200' : 'hover:text-slate-800'}`}
                      >
                        <span className={`w-2 h-2 rounded-full ${dotColors[diff]}`}></span>
                        <span>{diff}</span>
                      </button>
                    )
                  })}
                </div>

                <div className="w-px h-6 bg-slate-300"></div>

                {/* Time limits selector (if relevant to mode) */}
                <div className="flex items-center gap-1">
                  {[15, 30, 60, 120].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`px-3 py-1.5 rounded-xl transition-all ${selectedTime === t ? 'bg-white text-slate-800 shadow-sm border border-slate-200' : 'hover:text-slate-800'}`}
                    >
                      {t}s
                    </button>
                  ))}
                </div>

                <div className="w-px h-6 bg-slate-300"></div>

                {/* Language selection */}
                {mode !== 'Code' && (
                  <div className="flex bg-white rounded-xl p-0.5 shadow-sm border border-slate-200 ml-auto">
                    {['UZ', 'RU', 'EN'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`px-2.5 py-1.5 rounded-lg transition-all ${language === lang ? 'bg-slate-800 text-white' : 'hover:text-slate-800'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hidden keystroke receptor input */}
              <input
                ref={textInputRef}
                type="text"
                className="absolute opacity-0 pointer-events-none"
                onKeyDown={handleKeyDown}
                autoFocus
              />

              {/* Main Text display viewport */}
              <div 
                onClick={() => textInputRef.current && textInputRef.current.focus()}
                className="bg-white border-2 border-slate-200/80 hover:border-slate-300 rounded-3xl p-8 min-h-[180px] shadow-sm transition-colors cursor-text relative overflow-hidden"
              >
                {/* Blur shield if input unfocused */}
                {document.activeElement !== textInputRef.current && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-xs flex items-center justify-center transition-all z-10">
                    <span className="bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md animate-bounce">
                      Yozishni davom ettirish uchun shu yerga bosing
                    </span>
                  </div>
                )}

                {/* Text render block */}
                <div ref={wordsContainerRef} className="flex flex-wrap gap-x-2 gap-y-3.5 text-xl leading-relaxed tracking-wide font-mono select-none">
                  {targetText.split(" ").map((word, wordIdx) => {
                    // Calculate flat offset ranges for each word
                    let prevCharsCount = 0
                    const splitWords = targetText.split(" ")
                    for (let w = 0; w < wordIdx; w++) {
                      prevCharsCount += splitWords[w].length + 1 // +1 for the space
                    }

                    return (
                      <span key={wordIdx} className="relative inline-block whitespace-nowrap">
                        {word.split("").map((char, charIdx) => {
                          const flatIdx = prevCharsCount + charIdx
                          const charState = charStates[flatIdx]

                          // Highlighting classes
                          let colorClass = "text-slate-400" // Unread
                          if (charState === 'correct') colorClass = "text-emerald-500 font-bold"
                          else if (charState === 'incorrect') colorClass = "text-red-500 font-bold bg-red-50 rounded"

                          const isCurrent = flatIdx === currentIndex

                          return (
                            <span key={charIdx} className={`relative ${colorClass}`}>
                              {char}
                              {isCurrent && (
                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-orange-500 rounded caret-blink"></span>
                              )}
                            </span>
                          )
                        })}

                        {/* Space letter handler */}
                        {wordIdx < splitWords.length - 1 && (() => {
                          const spaceIdx = prevCharsCount + word.length
                          const spaceState = charStates[spaceIdx]
                          let spaceColor = "text-slate-200"
                          if (spaceState === 'incorrect') spaceColor = "bg-red-200 text-red-600 font-extrabold rounded px-1"

                          const isCurrentSpace = spaceIdx === currentIndex

                          return (
                            <span className={`relative inline-block w-2.5 font-bold ${spaceColor}`}>
                              &nbsp;
                              {isCurrentSpace && (
                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-orange-500 rounded caret-blink"></span>
                              )}
                            </span>
                          )
                        })()}
                      </span>
                    )
                  })}
                </div>
              </div>

              {/* Reset controls */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={restartTest}
                  className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-orange-500 hover:border-orange-200 hover:shadow-md hover:-rotate-45 active:scale-90 transition-all duration-300"
                  title="Qaytadan boshlash"
                >
                  🔄
                </button>
              </div>
            </div>

            {/* Live stats sidebar dashboard */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>

                {/* Dynamic WPM */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Tezlik (WPM)</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-slate-800 font-mono tracking-tighter">
                      {liveWpm}
                    </span>
                    <span className="text-xs font-black text-orange-500 uppercase">WPM</span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Dynamic Accuracy */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Aniqlik</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-slate-800 font-mono tracking-tighter">
                      {liveAcc}
                    </span>
                    <span className="text-xs font-black text-slate-400">%</span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Dynamic Time left / elapsed */}
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    {mode === 'Vaqt' ? 'Qolgan Vaqt' : 'Ketgan Vaqt'}
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-slate-800 font-mono tracking-tighter">
                      {mode === 'Vaqt' ? timeLeft : elapsedSeconds}
                    </span>
                    <span className="text-xs font-black text-slate-400">s</span>
                  </div>
                </div>
              </div>

              {/* Instructions badge */}
              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 text-xs text-slate-400 font-semibold space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Space</span>
                  <span>Keyingi so'zga o'tish</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Backspace</span>
                  <span>Xatolarni o'chirish</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Esc</span>
                  <span>Bosh sahifaga qaytish</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer prompt */}
          <div className="text-center py-4 text-slate-400 text-xs font-medium">
            *So'zlarni almashtirish uchun <button onClick={restartTest} className="px-2 py-1 bg-white border border-slate-200 rounded font-mono text-[10px] text-slate-600 hover:border-orange-500 shadow-xs">Enter</button> tugmasini bosing
          </div>
        </div>
      )}

      {/* =====================================================================
          SCREEN 3: RESULTS SUMMARY
          ===================================================================== */}
      {screen === 'results' && (
        <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
          
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden space-y-8">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-indigo-600"></div>

            {/* Visual Feedback Greeting */}
            <div className="text-center">
              <span className="text-5xl block mb-4">🎉</span>
              <h1 className="text-3xl md:text-4xl font-black text-slate-800">
                {results.wpm >= 100 ? "Daxshat! Super tezlik!" : results.wpm >= 60 ? "Zo'r natija!" : "Yaxshi, harakat qiling!"}
              </h1>
              <p className="text-slate-400 text-sm font-semibold mt-1">Typing mashg'uloti muvaffaqiyatli yakunlandi</p>
            </div>

            {/* Scoreboard Metrics Box */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {/* WPM score */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 shadow-xs relative overflow-hidden">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Tezlik</span>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-4xl md:text-5xl font-black text-slate-800 font-mono tracking-tighter">{results.wpm}</span>
                  <span className="text-xs font-bold text-orange-500 uppercase">WPM</span>
                </div>
                {results.wpm === userBestWpm && results.wpm > 0 && (
                  <span className="absolute bottom-1 right-2 text-[9px] bg-amber-100 text-amber-600 font-black px-2 py-0.5 rounded-full uppercase tracking-tighter border border-amber-200">New PB</span>
                )}
              </div>

              {/* Accuracy score */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Aniqlik</span>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-4xl md:text-5xl font-black text-slate-800 font-mono tracking-tighter">{results.accuracy}</span>
                  <span className="text-xs font-bold text-slate-400">%</span>
                </div>
              </div>

              {/* Words typed */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">So'zlar</span>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-4xl md:text-5xl font-black text-slate-800 font-mono tracking-tighter">{results.words}</span>
                  <span className="text-xs font-bold text-slate-400">ta</span>
                </div>
              </div>

              {/* Time taken */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 shadow-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Vaqt</span>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-4xl md:text-5xl font-black text-slate-800 font-mono tracking-tighter">{results.time}</span>
                  <span className="text-xs font-bold text-slate-400">sek</span>
                </div>
              </div>
            </div>

            {/* Extra details list */}
            <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-5 flex flex-wrap justify-around text-center gap-4 text-xs font-bold text-slate-500">
              <div>
                <span className="text-slate-400 font-medium block">To'g'ri belgilar</span>
                <span className="text-lg text-emerald-500 font-black">{results.correct}</span>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
              <div>
                <span className="text-slate-400 font-medium block">Xatolar soni</span>
                <span className="text-lg text-red-500 font-black">{results.errors}</span>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
              <div>
                <span className="text-slate-400 font-medium block">Til</span>
                <span className="text-lg text-slate-700 font-black">{language}</span>
              </div>
              <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
              <div>
                <span className="text-slate-400 font-medium block">Qiyinchilik</span>
                <span className="text-lg text-slate-700 font-black">{difficulty}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={restartTest}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>🔄</span> Qayta Boshlash
              </button>
              <button
                onClick={() => navigate('/')}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-2xl transition-all border border-slate-200/50 flex items-center justify-center gap-2"
              >
                <span>🏠</span> Bosh Sahifaga Qaytish
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default TypingPage
