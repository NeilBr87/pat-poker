import './style.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Signup from '../Signup/Index.js'
export default function GetStarted() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>

            {!isMobile && <div>
                <h1>Get started</h1>
                <h3>Get in touch with any questions or sign up today</h3>
                <div id="faqRow">
                    <div style={{marginTop: '4vh'}} id="prices">
                        <b>Prices</b>
                        <p>£300 per hour</p>
                    </div>
                    <div style={{marginTop: '4vh'}} id="prices">
                        <b>Contact</b>
                        <p>Email: patemail@gmail.com</p>
                        <p>WhatsApp: +447711111111</p>
                    </div>
                </div>
                    <h3 style={{marginTop: '10vh'}}>Signup form will be below</h3>
            </div>}

            {isMobile && <div>
                <h2>Get started</h2>
                <h4>Get in touch with any questions or sign up today</h4>
                <div id="faqContainerMob">
                    <div className="pricesMob">
                        <b>Prices</b>
                        <p>£300 per hour</p>
                    </div>
                    <div className="pricesMob">
                        <b>Contact</b>
                        <p>Email: patemail@gmail.com</p>
                        <p>WhatsApp: +447711111111</p>
                    </div>
                </div>
                    <h3 style={{marginTop: '3vh'}}>Signup form will be below</h3>
            </div>}



        </div>
    )
}