import { useState } from 'react';
import { faqs } from '../../content.js';
import Icon from '../Icon/Index.js';
import Reveal from '../Reveal/Index.js';
import './style.css';

export default function Faq() {
    const [open, setOpen] = useState(0);

    return (
        <section id="faq" className="section faq">
            <div className="shell faq-inner">
                <Reveal className="section-header">
                    <p className="eyebrow">FAQ</p>
                    <h2 className="display">
                        Questions, <em>answered.</em>
                    </h2>
                    <p className="lede">
                        Anything else on your mind? <a href="#contact">Send a message</a> and you’ll hear back within
                        a day.
                    </p>
                </Reveal>

                <Reveal className="faq-list" delay={100}>
                    {faqs.map((item, index) => {
                        const isOpen = open === index;
                        return (
                            <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                                <h3>
                                    <button
                                        type="button"
                                        id={`faq-q-${index}`}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-a-${index}`}
                                        onClick={() => setOpen(isOpen ? null : index)}
                                    >
                                        {item.q}
                                        <span className="faq-icon"><Icon name="plus" /></span>
                                    </button>
                                </h3>
                                <div
                                    id={`faq-a-${index}`}
                                    role="region"
                                    aria-labelledby={`faq-q-${index}`}
                                    className="faq-answer"
                                    inert={isOpen ? undefined : true}
                                >
                                    <div>
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
