export function Emblem() {
  return (
    <div className="min-h-screen bg-[#080d1a] flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-12">

        {/* Horizontal lockup – dark bg */}
        <div className="flex items-center gap-5">
          {/* Emblem icon */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#2563eb]/20 animate-pulse"/>
            <div className="absolute inset-1 rounded-full border border-[#2563eb]/40"/>
            {/* Main emblem circle */}
            <div
              className="relative w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #60a5fa 100%)" }}
            >
              {/* Headlight lens shape */}
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                <ellipse cx="10" cy="10" rx="9" ry="9" fill="white" fillOpacity="0.15"/>
                <ellipse cx="10" cy="10" rx="6" ry="6" fill="white" fillOpacity="0.3"/>
                <ellipse cx="10" cy="10" rx="3" ry="3" fill="white" fillOpacity="0.9"/>
                <path d="M19 10 L27 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
                <path d="M19 10 L28 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19 10 L27 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
                <path d="M19 10 L25 5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                <path d="M19 10 L25 15" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
          </div>

          {/* Text block */}
          <div className="flex flex-col">
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              className="text-4xl text-white leading-none"
            >
              CHIP'S
            </span>
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.15em" }}
              className="text-[10px] text-[#60a5fa] uppercase mt-1"
            >
              Mobile Headlight Restoration
            </span>
          </div>
        </div>

        {/* Stacked / centered lockup on light */}
        <div className="bg-white rounded-2xl px-12 py-8 flex flex-col items-center gap-3">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #93c5fd 100%)" }}
            >
              <svg width="24" height="18" viewBox="0 0 28 20" fill="none">
                <ellipse cx="10" cy="10" rx="9" ry="9" fill="white" fillOpacity="0.15"/>
                <ellipse cx="10" cy="10" rx="5" ry="5" fill="white" fillOpacity="0.35"/>
                <ellipse cx="10" cy="10" rx="2.5" ry="2.5" fill="white" fillOpacity="0.95"/>
                <path d="M19 10 L27 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
                <path d="M19 10 L28 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M19 10 L27 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
              className="text-3xl text-[#0f172a] leading-none"
            >
              CHIP'S
            </span>
            <span
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.15em" }}
              className="text-[9px] text-[#475569] uppercase mt-1"
            >
              Mobile Headlight Restoration
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
