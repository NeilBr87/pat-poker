import { marqueeTopics } from '../../content.js';
import './style.css';

const suits = ['♠', '♥', '♣', '♦'];

export default function Marquee() {
    // Rendered twice so the strip can loop seamlessly at -50%.
    const items = [...marqueeTopics, ...marqueeTopics];

    return (
        <div className="marquee" aria-label="Coaching topics">
            <ul className="marquee-track">
                {items.map((topic, index) => (
                    <li key={index} aria-hidden={index >= marqueeTopics.length || undefined}>
                        <span className={`marquee-suit ${index % 2 ? 'is-red' : ''}`}>{suits[index % 4]}</span>
                        {topic}
                    </li>
                ))}
            </ul>
        </div>
    );
}
