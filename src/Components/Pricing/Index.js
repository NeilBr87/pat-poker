import { contact, pricing } from '../../content.js';
import ContactForm from '../ContactForm/Index.js';
import Counter from '../Counter/Index.js';
import Icon from '../Icon/Index.js';
import Reveal from '../Reveal/Index.js';
import './style.css';

const whatsappLink = `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`;

export default function Pricing() {
    return (
        <section id="pricing" className="section pricing">
            <div className="shell">
                <Reveal className="section-header centered">
                    <p className="eyebrow">Get started</p>
                    <h2 className="display">
                        Build a plan tailored <em>to your tables.</em>
                    </h2>
                    <p className="lede">
                        Share your goals, stakes, and recent hands. We’ll craft a 30-day program with weekly reviews,
                        live sweat sessions, and mindset drills that keep you disciplined.
                    </p>
                </Reveal>

                <div className="pricing-grid">
                    <Reveal className="price-card card">
                        <p className="price-tag">One-on-one coaching</p>
                        <p className="price-amount">
                            <Counter value={pricing.rate} prefix="£" />
                            <span>{pricing.unit}</span>
                        </p>
                        <p className="price-summary">{pricing.summary}</p>
                        <ul className="price-features">
                            {pricing.features.map((feature) => (
                                <li key={feature}>
                                    <span className="price-check"><Icon name="check" /></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="price-direct">
                            <a href={`mailto:${contact.email}`}>
                                <Icon name="mail" /> {contact.email}
                            </a>
                            <a href={whatsappLink} target="_blank" rel="noreferrer">
                                <Icon name="phone" /> WhatsApp {contact.whatsapp}
                            </a>
                        </div>
                    </Reveal>

                    <Reveal id="contact" className="contact-card card" delay={120}>
                        <h3>Reserve your spot</h3>
                        <p className="contact-intro">
                            Tell me where you play and what you want to fix. I’ll reply within 24 hours to book a
                            discovery call.
                        </p>
                        <ContactForm />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
