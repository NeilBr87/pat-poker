import { useEffect, useState } from 'react';
import { navLinks } from '../../content.js';
import { useScrollSpy, useScrolledPast } from '../../hooks.js';
import Icon from '../Icon/Index.js';
import './style.css';

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const scrolled = useScrolledPast();
    const active = useScrollSpy(sectionIds);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        if (!open) return undefined;

        const onKey = (event) => event.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
            <div className="nav-inner shell">
                <a href="#top" className="nav-brand" onClick={close}>
                    <span className="nav-brand-mark" aria-hidden="true">♠</span>
                    Pat Poker
                </a>

                <nav className="nav-links" aria-label="Primary">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={active === link.id ? 'is-active' : undefined}
                            aria-current={active === link.id ? 'location' : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a href="#contact" className="btn btn-primary nav-cta">
                    Book a session
                </a>

                <button
                    type="button"
                    className="nav-toggle"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((value) => !value)}
                >
                    <Icon name={open ? 'close' : 'menu'} />
                    <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                </button>
            </div>

            <div id="mobile-menu" className="nav-drawer" hidden={!open}>
                <nav aria-label="Mobile">
                    {navLinks.map((link, index) => (
                        <a key={link.id} href={`#${link.id}`} onClick={close} style={{ '--i': index }}>
                            <span className="nav-drawer-index" aria-hidden="true">0{index + 1}</span>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a href="#contact" className="btn btn-primary" onClick={close}>
                    Book a session <Icon name="arrow" />
                </a>
            </div>
        </header>
    );
}
