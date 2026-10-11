import { useState } from 'react';
import { testimonials } from '../../content.js';
import Reveal from '../Reveal/Index.js';
import './style.css';

const ROTATE_MS = 7000;

const initials = (name) => name.split(' ').map((part) => part[0]).join('');

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    // The active tab's progress bar drives rotation, so pausing the
    // animation (hover/focus) also pauses the carousel.
    const next = () => setActive((index) => (index + 1) % testimonials.length);

    const featured = testimonials[active];

    return (
        <section id="testimonials" className="section testimonials">
            <div className="shell">
                <Reveal className="section-header">
                    <p className="eyebrow">Player stories</p>
                    <h2 className="display">
                        Players doubling down <em>on their edge.</em>
                    </h2>
                </Reveal>

                <Reveal
                    className="quote-stage card"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                >
                    <span className="quote-mark" aria-hidden="true">“</span>

                    <figure className="quote-featured" key={active}>
                        <div className="quote-stars" aria-label="Rated 5 out of 5">★★★★★</div>
                        <blockquote>{featured.quote}</blockquote>
                        <figcaption>
                            <span className="quote-avatar" aria-hidden="true">{initials(featured.name)}</span>
                            <span>
                                <strong>{featured.name}</strong>
                                <span>{featured.role}</span>
                            </span>
                            <span className="quote-result">{featured.result}</span>
                        </figcaption>
                    </figure>

                    <div className="quote-tabs" aria-label="Choose a testimonial">
                        {testimonials.map((item, index) => (
                            <button
                                key={item.name}
                                type="button"
                                aria-pressed={index === active}
                                className={`quote-tab ${index === active ? 'is-active' : ''}`}
                                onClick={() => setActive(index)}
                                style={{ '--duration': `${ROTATE_MS}ms` }}
                            >
                                <span className="quote-tab-name">{item.name}</span>
                                <span className="quote-tab-role">{item.role}</span>
                                <span
                                    className={`quote-tab-progress ${paused ? 'is-paused' : ''}`}
                                    onAnimationEnd={index === active ? next : undefined}
                                />
                            </button>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
