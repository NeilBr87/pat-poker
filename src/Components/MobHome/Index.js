import Graph from '../Home/SharkScopeChart.png'
import './style.css'
export default function MobHome(props) {

    function navigate(activePage) {
        props.setPicker(activePage)
    }

    return (
        <div>
            <div className="mobGraphContainer">
                <img className="mobGraph" src={Graph} alt="Graph" />
                <h2>Don't just master the game.</h2>
                <h1>Master the opposition.</h1>
                <button onClick={() => navigate("getstarted")} id="getStartedMob">Get started</button>
            </div>
                         <h2 style={{marginTop: '3vh'}}>Patrick Brooks - Expert online poker coaching</h2>
             <h4>Learn the techniques and mindsets required to maximise your game and genrate high performance results </h4>
             <div id="infoContainerMob">
                <div className="infoColMob">
                    <b>Ongoing support</b>
                    <p>Consistent monitoring across training sessions and live games</p>
                </div>
                <div className="infoColMob">
                    <b>A solid choice</b>
                    <p>Over 200 former clients at a range of skill levels and strengths</p>
                </div>
                <div className="infoColMob">
                    <b>All skill levels</b>
                    <p>From beginners to professionals looking to bring things to the next level</p>
                </div>
            </div>
        </div>
    )
}