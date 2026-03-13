interface LogoProps {
  size?: "sm" | "md" | "lg";
  id?: string;
}

export function Logo({ size = "md", id = "logo" }: LogoProps) {
  const heights: Record<string, number> = { sm: 44, md: 60, lg: 80 };
  const h = heights[size];
  const gradId = `cGrad-${id}`;

  return (
    <svg
      viewBox="0 0 280 110"
      height={h}
      style={{ display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8231a" />
          <stop offset="100%" stopColor="#a51008" />
        </linearGradient>
      </defs>

      {/* ── Red "C" arc (thick, like the reference logo) ── */}
      {/* Center (52, 47), outer R=45, inner r=20, opening ±60° */}
      {/* Top outer: (74.5, 8.0)  Bottom outer: (74.5, 86.0) */}
      {/* Top inner: (62.0, 27.4) Bottom inner: (62.0, 66.6) */}
      <path
        d="M 74.5,8 A 45,45 0 1,0 74.5,86 L 62,66.6 A 20,20 0 0,0 62,27.4 Z"
        fill={`url(#${gradId})`}
      />

      {/* ── "hips" text in the C opening ── */}
      <text
        x="80"
        y="52"
        fontFamily="'Outfit', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="white"
        dominantBaseline="middle"
        letterSpacing="-1"
      >
        hips
      </text>

      {/* ── "MOBILE" subtitle in gold ── */}
      <text
        x="82"
        y="73"
        fontFamily="'Outfit', Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#e8c040"
        letterSpacing="3"
      >
        MOBILE
      </text>

      {/* ── Black bar at bottom ── */}
      <rect x="0" y="89" width="280" height="21" fill="#000000" />

      {/* ── "HEADLAMP RESTORATION" in bar ── */}
      <text
        x="140"
        y="103"
        fontFamily="'Outfit', Arial, sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="white"
        textAnchor="middle"
        letterSpacing="3"
      >
        HEADLAMP RESTORATION
      </text>
    </svg>
  );
}
