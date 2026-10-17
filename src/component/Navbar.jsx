import {useState} from 'react'
const links = ['about', 'skills', 'projects', 'contacts'];


function Navbar({name, theme, onThemeToggle}) {
    const [open, setOpen] = useState(false);
  return (
    <header className ="navbar">
      <a href ="#home" className ="logo">{name.split('')[0]}</a>

      <button
      className= "menu-btn"
      onClick={() => setOpen (!open)}
      aria-label =" Toogle menu"
      >
        {open ? 'x': '☰' }
      </button>

       <nav className ={open ?'nav-links open' : 'nav-links'}> 
        {links.map((link) => (
          <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))} 
        <button className="theme-btn" onClick={onThemeToggle}> 
          {theme === 'light' ? '🌙Dark' : '☀️Light'}
          </button>
      </nav>
    </header>
  );
}

export default Navbar;
