import Graph from './SharkScopeChart.png'
import './style.css'

export default function Home(props) {

        function navigate(activePage) {
        props.setPicker(activePage)
    }
    return (
        <div id="outerMenu">
            <div id="graphContainer">
                <div className="graphColumn">
                    <h2 style={{paddingLeft: '16vw'}}>Don't just master the game.</h2>
                    <h1 style={{paddingLeft: '16vw'}}>Master the opposition.</h1>
                    <button onClick={() => navigate("getstarted")} id="getStarted">Get started</button>
                </div>
                <div className="graphColumn">
                    <img className="graph" src={Graph} alt="Graph" />
                </div>
            </div>
             <h2 style={{marginTop: '3vh'}}>Patrick Brooks - Expert online poker coaching</h2>
             <h3>Learn the techniques and mindsets required to maximise your game and genrate high performance results </h3>
            <div id="infoRow">
                <div className="infoCol">
                    <b>Ongoing support</b>
                    <p>Consistent monitoring across training sessions and live games</p>
                </div>
                <div className="infoCol">
                    <b>A solid choice</b>
                    <p>Over 200 former clients at a range of skill levels and strengths</p>
                </div>
                <div className="infoCol">
                    <b>All skill levels</b>
                    <p>From beginners to professionals looking to bring things to the next level</p>
                </div>
            </div>
             

        </div>
    )
}