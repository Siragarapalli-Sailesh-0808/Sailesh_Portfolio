/**
 * Projects Page
 * Displays all projects with filtering capability
 */

import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['All', 'Platform', 'AI System', 'Healthcare', 'IoT'];

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
  }, [filteredProjects]);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.category.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter]);

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1 className="page-title">My Projects</h1>
            <p className="page-subtitle">
              A collection of my work spanning web development, AI/ML, healthcare tech, 
              and data-driven solutions. Each project represents a unique challenge solved.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Chips */}
          <div className="filter-chips reveal">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-chip ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="projects-count reveal">
            <p>Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}</p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects reveal">
              <div className="no-projects-content">
                <span className="no-projects-icon">🔍</span>
                <h3>No projects found</h3>
                <p>Try selecting a different category</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Projects CTA */}
      <section className="section more-projects-section">
        <div className="container">
          <div className="more-projects-card card reveal">
            <h2>Want to see more?</h2>
            <p>
              I'm constantly working on new projects and experiments. Check out my GitHub 
              for more code samples, contributions, and work-in-progress projects.
            </p>
            <div className="more-projects-buttons">
              <a 
                href="https://github.com/Siragarapalli-Sailesh-0808" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Visit GitHub
                <span className="arrow">→</span>
              </a>
              <a href="/contact" className="btn btn-secondary">
                Discuss a Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
