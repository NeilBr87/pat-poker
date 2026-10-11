import { useCountUp, useInView } from '../../hooks.js';

// A number that counts up from zero the first time it scrolls into view.
export default function Counter({ value, prefix = '', suffix = '', className }) {
    const [ref, inView] = useInView({ threshold: 0.6 });
    const current = useCountUp(value, inView);

    return (
        <span ref={ref} className={className}>
            <span aria-hidden="true">{prefix}{current.toLocaleString('en-GB')}{suffix}</span>
            <span className="sr-only">{prefix}{value.toLocaleString('en-GB')}{suffix}</span>
        </span>
    );
}
