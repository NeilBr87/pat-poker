import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
export default function ExpandedMenu(props) {

   
    function setExpandedFalse() {
        props.setExpanded(false)
    }

   return (
    <div className="burger-menu-container">
      <div className="burger-menu-sidebar">
        <div id="burgerContainer">
            <FontAwesomeIcon onClick={setExpandedFalse} id="closeIcon" icon={faX} style={{color: "#ffffff",}} />
        </div> 
        <div style={{textAlign: 'left', paddingLeft: '10px'}}>
            <h3 style={{marginTop: '14vh', marginBottom: '4vh'}}>Home</h3>
            <h3 style={{marginTop: '4vh', marginBottom: '4vh'}}>Testimonials</h3>
            <h3 style={{marginTop: '4vh', marginBottom: '4vh'}}>Get started</h3>
        </div>
      </div>
      <div className="burger-menu-overlay"  onClick={setExpandedFalse}></div>
    </div>
  );
};