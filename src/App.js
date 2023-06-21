import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>

        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />

      </>
    </div>
  );
}

export default App;
