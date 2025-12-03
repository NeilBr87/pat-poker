import './style.css'

export default function Testimonials() {


    return (
        <div className="testimonial-shell">
            <div className="section-header">
                <p className="section-title">Testimonials</p>
                <h1 className="section-heading">Players doubling down on their edge</h1>
                <p className="subtle-text">Real stories from students who refined their mindset, cleaned up leaks, and started winning tougher pools.</p>
            </div>
            <div className="testimonial-grid">
                <div className="testimonial card-surface">
                    <div className="testimonial-head">
                        <div>
                            <h3>Liv R.</h3>
                            <p className="subtle-text">Cash game regular</p>
                        </div>
                        <div className="rating">★★★★★</div>
                    </div>
                    <p className="quote">"Patrick gave me a whole new way of looking at the game. My profit ratio has been insane."</p>
                    <p className="foot">Bankroll up 32% over 90 days.</p>
                </div>
                <div className="testimonial card-surface">
                    <div className="testimonial-head">
                        <div>
                            <h3>Chris M.</h3>
                            <p className="subtle-text">Tournament grinder</p>
                        </div>
                        <div className="rating">★★★★★</div>
                    </div>
                    <p className="quote">"Best coaching out there. Sessions are structured, actionable, and remove the mental noise."</p>
                    <p className="foot">Final-tabled 3 majors this quarter.</p>
                </div>
                <div className="testimonial card-surface">
                    <div className="testimonial-head">
                        <div>
                            <h3>Sasha K.</h3>
                            <p className="subtle-text">Mixed stakes</p>
                        </div>
                        <div className="rating">★★★★★</div>
                    </div>
                    <p className="quote">"Can't be beaten. Patrick spots leaks instantly and keeps me accountable every week."</p>
                    <p className="foot">Confidence + consistency restored.</p>
                </div>
            </div>
        </div>
    )
}
