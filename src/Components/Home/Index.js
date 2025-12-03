import Graph from './SharkScopeChart.png'
import './style.css'

export default function Home(props) {

        function navigate(activePage) {
        props.setPicker(activePage)
    }
    return (
        <div className="home-shell">
            <section className="hero-grid card-surface">
                <div className="hero-copy">
                    <div className="gradient-pill">
                        <span role="img" aria-label="cards">🎴</span>
                        Elite online poker coaching
                    </div>
                    <h1 className="hero-title">Out-think every table.<br />Outperform every session.</h1>
                    <p className="hero-subtext">One-on-one coaching that blends data-driven strategy with the mental game to help you read opponents faster, avoid costly leaks, and turn consistent profit.</p>
                    <div className="hero-actions">
                        <button onClick={() => navigate("getstarted")} className="primary-btn">Book your next session</button>
                        <button onClick={() => navigate("testimonials")} className="secondary-btn">See player results</button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-card">
                            <p className="stat-label">Win-rate increase</p>
                            <p className="stat-value">+18%</p>
                            <p className="stat-footnote">Average over 60 days of coaching</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-label">Students coached</p>
                            <p className="stat-value">200+</p>
                            <p className="stat-footnote">From aspiring grinders to tourney pros</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-label">Live support</p>
                            <p className="stat-value">24/7</p>
                            <p className="stat-footnote">Rapid reviews & tilt correction</p>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="graph-surface card-surface">
                        <div className="graph-header">
                            <p className="section-title">Database review</p>
                            <span className="badge-soft">HUD analysis</span>
                        </div>
                        <div className="graph-wrapper">
                            <img className="graph" src={Graph} alt="Performance graph" />
                            <div className="graph-callout card-surface">
                                <p className="stat-label">Session focus</p>
                                <p className="stat-value">Exploit and defend</p>
                                <p className="stat-footnote">Leak finder + mindset drills</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <section className="pillars">
                <div className="section-header">
                    <p className="section-title">Blueprint</p>
                    <h2 className="section-heading">Training built around your mindset</h2>
                    <p className="subtle-text">We combine live breakdowns, simplified heuristics, and accountability check-ins so you always know the next best move.</p>
                </div>
                <div className="pillar-grid">
                    <div className="pillar card-surface">
                        <div className="icon-circle">🧠</div>
                        <h3>Clarity under pressure</h3>
                        <p>Frameworks that remove guesswork, speed up decisions, and keep tilt away when pots get big.</p>
                    </div>
                    <div className="pillar card-surface">
                        <div className="icon-circle">📊</div>
                        <h3>Data-backed edges</h3>
                        <p>Hand history audits, range simplification, and HUD configuration tuned to your exact pool.</p>
                    </div>
                    <div className="pillar card-surface">
                        <div className="icon-circle">🤝</div>
                        <h3>Coaching that sticks</h3>
                        <p>Weekly goals, session reviews, and actionable drills that translate theory into confident play.</p>
                    </div>
                </div>
            </section>

            <section className="cta-panel card-surface">
                <div>
                    <p className="section-title">Next step</p>
                    <h2 className="section-heading">Ready to test-drive a session?</h2>
                    <p className="subtle-text">Let’s review a recent hand history, map leaks, and build a 30-day action plan you can apply immediately.</p>
                </div>
                <div className="cta-actions">
                    <button onClick={() => navigate("getstarted")} className="primary-btn">Schedule a call</button>
                    <button onClick={() => navigate("testimonials")} className="secondary-btn">Read client stories</button>
                </div>
            </section>
        </div>
    )
}
