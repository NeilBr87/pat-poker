import './style.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function GetStarted() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className="get-started-shell">

            {!isMobile && <div className="get-grid">
                <div className="get-intro card-surface">
                    <p className="section-title">Get started</p>
                    <h1 className="section-heading">Build a plan tailored to your tables.</h1>
                    <p className="subtle-text">Share your goals, stakes, and recent hands. We’ll craft a 30-day program with weekly reviews, live sweat sessions, and mindset drills that keep you disciplined.</p>
                    <div className="callouts">
                        <div className="callout">
                            <span className="icon">⏱️</span>
                            <div>
                                <b>Fast responses</b>
                                <p>24h turnaround on hand histories and HUD tweaks.</p>
                            </div>
                        </div>
                        <div className="callout">
                            <span className="icon">🧩</span>
                            <div>
                                <b>Action-first coaching</b>
                                <p>Clear heuristics you can apply the same night you learn them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="get-details">
                    <div className="detail-card card-surface">
                        <p className="section-title">Investment</p>
                        <h3>£300 per hour</h3>
                        <p className="subtle-text">Blocks of four sessions include session prep notes and live-game sweats.</p>
                    </div>
                    <div className="detail-card card-surface">
                        <p className="section-title">Contact</p>
                        <h3>patemail@gmail.com</h3>
                        <p className="subtle-text">WhatsApp: +44 7711 111111</p>
                        <button className="primary-btn">Reserve your spot</button>
                    </div>
                </div>
            </div>}

            {isMobile && <div className="get-grid mobile">
                <div className="get-intro card-surface">
                    <p className="section-title">Get started</p>
                    <h2 className="section-heading">Build a plan tailored to your tables.</h2>
                    <p className="subtle-text">Share your goals, stakes, and recent hands. We’ll craft a 30-day program with weekly reviews, live sweats, and mindset drills.</p>
                </div>
                <div className="detail-card card-surface">
                    <p className="section-title">Investment</p>
                    <h3>£300 per hour</h3>
                    <p className="subtle-text">Blocks of four sessions include prep notes and live-game sweats.</p>
                </div>
                <div className="detail-card card-surface">
                    <p className="section-title">Contact</p>
                    <h3>patemail@gmail.com</h3>
                    <p className="subtle-text">WhatsApp: +44 7711 111111</p>
                    <button className="primary-btn">Reserve your spot</button>
                </div>
            </div>}



        </div>
    )
}
