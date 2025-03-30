import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import './Main.css';

const Main = () => {
  return (
    <main>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main >
  );
}

export default Main;
