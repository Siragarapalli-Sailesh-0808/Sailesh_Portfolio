/**
 * About Page
 * Detailed biography, timeline of experience/education, skills, and achievements
 */

import { useEffect } from 'react';
import Timeline from '../components/Timeline';
import SkillBadge from '../components/SkillBadge';
import { 
  personalInfo, 
  experience, 
  education, 
  skills, 
  achievements 
} from '../data/portfolioData';
import './About.css';

const About = () => {
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

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content reveal">
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">
              Data Analyst | Full Stack Developer | Problem Solver
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section bio-section">
        <div className="container">
          <div className="bio-content reveal">
            <div className="bio-image">
              <div className="profile-placeholder">
                <span className="profile-icon">👨‍💻</span>
              </div>
            </div>
            <div className="bio-text">
              <h2>Hi, I'm Sailesh Siragerapalli</h2>
              <p>{personalInfo.bio}</p>
              <div className="bio-details">
                <div className="bio-detail">
                  <span className="detail-icon">📍</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="bio-detail">
                  <span className="detail-icon">📧</span>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
                <div className="bio-detail">
                  <span className="detail-icon">📱</span>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">My Journey</span>
            <h2 className="section-title">Experience</h2>
          </div>
          <Timeline items={experience} />
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Academic Background</span>
            <h2 className="section-title">Education</h2>
          </div>
          <Timeline items={education} />
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-detailed-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Technical Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>

          <div className="skills-categories">
            {/* Languages */}
            <div className="skill-category reveal">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skills-list">
                {skills.languages.map((skill) => (
                  <SkillBadge 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="skill-category reveal">
              <h3 className="category-title">Frontend Development</h3>
              <div className="skills-list">
                {skills.frontend.map((skill) => (
                  <SkillBadge 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="skill-category reveal">
              <h3 className="category-title">Backend & Frameworks</h3>
              <div className="skills-list">
                {skills.backend.map((skill) => (
                  <SkillBadge 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="skill-category reveal">
              <h3 className="category-title">Databases</h3>
              <div className="skills-list">
                {skills.databases.map((skill) => (
                  <SkillBadge 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="skill-category reveal">
              <h3 className="category-title">Other Skills</h3>
              <div className="skills-list">
                {skills.other.map((skill) => (
                  <SkillBadge 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section achievements-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Milestones</span>
            <h2 className="section-title">Achievements & Accomplishments</h2>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card card reveal">
                <span className="achievement-icon">{achievement.icon}</span>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CV Section */}
      <section className="section cv-section">
        <div className="container">
          <div className="cv-card card reveal">
            <h2>Want to know more?</h2>
            <p>
              Download my CV to get a complete overview of my experience, 
              education, skills, and projects.
            </p>
            <button className="btn btn-primary">
              Download CV
              <span className="arrow">↓</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
