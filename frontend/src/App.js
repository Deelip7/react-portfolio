import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className='App container mx-auto bg-black'>
      <Header />
      <main className='min-h-screen p-10'>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
