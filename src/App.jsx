import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
