import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto w-full flex flex-col gap-24 md:gap-32">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
