import { useEffect, useRef, useState } from 'react';

const canObserve = typeof window !== 'undefined' && 'IntersectionObserver' in window;

export function prefersReducedMotion() {
    return typeof window !== 'undefined'
        && typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Flips to true the first time the element scrolls into view.
export function useInView({ threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(!canObserve);

    useEffect(() => {
        const node = ref.current;
        if (!node || inView) return undefined;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { threshold, rootMargin });

        observer.observe(node);
        return () => observer.disconnect();
    }, [inView, threshold, rootMargin]);

    return [ref, inView];
}

// Eases a number from 0 to `target` once `start` is true.
export function useCountUp(target, start, duration = 1600) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return undefined;
        if (prefersReducedMotion()) {
            setValue(target);
            return undefined;
        }

        let frame;
        const began = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - began) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setValue(Math.round(target * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [target, start, duration]);

    return value;
}

// Returns the id of the section currently nearest the top of the viewport.
export function useScrollSpy(ids, offset = 140) {
    const [active, setActive] = useState(null);

    useEffect(() => {
        const update = () => {
            let current = null;
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
            }
            setActive(current);
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [ids, offset]);

    return active;
}

export function useScrolledPast(px = 12) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const update = () => setScrolled(window.scrollY > px);
        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, [px]);

    return scrolled;
}

export function useMediaQuery(query) {
    const get = () => typeof window !== 'undefined'
        && typeof window.matchMedia === 'function'
        && window.matchMedia(query).matches;
    const [matches, setMatches] = useState(get);

    useEffect(() => {
        if (typeof window.matchMedia !== 'function') return undefined;
        const list = window.matchMedia(query);
        const update = () => setMatches(list.matches);
        update();
        list.addEventListener('change', update);
        return () => list.removeEventListener('change', update);
    }, [query]);

    return matches;
}
