// All copy for the site lives here so components stay purely presentational.

export const navLinks = [
    { id: 'results', label: 'Results' },
    { id: 'method', label: 'Method' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
];

export const heroStats = [
    { value: 18, prefix: '+', suffix: '%', label: 'Win-rate increase', footnote: 'Average over 60 days of coaching' },
    { value: 200, suffix: '+', label: 'Students coached', footnote: 'From aspiring grinders to tourney pros' },
    { value: 24, suffix: '/7', label: 'Live support', footnote: 'Rapid reviews & tilt correction' },
];

export const marqueeTopics = [
    'Hand history audits',
    'Range simplification',
    'HUD configuration',
    'Exploitative adjustments',
    'Mental game & tilt control',
    'Live-game sweats',
    'Leak finding',
    'Bankroll discipline',
];

// Cumulative profit (£K) against games played, traced from Pat's SharkScope
// "Total Profit" graph. `win` marks the significant-win spikes.
export const profitCurve = [
    [0, 0], [50, -20], [60, 0], [100, -10], [200, -20], [290, -38], [330, -18],
    [380, -12], [450, 0], [500, -10], [510, 15], [560, 5], [620, 28], [700, 18],
    [730, 25], [735, 52, 'win'], [760, 42], [765, 138, 'win'], [800, 128],
    [880, 120], [900, 145], [950, 128], [1000, 132], [1100, 108], [1110, 125],
    [1160, 118], [1165, 155, 'win'], [1190, 150], [1200, 188, 'win'], [1300, 175],
    [1310, 198], [1400, 180], [1500, 160], [1510, 175], [1600, 172], [1620, 195],
    [1700, 180], [1800, 168], [1890, 163], [1930, 165], [1940, 210, 'win'],
    [1970, 214], [1980, 240, 'win'], [1990, 325, 'win'], [2050, 305], [2110, 290],
    [2115, 378, 'win'], [2150, 372], [2250, 362], [2350, 352], [2360, 375],
    [2400, 365], [2470, 390], [2500, 385], [2505, 428, 'win'], [2550, 422],
    [2600, 425], [2620, 446], [2680, 435],
];

export const pillars = [
    {
        icon: 'brain',
        title: 'Clarity under pressure',
        body: 'Frameworks that remove guesswork, speed up decisions, and keep tilt away when pots get big.',
    },
    {
        icon: 'chart',
        title: 'Data-backed edges',
        body: 'Hand history audits, range simplification, and HUD configuration tuned to your exact pool.',
    },
    {
        icon: 'handshake',
        title: 'Coaching that sticks',
        body: 'Weekly goals, session reviews, and actionable drills that translate theory into confident play.',
    },
];

export const processSteps = [
    {
        street: 'Pre-flop',
        title: 'Discovery call',
        body: 'Share your goals, stakes, and recent hands so we know exactly where you are starting from.',
    },
    {
        street: 'Flop',
        title: 'Database review',
        body: 'A deep audit of your hand histories and HUD stats to map the leaks that cost you the most.',
    },
    {
        street: 'Turn',
        title: '30-day action plan',
        body: 'Weekly reviews, live sweat sessions, and mindset drills built around the leaks we found.',
    },
    {
        street: 'River',
        title: 'Review & refine',
        body: 'Accountability check-ins and fresh data keep the plan sharp as your game — and stakes — grow.',
    },
];

export const testimonials = [
    {
        name: 'Liv R.',
        role: 'Cash game regular',
        quote: 'Patrick gave me a whole new way of looking at the game. My profit ratio has been insane.',
        result: 'Bankroll up 32% over 90 days',
    },
    {
        name: 'Chris M.',
        role: 'Tournament grinder',
        quote: 'Best coaching out there. Sessions are structured, actionable, and remove the mental noise.',
        result: 'Final-tabled 3 majors this quarter',
    },
    {
        name: 'Sasha K.',
        role: 'Mixed stakes',
        quote: "Can't be beaten. Patrick spots leaks instantly and keeps me accountable every week.",
        result: 'Confidence + consistency restored',
    },
];

export const pricing = {
    rate: 300,
    unit: 'per hour',
    summary: 'Book in blocks of four sessions. Every block includes session prep notes and live-game sweats.',
    features: [
        'One-on-one sessions tailored to your games',
        'Session prep notes & hand review summaries',
        'Live-game sweats while you play',
        '24h turnaround on hand histories and HUD tweaks',
        'Mindset drills & accountability check-ins',
    ],
};

export const contact = {
    email: 'patemail@gmail.com',
    whatsapp: '+44 7711 111111',
};

export const faqs = [
    {
        q: 'Who is the coaching for?',
        a: 'All skill levels — from beginners building solid fundamentals to professionals looking to take their game to the next level.',
    },
    {
        q: 'Do you coach cash games and tournaments?',
        a: 'Yes. Students range from cash game regulars to tournament grinders and mixed-stakes players, and every plan is built around the formats you actually play.',
    },
    {
        q: 'What should I bring to the first session?',
        a: 'Your goals, the stakes you play, and a batch of recent hand histories. If you use a HUD or tracking database, bring that too so we can review your stats together.',
    },
    {
        q: 'How quickly do you review hands?',
        a: 'Hand histories and HUD tweaks are turned around within 24 hours, so you can apply the feedback in your very next session.',
    },
    {
        q: 'How do I book?',
        a: 'Send a message using the form below, by email, or on WhatsApp. We will set up a discovery call and map out your first block of sessions.',
    },
];
