import { contact, navLinks } from '../../content.js';
import Icon from '../Icon/Index.js';
import Reveal from '../Reveal/Index.js';
import './style.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="shell">
                <Reveal className="footer-cta">
                    <span className="footer-suits" aria-hidden="true">♠ ♥ ♣ ♦</span>
                    <h2 className="display">
                        Your next session <em>starts here.</em>
                    </h2>
                    <p className="lede">
                        Let’s review a recent hand history, map your leaks, and build a 30-day action plan you can
                        apply immediately.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Schedule a call <Icon name="arrow" />
                    </a>
                </Reveal>

                <div className="footer-bar">
                    <a href="#top" className="footer-brand">
                        <span aria-hidden="true">♠</span> Pat Poker
                    </a>
                    <nav aria-label="Footer">
                        {navLinks.map((link) => (
                            <a key={link.id} href={`#${link.id}`}>{link.label}</a>
                        ))}
                    </nav>
                    <a href={`mailto:${contact.email}`} className="footer-mail">{contact.email}</a>
                </div>

                <p className="footer-legal">
                    © {new Date().getFullYear()} Pat Poker. Please gamble responsibly · 18+ ·{' '}
                    <a href="https://www.begambleaware.org" target="_blank" rel="noreferrer">BeGambleAware.org</a>
                </p>
            </div>
        </footer>
    );
}
