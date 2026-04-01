import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const outerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const loop = () => {
      outerPosRef.current.x += (posRef.current.x - outerPosRef.current.x) * 0.12;
      outerPosRef.current.y += (posRef.current.y - outerPosRef.current.y) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPosRef.current.x}px, ${outerPosRef.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    const onEnterLink = () => {
      outerRef.current?.classList.add("cursor-hover");
      innerRef.current?.classList.add("cursor-hover");
    };
    const onLeaveLink = () => {
      outerRef.current?.classList.remove("cursor-hover");
      innerRef.current?.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(loop);

    const interactables = document.querySelectorAll("a, button, [role='button'], span[onmouseenter]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer trailing ring */}
      <div
        ref={outerRef}
        className="cursor-outer"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: "50%",
          border: "2px solid hsl(25 85% 52% / 0.6)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
          willChange: "transform",
        }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="cursor-inner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: "50%",
          backgroundColor: "hsl(25 85% 52%)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          transition: "width 0.15s, height 0.15s, background-color 0.15s",
        }}
      />
      <style>{`
        * { cursor: none !important; }
        .cursor-outer.cursor-hover {
          width: 52px !important;
          height: 52px !important;
          margin-left: -26px !important;
          margin-top: -26px !important;
          border-color: hsl(25 85% 52% / 1) !important;
          background: hsl(25 85% 52% / 0.08);
        }
        .cursor-inner.cursor-hover {
          width: 12px !important;
          height: 12px !important;
          margin-left: -6px !important;
          margin-top: -6px !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
