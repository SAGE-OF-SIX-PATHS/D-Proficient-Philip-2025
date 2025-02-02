import React from "react";
import "./MyWorks.css";

const MyWorks = () => {
          const projects = [
                    {
                              title: "Art Display Site",
                              description: "My CSS Design",
                              image: "images/ArtSite.png",
                    },
                    {
                              title: "Dictle ",
                              description: "My React Project (Vocabulary development system)",
                              image: "images/dictle.png",
                    },
          ];

          return (
                    <div className="my-works-container">
                              <h2>Some of My Works</h2>
                              <div className="cards-container">
                                        {projects.map((project, index) => (
                                                  <div className="card" key={index}>
                                                            <img src={project.image} alt={project.title} className="card-image" />
                                                            <div className="card-content">
                                                                      <a href=""><h3>{project.title}</h3></a>
                                                                      <p>{project.description}</p>
                                                            </div>
                                                  </div>
                                        ))}
                              </div>
                    </div>
          );
};

export default MyWorks;