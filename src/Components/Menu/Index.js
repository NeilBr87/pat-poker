import { useState } from 'react';
import Navbar from '../Navbar/Index.js'
import Home from '../Home/Index.js'
import Testimonials from '../Testimonials/Index.js';
import GetStarted from '../GetStarted/Index.js';
import './style.css'
export default function Menu() {

    const [picker, setPicker] = useState("home");

    return (
        <div>
            <Navbar picker={picker} setPicker={setPicker} />

            {picker === "home" && (
            <Home  picker={picker} setPicker={setPicker}/>
            )}

            {picker === "testimonials" && (
            <Testimonials />
            )}

            {picker === "getstarted" && (
            <GetStarted />
            )}
        </div>
    )
}