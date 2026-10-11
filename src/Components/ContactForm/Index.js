import { useForm, ValidationError } from '@formspree/react';
import Icon from '../Icon/Index.js';
import './style.css';

const FORMSPREE_ID = 'xeokkplo';

export default function ContactForm() {
    const [state, handleSubmit] = useForm(FORMSPREE_ID);

    if (state.succeeded) {
        return (
            <div className="contact-success" role="status">
                <span className="contact-success-icon"><Icon name="check" /></span>
                <h3>Message received.</h3>
                <p>Thanks for reaching out — expect a reply within 24 hours to set up your discovery call.</p>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
                <input id="name" name="name" type="text" placeholder=" " autoComplete="name" required />
                <label htmlFor="name">Your name</label>
            </div>

            <div className="field">
                <input id="email" name="email" type="email" placeholder=" " autoComplete="email" required />
                <label htmlFor="email">Email address</label>
                <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
            </div>

            <div className="field">
                <textarea id="message" name="message" rows="4" placeholder=" " required />
                <label htmlFor="message">Your goals, stakes & games</label>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="field-error" />
            </div>

            <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Reserve your spot'} <Icon name="arrow" />
            </button>
        </form>
    );
}
