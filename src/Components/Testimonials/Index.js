import './style.css'

export default function Testimonials() {


    return (
        <div>
            <h1>Review our testimonials</h1>
            <div style={{marginTop: '8vh'}} className="testimonial">
                <i>"Patrick gave me a whole new way of looking at the game. My profit ratio has been insane."</i>
                <p>- Testimonial User 1</p>
            </div>
            <div className="testimonial">
                <i>"Best coaching out there."</i>
                <p>- Testimonial User 2</p>
            </div>
            <div className="testimonial">
                <i>"Can't be beaten."</i>
                <p>- Testimonial User 3</p>
            </div>
        </div>
    )
}