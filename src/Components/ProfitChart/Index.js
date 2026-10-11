import { useMemo, useState } from 'react';
import { useInView, useMediaQuery } from '../../hooks.js';
import './style.css';

// Phones get a narrower canvas so the labels stay legible when scaled down.
const LAYOUTS = {
    wide: { W: 800, H: 380, PAD: { top: 24, right: 20, bottom: 40, left: 58 }, xTicks: [0, 500, 1000, 1500, 2000, 2500] },
    compact: { W: 400, H: 300, PAD: { top: 16, right: 12, bottom: 34, left: 48 }, xTicks: [0, 1000, 2000] },
};
const Y_MIN = -50;
const Y_MAX = 480;
const Y_TICKS = [0, 100, 200, 300, 400];

// Deterministic pseudo-random noise so the line has realistic variance
// without changing between renders.
function noise(seed) {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
}

// Fills in the traced key points with small swings between them.
function densify(points) {
    const dense = [];
    points.forEach(([x, y], index) => {
        const next = points[index + 1];
        dense.push({ x, y });
        if (!next) return;
        const steps = Math.floor((next[0] - x) / 9);
        for (let step = 1; step < steps; step++) {
            const t = step / steps;
            const wobble = (noise(x + step) - 0.5) * 7 * Math.sin(Math.PI * t);
            dense.push({ x: x + (next[0] - x) * t, y: y + (next[1] - y) * t + wobble });
        }
    });
    return dense;
}

const formatK = (value) => {
    const k = Math.round(value);
    return k === 0 ? '£0' : `${k < 0 ? '−' : ''}£${Math.abs(k)}K`;
};

export default function ProfitChart({ data }) {
    const [ref, inView] = useInView({ threshold: 0.35 });
    const [hover, setHover] = useState(null);
    const compact = useMediaQuery('(max-width: 640px)');
    const { W, H, PAD, xTicks } = LAYOUTS[compact ? 'compact' : 'wide'];

    const { line, area, series, wins, sx, sy } = useMemo(() => {
        const maxX = data[data.length - 1][0];
        const sx = (x) => PAD.left + (x / maxX) * (W - PAD.left - PAD.right);
        const sy = (y) => PAD.top + ((Y_MAX - y) / (Y_MAX - Y_MIN)) * (H - PAD.top - PAD.bottom);

        const series = densify(data);
        const line = series.map((p, i) => `${i ? 'L' : 'M'}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`).join('');
        const area = `${line}L${sx(maxX)},${sy(Y_MIN)}L${sx(0)},${sy(Y_MIN)}Z`;
        const wins = data.filter((point) => point[2] === 'win').map(([x, y]) => ({ x, y }));

        return { line, area, series, wins, sx, sy };
    }, [data, W, H, PAD]);

    const onPointerMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = ((event.clientX - rect.left) / rect.width) * W;
        let nearest = series[0];
        for (const point of series) {
            if (Math.abs(sx(point.x) - px) < Math.abs(sx(nearest.x) - px)) nearest = point;
        }
        setHover(nearest);
    };

    const last = data[data.length - 1];

    return (
        <figure ref={ref} className={`profit-chart ${inView ? 'is-drawn' : ''}`}>
            <svg
                viewBox={`0 0 ${W} ${H}`}
                role="img"
                aria-labelledby="profit-chart-title"
                onPointerMove={onPointerMove}
                onPointerLeave={() => setHover(null)}
            >
                <title id="profit-chart-title">
                    {`Cumulative profit rising from £0 to ${formatK(last[1])} over ${last[0].toLocaleString('en-GB')} tournaments, with ${wins.length} significant wins.`}
                </title>
                <defs>
                    <linearGradient id="pc-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#e3c27a" stopOpacity="0.32" />
                        <stop offset="70%" stopColor="#e3c27a" stopOpacity="0.03" />
                        <stop offset="100%" stopColor="#e3c27a" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="pc-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#b48a3c" />
                        <stop offset="60%" stopColor="#e3c27a" />
                        <stop offset="100%" stopColor="#fff1c9" />
                    </linearGradient>
                    <filter id="pc-glow" x="-10%" y="-10%" width="120%" height="120%">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                </defs>

                <g className="pc-grid">
                    {Y_TICKS.map((tick) => (
                        <g key={tick}>
                            <line x1={PAD.left} x2={W - PAD.right} y1={sy(tick)} y2={sy(tick)} className={tick === 0 ? 'is-zero' : ''} />
                            <text x={PAD.left - 12} y={sy(tick)} dy="0.35em" textAnchor="end">{formatK(tick)}</text>
                        </g>
                    ))}
                    {xTicks.map((tick) => (
                        <text key={tick} x={sx(tick)} y={H - PAD.bottom + 24} textAnchor="middle">
                            {tick.toLocaleString('en-GB')}
                        </text>
                    ))}
                </g>

                <path className="pc-area" d={area} fill="url(#pc-area)" />
                <path className="pc-line-glow" d={line} pathLength="1" filter="url(#pc-glow)" />
                <path className="pc-line" d={line} pathLength="1" stroke="url(#pc-line)" />

                {wins.map((win, index) => (
                    <g
                        key={win.x}
                        className="pc-win"
                        transform={`translate(${sx(win.x)} ${sy(win.y)})`}
                        style={{ '--d': `${400 + (win.x / last[0]) * 2000}ms`, '--p': `${index * 0.3}s` }}
                    >
                        <circle className="pc-win-ring" r="9" />
                        <circle className="pc-win-dot" r="4" />
                    </g>
                ))}

                <g className="pc-end" transform={`translate(${sx(last[0])} ${sy(last[1])})`}>
                    <circle r="6" />
                </g>

                {hover && (
                    <g className="pc-hover">
                        <line x1={sx(hover.x)} x2={sx(hover.x)} y1={PAD.top} y2={H - PAD.bottom} />
                        <circle cx={sx(hover.x)} cy={sy(hover.y)} r="5.5" />
                    </g>
                )}
            </svg>

            {hover && (
                <div
                    className="pc-tooltip"
                    style={{ left: `${(sx(hover.x) / W) * 100}%`, top: `${(sy(hover.y) / H) * 100}%` }}
                    aria-hidden="true"
                >
                    <strong>{formatK(hover.y)}</strong>
                    <span>Game {Math.round(hover.x).toLocaleString('en-GB')}</span>
                </div>
            )}
        </figure>
    );
}
