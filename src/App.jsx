import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Project  from './components/Project';
import Contact  from './components/Contact';
import ContactUS  from './components/ContactUs';

function App() {
  return (
    
    <div className="overflow-x-hidden text-neutral-100 antialiased selection:text-cyan-900 bg-zinc-950 min-h-screen">
      <div className="fixed top-0 w-full z-50">  
      </div>
      
      <div className="container mx-auto mt-3 px-4">
        <Navbar/>
        <Hero />
        <About />
        <Technologies/>
        <Project/>
        <ContactUS/>
        <Contact/>

      </div>
    </div>
  )
}

export default App
