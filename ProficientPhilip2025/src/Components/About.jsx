import React from 'react';
import './About.css';

const SkillsSection = () => {
          const skills = [
                    "Leadership",
                    "Team Work",
                    "Communication",
                    "Hard Working",
                    "Fast Learner",
          ];

          return (
                    <div className="skills-section">
                              <div className="content">
                                        <div className="description">
                                                  <h2>About Me</h2>
                                                  <p>
                                                            As a computer Scientist and a software Engineer, my core fortitude is incremental development, curiosity and hardwork; rendering me adaptable to new Technologies and passion to build more.
                                                  </p>
                                                  <button className="resume-button">Download Resume</button>
                                        </div>
                                        <div className="skills">
                                                  {skills.map((skill, index) => (
                                                            <div key={index} className="skill">
                                                                      <svg className="skill-circle" viewBox="0 0 100 100">
                                                                                <circle cx="50" cy="50" r="65" stroke="black" stroke-width="10" fill="none" />
                                                                      </svg>
                                                                      <span className="skill-text">{skill}</span>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    </div>
          );
};

export default SkillsSection;