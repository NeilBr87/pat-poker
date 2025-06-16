import { useState } from 'react';
import Navbar from '../Navbar/Index.js'
import Home from '../Home/Index.js'
import Testimonials from '../Testimonials/Index.js';
import GetStarted from '../GetStarted/Index.js';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobHome from '../MobHome/Index.js'
import BurgerMenu from '../BurgerMenu/Index.js';
import ExpandedMenu from '../ExpandedMenu/Index.js';
import './style.css'
export default function Menu() {

    const [picker, setPicker] = useState("home");
      const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>

        {!isMobile && (
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
        </div>)}

        {isMobile && (
            <div>
            <BurgerMenu picker={picker} setPicker={setPicker}/>
            {picker === "home" && (
            <MobHome  picker={picker} setPicker={setPicker}/>
            )}
            <ExpandedMenu />
            </div>
        )}


        </div>
    )
}