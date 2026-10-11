import { Fragment } from 'react';
import { heroStats } from '../../content.js';
import CardFan from '../CardFan/Index.js';
import Counter from '../Counter/Index.js';
import Icon from '../Icon/Index.js';
import './style.css';

const headline = [
    ['Out-think', 'every', 'table.'],
    [<em key="em">Outperform</em>, 'every', 'session.'],
];

export default function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-backdrop" aria-hidden="true" />

            <div className="hero-inner shell">
                <div className="hero-copy">
                    <p className="hero-badge">
                        <span className="hero-badge-dot" />
                        Elite online poker coaching · Now booking
                    </p>

                    <h1 className="hero-title display">
                        {headline.map((line, lineIndex) => (
                            <span className="hero-line" key={lineIndex}>
                                {line.map((text, wordIndex) => (
                                    <Fragment key={wordIndex}>
                                        <span className="hero-word" style={{ '--w': lineIndex * 3 + wordIndex }}>
                                            {text}
                                        </span>{' '}
                                    </Fragment>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <p className="lede hero-lede">
                        One-on-one coaching that blends data-driven strategy with the mental game — so you
                        read opponents faster, plug costly leaks, and turn sessions into consistent profit.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Book your next session <Icon name="arrow" />
                        </a>
                        <a href="#results" className="btn btn-ghost">
                            See the results
                        </a>
                    </div>

                    <dl className="hero-stats">
                        {heroStats.map((stat) => (
                            <div className="hero-stat" key={stat.label}>
                                <dt>{stat.label}</dt>
                                <dd>
                                    <Counter className="hero-stat-value" value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                    <span className="hero-stat-note">{stat.footnote}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="hero-visual">
                    <CardFan />
                    <div className="hero-float card">
                        <span className="hero-float-label">Career profit</span>
                        <span className="hero-float-value">£435K+</span>
                        <span className="hero-float-note">
                            <svg viewBox="0 0 60 18" aria-hidden="true">
                                <path d="M1 16 L10 14 L16 15 L22 9 L30 10 L36 6 L44 7 L50 3 L59 2" />
                            </svg>
                            Tracked on SharkScope
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
