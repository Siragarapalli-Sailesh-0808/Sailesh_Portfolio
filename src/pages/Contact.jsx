/**
 * Contact Page
 * Contact form and social media links with hover effects
 */

import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { socialLinks, personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: '#4f46e5'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.linkedin,
      color: '#0077b5'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'View my code',
      link: personalInfo.github,
      color: '#333'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: '#22d3ee'
    }
  ];

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section contact-methods-section">
        <div className="container">
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="contact-method-card card reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="method-icon" style={{ color: method.color }}>
                  {method.icon}
                </span>
                <h3>{method.title}</h3>
                <p>{method.value}</p>
                <span className="method-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="form-intro reveal">
              <h2>Send Me a Message</h2>
              <p>
                Fill out the form below and I'll get back to you as soon as possible. 
                Whether it's about a project, collaboration, or just a question, I'm here to help!
              </p>
              
              <div className="form-features">
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>Quick Response</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔒</span>
                  <span>Secure & Private</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💬</span>
                  <span>Friendly Discussion</span>
                </div>
              </div>
            </div>

            <div className="form-container reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="section social-section">
        <div className="container">
          <div className="social-content reveal">
            <h2>Follow Me</h2>
            <p>
              Stay connected and follow my journey on social media. 
              I share updates about my projects, tech insights, and more!
            </p>
            
            <div className="social-links-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card card"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location/Availability Section */}
      <section className="section availability-section">
        <div className="container">
          <div className="availability-card card reveal">
            <div className="availability-content">
              <div className="availability-info">
                <h2>Currently Available</h2>
                <p>
                  I'm currently open to new opportunities and exciting projects. 
                  Based in {personalInfo.location}, but open to remote work worldwide.
                </p>
                <div className="availability-tags">
                  <span className="tag">Open to Work</span>
                  <span className="tag">Remote Friendly</span>
                  <span className="tag">Quick Start</span>
                </div>
              </div>
              <div className="availability-visual">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
