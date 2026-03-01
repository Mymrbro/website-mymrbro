import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">MeuProjeto</div>
      
      {/* Menu de Links */}
      <ul className={active ? "nav-links active" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>

      {/* Ícone do Hambúrguer */}
      <div className="hamburguer" onClick={toggleMenu}>
        <div className={active ? "line1 toggle" : "line1"}></div>
        <div className={active ? "line2 toggle" : "line2"}></div>
        <div className={active ? "line3 toggle" : "line3"}></div>
      </div>
    </nav>
  );
}

export default Navbar;