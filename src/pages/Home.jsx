/**
 * Home Page
 * Main landing page with hero, about, skills, and featured projects sections
 */

import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import { projects, skills } from '../data/portfolioData';
import './Home.css';

const Home = () => {
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

  const featuredProjects = projects.slice(0, 3);
  const topSkills = [
    ...skills.languages.slice(0, 3),
    ...skills.frontend.slice(0, 2),
    ...skills.backend.slice(0, 1)
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Get to know me</span>
            <h2 className="section-title">About Me</h2>
          </div>
          
          <div className="about-content reveal">
            <div className="about-text">
              <p>
                I'm a <strong>strategy-driven Data Analyst</strong> and <strong>Full Stack Developer</strong> with 
                a passion for building intelligent, data-driven web experiences. With hands-on experience in 
                SQL, Python, and modern web technologies, I specialize in transforming complex data into 
                actionable insights and scalable solutions.
              </p>
              <p>
                Currently pursuing BTech in Information Technology at Vignan's Institute, I've worked on 
                diverse projects ranging from real estate platforms to AI-powered healthcare solutions. 
                I thrive on solving challenging problems and continuously learning new technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new data visualization techniques, 
                contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-card card">
                <h3>10,000+</h3>
                <p>Active Users Supported</p>
              </div>
              <div className="stat-card card">
                <h3>5+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat-card card">
                <h3>Top 5%</h3>
                <p>National Coding Rank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What I do best</span>
            <h2 className="section-title">Top Skills</h2>
          </div>
          
          <div className="skills-grid reveal">
            <div className="skills-column">
              {topSkills.slice(0, 3).map((skill) => (
                <SkillBadge 
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.level}
                />
              ))}
            </div>
            <div className="skills-column">
              {topSkills.slice(3, 6).map((skill) => (
                <SkillBadge 
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.level}
                />
              ))}
            </div>
          </div>
          
          <div className="skills-cta reveal">
            <a href="/about" className="btn btn-secondary">
              View All Skills
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">My work</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="projects-cta reveal">
            <a href="/projects" className="btn btn-primary">
              View All Projects
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card card reveal">
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="mailto:siragarapallisailesh@gmail.com" className="btn btn-secondary">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
