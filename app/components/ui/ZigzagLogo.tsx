import React from 'react';

interface ZigzagLogoProps {
  speed?: number;
  dist?: number;
  step?: number;
  size?: string;
}

/**
 * ZigzagLogo Component
 * یک لوگوی متحرک با حرکت زیگزاگی بدون کنترل‌های اضافه برای استفاده در سایت
 */
const ZigzagLogo: React.FC<ZigzagLogoProps> = ({ 
  speed = 2, 
  dist = 40, 
  step = 20,
  size = "w-32 h-32" 
}) => {

  const animationStyle: React.CSSProperties = {
    '--duration': `${speed}s`,
    '--zigzag-dist': `${dist}px`,
    '--zigzag-step': `${step}px`,
  } as React.CSSProperties;

  return (
    <div className="flex items-center justify-center overflow-visible">
      <style>
        {`
          @keyframes zigzag {
            0% { transform: translate(0, 0); }
            25% { transform: translate(var(--zigzag-dist), var(--zigzag-step)); }
            50% { transform: translate(0, calc(var(--zigzag-step) * 2)); }
            75% { transform: translate(calc(var(--zigzag-dist) * -1), var(--zigzag-step)); }
            100% { transform: translate(0, 0); }
          }
          .zigzag-animate {
            animation: zigzag var(--duration) infinite linear;
          }
        `}
      </style>

      <div className={`${size} flex items-center justify-center`}>
        <img
          src="/Images/logo1.jpeg" // فایل باید در پوشه public باشد
          alt="Logo"
          className="max-w-full max-h-full object-contain zigzag-animate"
          style={animationStyle}
        />
      </div>
    </div>
  );
};

export default ZigzagLogo;