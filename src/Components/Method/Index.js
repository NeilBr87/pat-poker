import { pillars } from '../../content.js';
import Icon from '../Icon/Index.js';
import Reveal from '../Reveal/Index.js';
import './style.css';

const hudStats = [
    { label: 'VPIP', value: 24, max: 50 },
    { label: 'PFR', value: 19, max: 50 },
    { label: '3-Bet', value: 8, max: 20 },
    { label: 'Fold to C-bet', value: 62, max: 100, leak: true },
];

// Moves a soft spotlight under the pointer on whichever card it is over.
function trackSpotlight(event) {
    const card = event.target.closest('.method-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
}

export default function Method() {
    return (
        <section id="method" className="section method">
            <div className="shell">
                <Reveal className="section-header">
                    <p className="eyebrow">The method</p>
                    <h2 className="display">
                        Training built around <em>your</em> mindset.
                    </h2>
                    <p className="lede">
                        Live breakdowns, simplified heuristics, and accountability check-ins — so you always know
                        the next best move.
                    </p>
                </Reveal>

                <div className="method-grid" onPointerMove={trackSpotlight}>
                    <Reveal className="method-card method-feature card">
                        <div className="method-feature-copy">
                            <span className="method-icon"><Icon name="target" /></span>
                            <h3>Exploit and defend</h3>
                            <p>
                                Every session pairs a leak finder with mindset drills. We dig through your database,
                                find where money is leaking, and build the exploits to win it back.
                            </p>
                        </div>
                        <div className="hud" aria-label="Example HUD review">
                            <div className="hud-head">
                                <span>Database review</span>
                                <span className="hud-tag">HUD analysis</span>
                            </div>
                            {hudStats.map((stat, index) => (
                                <div className={`hud-row ${stat.leak ? 'is-leak' : ''}`} key={stat.label}>
                                    <span className="hud-label">{stat.label}</span>
                                    <span className="hud-bar">
                                        <i style={{ '--v': stat.value / stat.max, '--i': index }} />
                                    </span>
                                    <span className="hud-value">{stat.value}</span>
                                </div>
                            ))}
                            <p className="hud-note">
                                <span className="hud-flag">Leak</span> Over-folding to continuation bets
                            </p>
                        </div>
                    </Reveal>

                    {pillars.map((pillar, index) => (
                        <Reveal className="method-card card" key={pillar.title} delay={(index + 1) * 90}>
                            <span className="method-icon"><Icon name={pillar.icon} /></span>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.body}</p>
                        </Reveal>
                    ))}

                    <Reveal className="method-card method-speed card" delay={360}>
                        <span className="method-icon"><Icon name="bolt" /></span>
                        <div>
                            <h3>24h turnaround</h3>
                            <p>Hand histories and HUD tweaks reviewed fast, so you can apply them the same night.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
