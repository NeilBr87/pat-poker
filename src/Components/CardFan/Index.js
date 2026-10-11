import { useRef } from 'react';
import { prefersReducedMotion } from '../../hooks.js';
import './style.css';

const royalFlush = ['10', 'J', 'Q', 'K', 'A'];

function PlayingCard({ rank, index }) {
    const isFace = ['J', 'Q', 'K', 'A'].includes(rank);

    return (
        <div className="playing-card" style={{ '--i': index - 2 }}>
            <div className="playing-card-face">
                <span className="pc-corner">{rank}<i>♠</i></span>
                <span className={`pc-center ${isFace ? 'is-face' : ''}`}>
                    {isFace ? rank : '♠'}
                </span>
                <span className="pc-corner pc-corner-bottom">{rank}<i>♠</i></span>
            </div>
        </div>
    );
}

// A royal flush fanned out, tilting gently towards the pointer.
export default function CardFan() {
    const ref = useRef(null);

    const onPointerMove = (event) => {
        if (prefersReducedMotion() || event.pointerType === 'touch') return;
        const rect = ref.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        ref.current.style.setProperty('--ry', `${x * 16}deg`);
        ref.current.style.setProperty('--rx', `${y * -12}deg`);
    };

    const onPointerLeave = () => {
        ref.current.style.setProperty('--ry', '0deg');
        ref.current.style.setProperty('--rx', '0deg');
    };

    return (
        <div
            className="card-fan"
            ref={ref}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
            role="img"
            aria-label="A royal flush in spades"
        >
            <div className="card-fan-glow" />
            <div className="card-fan-stage">
                {royalFlush.map((rank, index) => (
                    <PlayingCard key={rank} rank={rank} index={index} />
                ))}
            </div>
            <div className="chip chip-a" />
            <div className="chip chip-b" />
            <div className="chip chip-c" />
        </div>
    );
}
