/**
 * ProjectCard Component
 * Displays individual project information with hover effects
 * Entire card is clickable and redirects to GitHub
 */

import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const handleCardClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="project-card card" 
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className="project-image">
        <div className="project-overlay">
          <div className="github-icon">
            <span>💻</span>
            <span className="view-text">View on GitHub</span>
          </div>
        </div>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <span className="placeholder-icon">{project.icon || '🚀'}</span>
          </div>
        )}
      </div>
      
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
