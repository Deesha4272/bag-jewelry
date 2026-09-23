import { useId } from 'react';

// Illustrated product render: a knotted silk twilly with its charm cluster.
// Stands in for product photography while the pieces are still prototypes.

const RING = { x: 150, y: 62, r: 20 };
const ANCHOR = { x: 166, y: 76 };

function Tail({ colors, length, rotate, fold }) {
  const w = 46;
  const cut = 34;
  const inset = 6;
  const outline = `M ${-w / 2} 0 L ${w / 2} 0 L ${w / 2} ${length} L 0 ${length + cut} L ${-w / 2} ${length} Z`;
  const border = `M ${-w / 2 + inset} 0 L ${-w / 2 + inset} ${length - 1} L 0 ${length + cut - 9} L ${w / 2 - inset} ${length - 1} L ${w / 2 - inset} 0`;
  const motifs = [];
  for (let y = 34; y < length - 6; y += 40) motifs.push(y);

  return (
    <g transform={`translate(150 112) rotate(${rotate})`}>
      <path d={outline} fill={colors.base} />
      <path d={border} fill="none" stroke={colors.border} strokeWidth="1.6" />
      <path
        d={`M ${-w / 2 + inset + 3} 0 L ${-w / 2 + inset + 3} ${length - 3} L 0 ${length + cut - 14} L ${w / 2 - inset - 3} ${length - 3} L ${w / 2 - inset - 3} 0`}
        fill="none"
        stroke={colors.border}
        strokeWidth="0.6"
        opacity="0.7"
      />
      {motifs.map((y) => (
        <g key={y} transform={`translate(0 ${y})`} fill={colors.motif}>
          <path d="M0 -9 C 6 -4, 6.5 3, 0 8 C -6.5 3, -6 -4, 0 -9 Z" opacity="0.9" />
          <circle r="1.6" cy="1" fill={colors.base} />
          <circle r="0.9" cy="-12" />
        </g>
      ))}
      <path d={outline} fill={fold} />
    </g>
  );
}

function Charm({ type, gold }) {
  switch (type) {
    case 'bead':
      return <circle r="6.5" cy="6" fill={gold} />;
    case 'pearl':
      return <circle r="5.5" cy="5" fill="#F6F0E4" stroke="#D9CBB0" strokeWidth="0.6" />;
    case 'bell':
      return (
        <g>
          <circle r="7.5" cy="8" fill={gold} />
          <path d="M -4.5 10 L 4.5 10" stroke="#6E5530" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      );
    case 'chili':
      return (
        <g>
          <path d="M -2 0 L 3 0 L 2 5 L -1 5 Z" fill="#56643F" />
          <path
            d="M -3 5 C 4 3, 7 10, 6 22 C 5 34, 0 44, -6 48 C -2 38, -3 26, -5 16 C -6 10, -6 6, -3 5 Z"
            fill="#7C2127"
          />
          <path d="M 1 9 C 3 16, 2 26, 0 32" stroke="#A8494C" strokeWidth="1" fill="none" opacity="0.7" />
        </g>
      );
    case 'jhumka':
      return (
        <g>
          <circle r="4" cy="3" fill={gold} />
          <path d="M -13 24 C -13 12, 13 12, 13 24 Z" fill={gold} />
          <path d="M -13 24 L 13 24" stroke="#7A6036" strokeWidth="0.8" />
          {[-10, -5, 0, 5, 10].map((x) => (
            <circle key={x} cx={x} cy="29" r="2" fill={gold} />
          ))}
        </g>
      );
    case 'lotus':
      return (
        <g fill="none" stroke={gold} strokeWidth="2.2" strokeLinejoin="round" transform="translate(0 4)">
          <path d="M 0 0 C 8 9, 8 22, 0 30 C -8 22, -8 9, 0 0 Z" />
          <path d="M 0 30 C -4 18, -12 10, -20 8 C -20 18, -12 28, 0 30 Z" />
          <path d="M 0 30 C 4 18, 12 10, 20 8 C 20 18, 12 28, 0 30 Z" />
          <path d="M 0 30 C -10 26, -22 24, -30 20 C -26 30, -14 34, 0 30 Z" />
          <path d="M 0 30 C 10 26, 22 24, 30 20 C 26 30, 14 34, 0 30 Z" />
          <path d="M -22 36 C -8 40, 8 40, 22 36" />
        </g>
      );
    case 'paisley':
      return (
        <g transform="translate(0 2)">
          <path
            d="M 2 0 C 16 6, 18 26, 6 38 C -4 46, -18 40, -16 28 C -14 18, -2 18, -2 10 C -2 6, -1 2, 2 0 Z"
            fill="none"
            stroke={gold}
            strokeWidth="2.2"
          />
          <circle cx="-4" cy="30" r="3" fill={gold} />
          <circle cx="4" cy="22" r="1.6" fill={gold} />
        </g>
      );
    default:
      return null;
  }
}

export default function ScarfArt({ scarf, charms, title }) {
  const uid = useId().replace(/:/g, '');
  const gold = `url(#gold-${uid})`;
  const fold = `url(#fold-${uid})`;

  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={title} className="scarf-art">
      <defs>
        <linearGradient id={`gold-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E3CD9E" />
          <stop offset="0.5" stopColor="#B99A62" />
          <stop offset="1" stopColor="#8A6E42" />
        </linearGradient>
        <linearGradient id={`fold-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.14" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="1" stopColor="#000" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* chains */}
      {charms.map((c, i) => (
        <path
          key={i}
          d={`M ${ANCHOR.x} ${ANCHOR.y} Q ${(ANCHOR.x + c.x) / 2 - 4} ${(ANCHOR.y + c.y) / 2 + 6} ${c.x} ${c.y}`}
          fill="none"
          stroke="#A98C58"
          strokeWidth="1.1"
          strokeDasharray="2.2 1.4"
        />
      ))}

      <Tail colors={scarf} length={236} rotate={15} fold={fold} />
      <Tail colors={scarf} length={204} rotate={-6} fold={fold} />

      {/* ring, wrap and knot */}
      <circle cx={RING.x} cy={RING.y} r={RING.r} fill="none" stroke={gold} strokeWidth="5" />
      <rect x="139" y="72" width="22" height="42" rx="7" fill={scarf.base} />
      <path d="M 139 92 L 161 88" stroke={scarf.border} strokeWidth="1.2" />
      <ellipse cx="150" cy="114" rx="21" ry="13" fill={scarf.base} />
      <ellipse cx="150" cy="114" rx="21" ry="13" fill={fold} />
      <path d="M 134 110 C 142 118, 158 118, 166 110" stroke={scarf.border} strokeWidth="1.2" fill="none" />
      <circle cx={ANCHOR.x} cy={ANCHOR.y} r="6" fill="none" stroke={gold} strokeWidth="2.5" />

      {charms.map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y})`}>
          <Charm type={c.type} gold={gold} />
        </g>
      ))}
    </svg>
  );
}
