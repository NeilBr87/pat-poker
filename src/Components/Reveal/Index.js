import { useInView } from '../../hooks.js';

// Fades and lifts its children in the first time they scroll into view.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
    const [ref, inView] = useInView();

    return (
        <Tag
            ref={ref}
            className={`reveal ${inView ? 'is-visible' : ''} ${className}`.trim()}
            style={{ ...style, '--delay': `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
