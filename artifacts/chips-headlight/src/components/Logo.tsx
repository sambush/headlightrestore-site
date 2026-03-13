interface LogoProps {
  size?: "sm" | "md" | "lg";
  id?: string;
}

export function Logo({ size = "md" }: LogoProps) {
  const heights: Record<string, number> = { sm: 56, md: 72, lg: 96 };
  const h = heights[size];

  return (
    <img
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="Chip's Mobile Headlamp Restoration"
      height={h}
      style={{ height: h, width: "auto", display: "block", mixBlendMode: "screen" }}
    />
  );
}
