import './style.css'

export default function Navbar(props) {

    function navigate(activePage) {
        props.setPicker(activePage)
    }

    return (
        <div id="navbarMenu">
            <p onClick={() => navigate("home")} className="navbarItem">Home</p>
            <p onClick={() => navigate("testimonials")} className="navbarItem">Testimonials</p>
            <p className="navbarItem">Get started</p>
        </div>
    )
}