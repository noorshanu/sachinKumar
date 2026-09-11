export default function CandlestickBackground({ className = '' }) {
  const candles = [
    { x: 75, h: 40, body: 20, up: true },
    { x: 80, h: 55, body: 25, up: false },
    { x: 85, h: 35, body: 18, up: true },
    { x: 90, h: 60, body: 30, up: true },
    { x: 95, h: 45, body: 22, up: false },
  ];

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
    >
      {candles.map((c, i) => (
        <g key={i} opacity="0.08">
          <line
            x1={c.x}
            y1={100 - c.h}
            x2={c.x}
            y2={100 - c.h + c.body}
            stroke={c.up ? '#FF4D0A' : '#555'}
            strokeWidth="0.3"
          />
          <rect
            x={c.x - 1.5}
            y={100 - c.h + 5}
            width="3"
            height={c.body}
            fill={c.up ? '#FF4D0A' : '#555'}
            rx="0.5"
          />
        </g>
      ))}
    </svg>
  );
}
