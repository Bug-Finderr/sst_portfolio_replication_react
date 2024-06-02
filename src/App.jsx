import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Interest from './components/Interest';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <About />
            <Portfolio />
            <Interest />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
