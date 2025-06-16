import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function BurgerMenu(props) {

    function setExpandTrue() {
        props.setExpanded(true)
    }
    
    return (
        <div id="burgerContainer" >
            <FontAwesomeIcon onClick={setExpandTrue} id="burgerIcon" icon={faBars} style={{color: "#ffffff",}} />
        </div>
    )
}