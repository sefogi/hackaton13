import React from 'react';
import './footer.css'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className='footerTitle'>MOON EXPRESS</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/AvailableProducts">Productos</a></li>
            <li><a href="/AboutUs">Nosotros</a></li>
            <li><a href="/Contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className='footerTitle'>Contacto</h3>
          <p className='contctInfo'>Teléfono: +123 456 789</p>
          <p className='contctInfo'>Email: info@moonexpress.com</p>
        </div>
        <div className="footer-section">
          <h3 className='footerTitle'>Síguenos</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MoonExpress. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;