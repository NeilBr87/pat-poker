import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
export default function ExpandedMenu() {
   return (
    <div className="burger-menu-container">
      <div className="burger-menu-sidebar">
        <div id="burgerContainer">
            <FontAwesomeIcon id="closeIcon" icon={faX} style={{color: "#ffffff",}} />
        </div> 
        <div style={{textAlign: 'left', paddingLeft: '10px'}}>
            <h3>Home</h3>
            <h3>Testimonials</h3>
            <h3>Get started</h3>
        </div>
      </div>
      <div className="burger-menu-overlay"></div>
    </div>
  );
};