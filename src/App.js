import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contect from './components/Contect';
import Projects from './components/Projects';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

function App() {
  return (
    <div className="App bg-light">
      <>

        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contect />
        <GoToTop />
        <Footer />

      </>
    </div>
  );
}

export default App;
