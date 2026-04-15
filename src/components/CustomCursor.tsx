import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] rounded-full"
      style={{
        left: pos.x - (isHovering ? 24 : 18),
        top: pos.y - (isHovering ? 24 : 18),
        width: isHovering ? 48 : 36,
        height: isHovering ? 48 : 36,
        background: isHovering
          ? "radial-gradient(circle, hsl(174 55% 45% / 0.25) 0%, transparent 70%)"
          : "radial-gradient(circle, hsl(174 55% 45% / 0.12) 0%, transparent 70%)",
        transition: "left 0.1s ease-out, top 0.1s ease-out, width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease-out",
        boxShadow: isHovering
          ? "0 0 20px hsl(174 55% 45% / 0.4), 0 0 40px hsl(174 55% 45% / 0.2)"
          : "0 0 10px hsl(174 55% 45% / 0.1)",
      }}
    />
  );
};

export default CustomCursor;
