/**
 * Footer Component
 * Displays social links and copyright information
 */

import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Siragarapalli-Sailesh-0808', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sailesh-siragarapalli/', icon: '💼' },
    { name: 'Email', url: 'mailto:siragarapallisailesh@gmail.com', icon: '📧' }
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Sailesh Siragerapalli</h3>
            <p>Building intelligent web experiences</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sailesh Siragerapalli. All rights reserved.</p>
          <p className="footer-tagline">Crafted with passion & React ⚛️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
