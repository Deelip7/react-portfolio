import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import Skill from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
      <Header />
      <main>
        <Hero />
        <Project />
        <Skill />
        <Contact />
      </main>
    </div>
  );
}

export default App;
