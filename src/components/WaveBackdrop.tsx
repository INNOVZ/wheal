// Decorative line-art waves rendered as SVG. Pure design token colors.
export function WaveBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-90"
      >
        <defs>
          <radialGradient id="wave-fade" cx="55%" cy="55%" r="55%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="70%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground"
          style={{ stroke: "url(#wave-fade)" }}
        >
          {Array.from({ length: 36 }).map((_, i) => {
            const r = 60 + i * 22;
            return (
              <ellipse
                key={i}
                cx={900}
                cy={520}
                rx={r}
                ry={r * 0.62}
                transform={`rotate(${-12 + i * 0.2} 900 520)`}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
