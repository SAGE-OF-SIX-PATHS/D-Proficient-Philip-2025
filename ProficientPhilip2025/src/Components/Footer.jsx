import React from "react";
import "./Footer.css"; // Link to the external CSS
import ScrollToTopButton from "./GoToTop";

const Footer = () => {
          return (
                    <footer className="footer">
                              <div className="footer-content">
                                        <h2 className="footer-title">D_Proficient Philip 2025</h2>
                                        <a
                                                  href="https://github.com/SAGE-OF-SIX-PATHS"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="github-link"
                                        >
                                                  <img
                                                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                                            alt="GitHub"
                                                            className="github-icon"
                                                  />
                                        </a>
                                        {/* GoToTop Button */}
                                        <ScrollToTopButton />
                              </div>


                    </footer>
          );
};

export default Footer;
