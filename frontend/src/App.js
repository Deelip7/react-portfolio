import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App container mx-auto bg-black'>
      <Header />
      <main className='min-h-screen p-5 text-white'>
        <Hero />
        <Project />
        <Skill />
        <Contact />
      </main>
    </div>
  );
}

export default App;
