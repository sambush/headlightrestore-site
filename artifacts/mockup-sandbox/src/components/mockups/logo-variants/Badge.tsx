export function Badge() {
  return (
    <div className="min-h-screen bg-[#080d1a] flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-10">

        {/* Horizontal full lockup */}
        <div className="flex items-center gap-5">
          {/* Shield badge */}
          <div className="relative w-[62px] h-[70px] flex items-end justify-center pb-2">
            <svg width="62" height="70" viewBox="0 0 62 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              {/* Shield shape */}
              <path d="M31 2L4 12V35C4 50 16 62 31 68C46 62 58 50 58 35V12L31 2Z"
                fill="url(#shieldGrad)" stroke="#2563eb" strokeWidth="1.5" strokeOpacity="0.5"/>
              {/* Inner highlight */}
              <path d="M31 7L9 16V35C9 47 19 57 31 63C43 57 53 47 53 35V16L31 7Z"
                fill="white" fillOpacity="0.05"/>
              <defs>
                <linearGradient id="shieldGrad" x1="31" y1="2" x2="31" y2="68" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1d4ed8"/>
                  <stop offset="100%" stopColor="#1e3a8a"/>
                </linearGradient>
              </defs>
            </svg>
            {/* Shield content */}
            <div className="relative z-10 flex flex-col items-center mb-2">
              {/* Headlight beams */}
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                <circle cx="12" cy="11" r="8" fill="white" fillOpacity="0.1"/>
                <circle cx="12" cy="11" r="5.5" fill="white" fillOpacity="0.2"/>
                <circle cx="12" cy="11" r="3" fill="white" fillOpacity="0.95"/>
                <path d="M20 11 L29 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
                <path d="M20 11 L30 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 11 L29 14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
                <path d="M20 11 L27 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
                <path d="M20 11 L27 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              className="text-4xl text-white leading-none"
            >
              CHIP'S
            </span>
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
              className="text-sm text-white/80 leading-tight mt-0.5"
            >
              Mobile Headlight
            </span>
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
              className="text-sm text-[#60a5fa] leading-tight"
            >
              Restoration
            </span>
          </div>
        </div>

        {/* Light background version */}
        <div className="bg-[#f1f5f9] rounded-2xl px-10 py-7 flex items-center gap-5">
          <div className="relative w-[52px] h-[60px] flex items-end justify-center pb-2">
            <svg width="52" height="60" viewBox="0 0 62 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <path d="M31 2L4 12V35C4 50 16 62 31 68C46 62 58 50 58 35V12L31 2Z"
                fill="url(#shieldGrad2)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4"/>
              <path d="M31 7L9 16V35C9 47 19 57 31 63C43 57 53 47 53 35V16L31 7Z"
                fill="white" fillOpacity="0.08"/>
              <defs>
                <linearGradient id="shieldGrad2" x1="31" y1="2" x2="31" y2="68" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563eb"/>
                  <stop offset="100%" stopColor="#1e40af"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="relative z-10 flex flex-col items-center mb-1.5">
              <svg width="28" height="20" viewBox="0 0 32 22" fill="none">
                <circle cx="12" cy="11" r="7" fill="white" fillOpacity="0.15"/>
                <circle cx="12" cy="11" r="4.5" fill="white" fillOpacity="0.25"/>
                <circle cx="12" cy="11" r="2.5" fill="white" fillOpacity="0.95"/>
                <path d="M20 11 L29 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.9"/>
                <path d="M20 11 L30 11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M20 11 L29 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.9"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              className="text-3xl text-[#0f172a] leading-none"
            >
              CHIP'S
            </span>
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
              className="text-xs text-[#475569] leading-tight mt-0.5"
            >
              Mobile Headlight
            </span>
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
              className="text-xs text-[#2563eb] leading-tight"
            >
              Restoration
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
