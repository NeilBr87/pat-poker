import { processSteps } from '../../content.js';
import { useInView } from '../../hooks.js';
import Reveal from '../Reveal/Index.js';
import './style.css';

// The community cards revealed street by street.
const board = [
    { rank: 'A', suit: '♥' },
    { rank: 'K', suit: '♣' },
    { rank: '7', suit: '♦' },
    { rank: 'Q', suit: '♠' },
    { rank: 'J', suit: '♥' },
];
const cardsOnStreet = [0, 3, 4, 5];

function Board({ shown }) {
    return (
        <div className="mini-board" aria-hidden="true">
            {board.map((card, index) => {
                const red = card.suit === '♥' || card.suit === '♦';
                return index < shown ? (
                    <span key={index} className={`mini-card ${red ? 'is-red' : ''}`} style={{ '--c': index }}>
                        {card.rank}
                        <i>{card.suit}</i>
                    </span>
                ) : (
                    <span key={index} className="mini-card is-empty" />
                );
            })}
        </div>
    );
}

export default function Process() {
    const [ref, inView] = useInView({ threshold: 0.3 });

    return (
        <section id="process" className="section process">
            <div className="shell">
                <Reveal className="section-header centered">
                    <p className="eyebrow">How it works</p>
                    <h2 className="display">
                        From first hand <em>to river.</em>
                    </h2>
                    <p className="lede">
                        A structured path that turns your hand histories into a plan — and your plan into results.
                    </p>
                </Reveal>

                <ol ref={ref} className={`process-track ${inView ? 'is-live' : ''}`}>
                    {processSteps.map((step, index) => (
                        <li key={step.street} className="process-step" style={{ '--s': index }}>
                            <span className="process-node" aria-hidden="true">{index + 1}</span>
                            <div className="process-body card">
                                <p className="process-street">{step.street}</p>
                                <Board shown={cardsOnStreet[index]} />
                                <h3>{step.title}</h3>
                                <p>{step.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
