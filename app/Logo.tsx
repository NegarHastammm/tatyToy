
import React, { useState, useRef } from 'react';

const App: React.FC = () => {
  // مدیریت وضعیت خنده با تایپ boolean
  const [isLaughing, setIsLaughing] = useState<boolean>(false);
  
  // رفرنس به المان تصویر برای دسترسی مستقیم در صورت نیاز
  const logoRef = useRef<HTMLImageElement>(null);

  const toggleLaugh = (): void => {
    setIsLaughing((prev) => !prev);
  };

  // استایل‌های پویا بر اساس وضعیت خنده
  const btnStyles: React.CSSProperties = {
    background: isLaughing 
      ? "linear-gradient(135deg, #ff416c, #ff4b2b)" 
      : "linear-gradient(135deg, #6e8efb, #a777e3)",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 dir-rtl">
      <style>{`
        @keyframes logoLaugh {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05, 0.95); }
          50% { transform: scale(0.98, 1.02); }
          75% { transform: scale(1.08, 0.92); }
        }
        .laughing-active {
          animation: logoLaugh 0.4s infinite ease-in-out;
        }
      `}</style>

      <div className="relative bg-white p-6 rounded-[30px] shadow-2xl overflow-hidden flex justify-center items-center">
        {/* تصویر لوگو با استفاده از مسیر آپلود شده */}
        <img
          ref={logoRef}
          id="mainLogo"
          className={`max-w-[350px] h-auto block rounded-2xl transition-transform duration-300 ${
            isLaughing ? 'laughing-active' : ''
          }`}
          src="/logo.png"
          alt="Logo"
        />
        
        {/* ناحیه حساس به کلیک روی بخش لبخند (Y) */}
        <div 
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-32 h-20 cursor-pointer z-10"
          onClick={toggleLaugh}
        ></div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={toggleLaugh}
          style={btnStyles}
          className="text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transform transition-all hover:-translate-y-1 active:scale-95"
        >
          {isLaughing ? "بسه دیگه! 😂" : "شروع خنده! 😄"}
        </button>
        <p className="mt-4 text-gray-500 text-sm">
          روی لوگو یا دکمه کلیک کنید
        </p>
      </div>
    </div>
  );
};

export default App;