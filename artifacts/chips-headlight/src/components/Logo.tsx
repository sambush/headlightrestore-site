interface LogoProps {
  size?: "sm" | "md" | "lg";
  id?: string;
}

export function Logo({ size = "md", id = "a" }: LogoProps) {
  const shieldW = size === "sm" ? 34 : size === "lg" ? 52 : 42;
  const shieldH = size === "sm" ? 38 : size === "lg" ? 58 : 47;
  const beamW = size === "sm" ? 18 : size === "lg" ? 28 : 22;
  const beamH = size === "sm" ? 12 : size === "lg" ? 20 : 16;
  const nameSize = size === "sm" ? "text-xl" : size === "lg" ? "text-4xl" : "text-2xl";
  const subSize = size === "sm" ? "text-[9px]" : size === "lg" ? "text-sm" : "text-[10px]";
  const gradId = `shieldG-${id}`;

  return (
    <div className="flex items-center gap-3">
      {/* Shield badge icon */}
      <div className="relative flex items-end justify-center" style={{ width: shieldW, height: shieldH, paddingBottom: shieldH * 0.08 }}>
        <svg
          width={shieldW}
          height={shieldH}
          viewBox="0 0 62 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <path
            d="M31 2L4 12V35C4 50 16 62 31 68C46 62 58 50 58 35V12L31 2Z"
            fill={`url(#${gradId})`}
            stroke="#2563eb"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <path
            d="M31 7L9 16V35C9 47 19 57 31 63C43 57 53 47 53 35V16L31 7Z"
            fill="white"
            fillOpacity="0.05"
          />
          <defs>
            <linearGradient id={gradId} x1="31" y1="2" x2="31" y2="68" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
        </svg>
        {/* Headlight icon inside shield */}
        <div className="relative z-10 flex items-center justify-center" style={{ marginBottom: shieldH * 0.06 }}>
          <svg width={beamW} height={beamH} viewBox="0 0 32 22" fill="none">
            <circle cx="12" cy="11" r="8" fill="white" fillOpacity="0.1" />
            <circle cx="12" cy="11" r="5.5" fill="white" fillOpacity="0.2" />
            <circle cx="12" cy="11" r="3" fill="white" fillOpacity="0.95" />
            <path d="M20 11 L29 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
            <path d="M20 11 L30 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M20 11 L29 14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
            <path d="M20 11 L27 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <path d="M20 11 L27 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, letterSpacing: "-0.02em" }}
          className={`${nameSize} text-white leading-none`}
        >
          CHIP'S
        </span>
        <span
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
          className={`${subSize} text-white/75 leading-tight mt-0.5`}
        >
          Mobile Headlight
        </span>
        <span
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: "-0.01em" }}
          className={`${subSize} text-[#60a5fa] leading-tight`}
        >
          Restoration
        </span>
      </div>
    </div>
  );
}
