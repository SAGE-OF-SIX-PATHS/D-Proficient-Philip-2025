import React, { useEffect } from 'react';
import './ToolSkill.css';

const skills = [
          { name: "HTML", description: "In my first year in univerisity (UNIZIK) as a computer scientist, I began my frontend journey with HTML, leveraging this technology to structure contents of my web pages project." },
          { name: "CSS", description: "I consider CSS a gift from HTML, as every project I built needed styling and design." },
          { name: "ES6", description: "Incrementally, i followed the Frontend path venturing into javascript to add functionality to my projects. With the new upgrade in javascript syntax, Javascript is a veritable tool to my day to day work as a web developer." },
          { name: "Git & Github", description: "To me, work is a continuous journey of learning and growth, and I thrive in environments where knowledge is shared and collaborative problem-solving is encouraged. Where best to collaborate and practically learn as GITHUB using GIT version control`" },
          { name: "React", description: "With React js library I build better, more responsive web projects, including my final year project; An English vocabulary Development System." },
          { name: "Framer-Motion", description: "I built so many static UI and decided to advance into interactive and dynamic UI, Framer-motion rendered better animations for UI than CSS animations and the sequence and transitions were more re-usable and advanced that CSS." },
          { name: "Python", description: "During my Internship, I made use of Python Programming at FrankPower Technologies, as it was mandatory for my Data Analysis learning Path, with Python, I built basic projects as counter app, CGPA calculators before advancing into Data analyis." },
          { name: "Research & Report writing ", description: "In my final year, I learnt and applied research and report writing on projects and it incrementally added to my practical knowledge of software development methodologies, especially the Agile, OODM and Waterfall approach" }
];

const SkillsCards = () => {
          useEffect(() => {
                    const observer = new IntersectionObserver(
                              (entries) => {
                                        entries.forEach((entry) => {
                                                  if (entry.isIntersecting) {
                                                            entry.target.classList.add('animate-slide-up');
                                                  }
                                        });
                              },
                              { threshold: 0.1 }
                    );

                    const skillCards = document.querySelectorAll('.skill-card');
                    skillCards.forEach((card) => observer.observe(card));

                    return () => observer.disconnect();
          }, []);

          return (
                    <div className="grandparentContainer">
                              <div className="background"></div>
                              <div className="ParentContainer">
                                        <h2 className='tool-text'>My Toolset and Skills</h2>
                                        <div className="skills-cards-container">
                                                  {skills.map((skill, index) => (
                                                            <div className="skill-card" key={index}>
                                                                      <h3 className="skill-name">{skill.name}</h3>
                                                                      <p className="skill-description">{skill.description}</p>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    </div>
          );
};

export default SkillsCards;