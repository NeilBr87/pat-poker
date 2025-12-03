import './style.css'

export default function Navbar(props) {

    function navigate(activePage) {
        props.setPicker(activePage)
    }

    return (
        <header className="nav-shell">
            <div className="nav-brand" onClick={() => navigate("home")}>Pat Poker</div>
            <nav id="navbarMenu">
                <p onClick={() => navigate("home")} className="navbarItem">Home</p>
                <p onClick={() => navigate("testimonials")} className="navbarItem">Testimonials</p>
                <p onClick={() => navigate("getstarted")} className="navbarItem cta">Get started</p>
            </nav>
        </header>
    )
}
