import Graph from '../Home/SharkScopeChart.png'
import './style.css'
export default function MobHome(props) {

    function navigate(activePage) {
        props.setPicker(activePage)
    }

    return (
        <div className="mob-shell">
            <div className="mob-hero card-surface">
                <div className="gradient-pill">Pocket a smarter edge</div>
                <h1>Master the opposition.</h1>
                <p className="subtle-text">Coaching built for mobile grinders: fast hand reviews, actionable heuristics, and support when you need it most.</p>
                <button onClick={() => navigate("getstarted")} className="primary-btn">Get started</button>
                <button onClick={() => navigate("testimonials")} className="secondary-btn">See results</button>
                <img className="mobGraph" src={Graph} alt="Graph" />
            </div>
            <div className="mob-highlight card-surface">
                <p className="section-title">What to expect</p>
                <div className="mob-grid">
                    <div className="infoColMob">
                        <b>Ongoing support</b>
                        <p>Consistent monitoring across training sessions and live games</p>
                    </div>
                    <div className="infoColMob">
                        <b>A solid choice</b>
                        <p>Over 200 former clients at a range of skill levels and strengths</p>
                    </div>
                    <div className="infoColMob">
                        <b>All skill levels</b>
                        <p>From beginners to professionals looking to bring things to the next level</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
