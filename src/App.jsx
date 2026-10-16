import { useState, useEffect } from 'react';
import profile from './data/profile';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [theme, setTheme] = useState(
  () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <Navbar name={profile.name} theme={theme} onThemeToggle={toggleTheme} />

      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Contact email={profile.email} />
        </main>
        <Footer name={profile.name} socials={profile.socials} />
         {/* ...main and Footer stay the same */}
        </>
        );
      }
       export default App;