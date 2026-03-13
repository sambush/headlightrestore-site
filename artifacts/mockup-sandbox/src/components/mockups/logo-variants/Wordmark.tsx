export function Wordmark() {
  return (
    <div className="min-h-screen bg-[#080d1a] flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-12">

        {/* Main logo on dark */}
        <div className="flex flex-col items-start gap-0 group cursor-pointer select-none">
          <div className="flex items-center gap-3">
            {/* Headlight beam SVG icon */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="8" fill="#2563eb" opacity="0.9"/>
              <circle cx="18" cy="18" r="5" fill="#60a5fa"/>
              <circle cx="18" cy="18" r="2.5" fill="white"/>
              {/* Beam rays */}
              <path d="M26 18 L34 14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M26 18 L35 18" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
              <path d="M26 18 L34 22" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M26 18 L32 26" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
              <path d="M26 18 L32 10" stroke="#2563eb" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
            </svg>
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.03em" }}
              className="text-5xl text-white leading-none"
            >
              CHIP<span className="text-[#2563eb]">'S</span>
            </span>
          </div>
          {/* Accent line + tagline */}
          <div className="flex items-center gap-3 ml-[52px]">
            <div className="h-[2px] w-8 bg-[#2563eb] rounded-full"/>
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.18em" }}
              className="text-[10px] text-[#60a5fa] uppercase tracking-[0.2em]"
            >
              Mobile Headlight Restoration
            </span>
          </div>
        </div>

        {/* On light background preview */}
        <div className="bg-white rounded-2xl px-12 py-8 flex flex-col items-start gap-0">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="8" fill="#1d4ed8" opacity="0.9"/>
              <circle cx="18" cy="18" r="5" fill="#3b82f6"/>
              <circle cx="18" cy="18" r="2.5" fill="white"/>
              <path d="M26 18 L34 14" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M26 18 L35 18" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
              <path d="M26 18 L34 22" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
            </svg>
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.03em" }}
              className="text-4xl text-[#0f172a] leading-none"
            >
              CHIP<span className="text-[#2563eb]">'S</span>
            </span>
          </div>
          <div className="flex items-center gap-3 ml-[47px]">
            <div className="h-[2px] w-6 bg-[#2563eb] rounded-full"/>
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.18em" }}
              className="text-[9px] text-[#475569] uppercase tracking-[0.2em]"
            >
              Mobile Headlight Restoration
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
