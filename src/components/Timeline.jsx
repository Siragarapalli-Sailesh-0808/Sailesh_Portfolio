/**
 * Timeline Component
 * Displays education and experience in a vertical timeline
 */

import './Timeline.css';

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content card">
            <div className="timeline-header">
              <h3>{item.title}</h3>
              <span className="timeline-date">{item.date}</span>
            </div>
            <h4 className="timeline-subtitle">{item.subtitle}</h4>
            <p className="timeline-description">{item.description}</p>
            {item.points && (
              <ul className="timeline-points">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
