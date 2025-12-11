/**
 * Hero Component
 * Animated hero section with parallax 3D card and floating tech chips
 */

import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const techStack = ['Python', 'React', 'JavaScript', 'SQL', 'Firebase', 'Node.js', 'Django', 'ML'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simple fade-in effect for hero description
  useEffect(() => {
    const descElement = document.querySelector('.hero-description');
    
    if (!descElement) return;
    
    descElement.style.opacity = '0';
    descElement.style.transform = 'translateY(20px)';
    descElement.style.transition = 'opacity 1s ease, transform 1s ease';
    
    setTimeout(() => {
      descElement.style.opacity = '1';
      descElement.style.transform = 'translateY(0)';
    }, 600);
  }, []);

  const handleDownloadCV = () => {
    // Create a link to download CV
    window.open('/Sailesh_Siragerapalli_CV.pdf', '_blank');
  };

  return (
    <section className="hero">
      {/* Animated gradient orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Grid pattern overlay */}
      <div className="grid-pattern"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">
              <span className="wave">👋</span>
              Hi, I'm Sailesh
            </span>
            <h1 className="hero-title">
              <span className="title-word">Building</span>{' '}
              <span className="title-word gradient-text shine">intelligent</span>{' '}
              <span className="title-word">web</span>{' '}
              <span className="title-word">experiences</span>
            </h1>
            <p className="hero-description">
              A passionate Front End Developer specializing in building beautiful, responsive, and user-friendly 
              web applications. Experienced in modern JavaScript frameworks and creating seamless user experiences.
            </p>
            <div className="hero-cta">
              <a href="/projects" className="btn btn-primary btn-shine">
                View Projects
                <span className="arrow">→</span>
              </a>
              <button onClick={handleDownloadCV} className="btn btn-secondary">
                Download CV
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div
              ref={cardRef}
              className="hero-card"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x / 30}deg) rotateX(${-mousePosition.y / 30}deg)`
              }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="code-snippet">
                  <div className="code-line">
                    <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                  </div>
                  <div className="code-line indent">
                    <span className="property">name:</span> <span className="string">"Sailesh"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">role:</span> <span className="string">"Front End Developer"</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">passion:</span> <span className="string">"Building Solutions"</span>
                  </div>
                  <div className="code-line">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Floating Tech Chips */}
            <div className="floating-chips">
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="tech-chip"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p>Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
