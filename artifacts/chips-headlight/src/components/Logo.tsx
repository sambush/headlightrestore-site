import { useEffect, useRef } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  id?: string;
}

export function Logo({ size = "md" }: LogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heights: Record<string, number> = { sm: 96, md: 90, lg: 120 };
  const h = heights[size];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.onload = () => {
      const dpr = window.devicePixelRatio || 1;
      const aspect = img.naturalWidth / img.naturalHeight;
      const w = Math.round(h * aspect);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      ctx.drawImage(img, 0, 0, w, h);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const diff = max - min;

        if (diff < 20 && max < 75) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };
    img.crossOrigin = "anonymous";
    img.src = `${import.meta.env.BASE_URL}logo.png`;
  }, [h]);

  return (
    <canvas
      ref={canvasRef}
      style={{ height: h, width: "auto", display: "block" }}
      aria-label="Chip's Mobile Headlamp Restoration"
    />
  );
}
