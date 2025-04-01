import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cookies from './components/Cookies/Cookies';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import './Main.css';

const Main = () => (
  <main>
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Cookies />
  </main >
);

export default Main;
