import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Project from './components/Project';

function App() {
  return (
    <div className='App container mx-auto bg-black'>
      <Header />
      <main className='min-h-screen p-10 text-white'>
        <Hero />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
