/**
 * SkillBadge Component
 * Displays skill with progress bar
 */

import './SkillBadge.css';

const SkillBadge = ({ skill, percentage, color }) => {
  return (
    <div className="skill-badge">
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ 
            width: `${percentage}%`,
            background: color || 'var(--gradient-primary)'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBadge;
