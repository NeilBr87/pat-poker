import Navbar from '../Navbar/Index.js';
import Hero from '../Hero/Index.js';
import Marquee from '../Marquee/Index.js';
import Results from '../Results/Index.js';
import Method from '../Method/Index.js';
import Process from '../Process/Index.js';
import Testimonials from '../Testimonials/Index.js';
import Pricing from '../Pricing/Index.js';
import Faq from '../Faq/Index.js';
import Footer from '../Footer/Index.js';

export default function App() {
    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>
            <Navbar />
            <main id="main">
                <Hero />
                <Marquee />
                <Results />
                <Method />
                <Process />
                <Testimonials />
                <Pricing />
                <Faq />
            </main>
            <Footer />
        </>
    );
}
