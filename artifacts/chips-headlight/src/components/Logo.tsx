import { useEffect, useRef } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  id?: string;
}

export function Logo({ size = "md" }: LogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heights: Record<string, number> = { sm: 72, md: 90, lg: 120 };
  const h = heights[size];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.onload = () => {
      const aspect = img.naturalWidth / img.naturalHeight;
      const w = Math.round(h * aspect);
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, w, h);

      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const diff = max - min;

        // Remove dark gray/charcoal background texture:
        // - approximately grayscale (low color difference)
        // - brightness above ~8 (keeps the pure-black HEADLAMP RESTORATION bar)
        // - brightness below ~75 (keeps bright logo colors: red, white, gold)
        if (diff < 20 && max > 8 && max < 75) {
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
