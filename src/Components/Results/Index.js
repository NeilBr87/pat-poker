import { profitCurve } from '../../content.js';
import Counter from '../Counter/Index.js';
import Icon from '../Icon/Index.js';
import ProfitChart from '../ProfitChart/Index.js';
import Reveal from '../Reveal/Index.js';
import sharkScopeGraph from './SharkScopeChart.png';
import './style.css';

const [lastGame, lastProfit] = profitCurve[profitCurve.length - 1];
const metrics = [
    { value: lastProfit, prefix: '£', suffix: 'K', label: 'Cumulative profit' },
    { value: lastGame, suffix: '+', label: 'Tournaments tracked' },
    { value: profitCurve.filter((point) => point[2] === 'win').length, label: 'Significant wins' },
];

export default function Results() {
    return (
        <section id="results" className="section results">
            <div className="shell">
                <Reveal className="results-header">
                    <div className="section-header">
                        <p className="eyebrow">Proven results</p>
                        <h2 className="display">
                            The graph <em>doesn’t lie.</em>
                        </h2>
                        <p className="lede">
                            Every lesson is backed by a long-term, publicly tracked record. This is what disciplined,
                            data-driven poker looks like over thousands of games.
                        </p>
                    </div>
                </Reveal>

                <Reveal className="results-card card" delay={100}>
                    <div className="results-card-head">
                        <div>
                            <p className="results-card-title">Total profit</p>
                            <p className="results-card-sub">Cumulative · GBP · by games played</p>
                        </div>
                        <div className="results-legend">
                            <span><i className="legend-line" /> Profit</span>
                            <span><i className="legend-dot" /> Significant wins</span>
                        </div>
                    </div>

                    <ProfitChart data={profitCurve} />

                    <div className="results-foot">
                        <dl className="results-metrics">
                            {metrics.map((metric) => (
                                <div key={metric.label}>
                                    <dt>{metric.label}</dt>
                                    <dd>
                                        <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <a className="results-source" href={sharkScopeGraph} target="_blank" rel="noreferrer">
                            View original SharkScope graph <Icon name="external" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
