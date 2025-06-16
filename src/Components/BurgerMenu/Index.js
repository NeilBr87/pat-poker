import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function BurgerMenu() {
    
    return (
        <div id="burgerContainer">
            <FontAwesomeIcon id="burgerIcon" icon={faBars} style={{color: "#ffffff",}} />
        </div>
    )
}