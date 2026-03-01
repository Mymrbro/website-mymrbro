import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MeuProjeto. Todos os direitos reservados.</p>
        
        <ul className="footer-links">
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="/privacidade">Privacidade</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;