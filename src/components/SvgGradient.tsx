type GradientStop = {
  offset: `${number}%`;
  color: string;
};

type SvgGradientProps = {
  gradientId: string;
  stops: GradientStop[];
};

export function SvgGradient({ gradientId, stops }: SvgGradientProps) {
  return (
    <svg width={0} height={0} aria-hidden focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          {stops.map((stop, i) => (
            <stop key={i} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
      </defs>
    </svg>
  );
}
