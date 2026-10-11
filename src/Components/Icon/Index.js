// Small inline stroke icon set, so the site needs no icon-font dependency.
const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    plus: <path d="M12 5v14M5 12h14" />,
    menu: <path d="M4 7h16M4 12h16M4 17h10" />,
    close: <path d="M6 6l12 12M18 6L6 18" />,
    mail: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="M4 7l8 6 8-6" />
        </>
    ),
    phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 014.5 5.5a2 2 0 012-2z" />,
    brain: (
        <>
            <path d="M9 4.5a3 3 0 00-3 3v.3A3 3 0 004 10.5a3 3 0 001 2.2A3.2 3.2 0 006.5 17 3 3 0 009 19.5a3 3 0 003-3v-9a3 3 0 00-3-3z" />
            <path d="M15 4.5a3 3 0 013 3v.3a3 3 0 012 2.7 3 3 0 01-1 2.2 3.2 3.2 0 01-1.5 4.3A3 3 0 0115 19.5a3 3 0 01-3-3" />
        </>
    ),
    chart: (
        <>
            <path d="M4 4v16h16" />
            <path d="M7.5 15l3.5-4 3 2.5L19.5 7" />
        </>
    ),
    handshake: (
        <>
            <path d="M3 11l4-4 4 2 3-2 3 1 4 3" />
            <path d="M7 13l3 3a1.5 1.5 0 002-2M10 16l1.5 1.5a1.5 1.5 0 002-2M13.5 15.5l.5.5a1.5 1.5 0 002-2l-3.5-3.5" />
        </>
    ),
    target: (
        <>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="0.8" fill="currentColor" />
        </>
    ),
    bolt: <path d="M13 3L5 13.5h6L10 21l9-11h-6l1-7z" />,
    external: <path d="M14 5h5v5M19 5l-8 8M10 5H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1v-4" />,
};

export default function Icon({ name, className, title }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden={title ? undefined : true}
            role={title ? 'img' : undefined}
        >
            {title && <title>{title}</title>}
            {paths[name]}
        </svg>
    );
}
