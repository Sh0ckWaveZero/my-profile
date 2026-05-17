export const BackgroundGradient = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    <div
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-[0.06]"
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.55 0.15 255), oklch(0.45 0.1 285))",
      }}
    />
  </div>
);
