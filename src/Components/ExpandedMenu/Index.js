import './style.css'

export default function ExpandedMenu(props) {

   
    function navigate(activePage) {
        props.setPicker(activePage)
        props.setExpanded(false)
    }

    function setExpandedFalse() {
        props.setExpanded(false)
    }

   return (
    <div className="burger-menu-container">
      <div className="burger-menu-sidebar">

        <div style={{textAlign: 'left', paddingLeft: '10px'}}>
            <h3 onClick={() => navigate("home")} style={{marginTop: '18vh', marginBottom: '4vh'}}>Home</h3>
            <h3 onClick={() => navigate("testimonials")} style={{marginTop: '4vh', marginBottom: '4vh'}}>Testimonials</h3>
            <h3 onClick={() => navigate("getstarted")} style={{marginTop: '4vh', marginBottom: '4vh'}}>Get started</h3>
        </div>
      </div>
      <div className="burger-menu-overlay"  onClick={setExpandedFalse}></div>
    </div>
  );
};