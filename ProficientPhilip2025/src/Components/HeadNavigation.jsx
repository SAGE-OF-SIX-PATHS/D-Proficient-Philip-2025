import React, { useState, useEffect } from 'react';        
import './HeadNavigation.css';

const Navbar = () => {
          const [scrolled, setScrolled] = useState(false);
          const [menuOpen, setMenuOpen] = useState(false);

          useEffect(() => {
                    const handleScroll = () => {
                              setScrolled(window.scrollY > 0);
                    };

                    const handleClickOutside = (event) => {
                              if (menuOpen && !event.target.closest('.nav')) {
                                        setMenuOpen(false);
                              }
                    };

                    window.addEventListener('scroll', handleScroll);
                    document.addEventListener('click', handleClickOutside);

                    return () => {
                              window.removeEventListener('scroll', handleScroll);
                              document.removeEventListener('click', handleClickOutside);
                    };
          }, [menuOpen]);

          const handleScrollTo = (topPosition) => {
                    window.scrollTo({ top: topPosition, behavior: 'smooth' });
          };

          const toggleMenu = (event) => {
                    event.stopPropagation(); // Prevent triggering the outside click handler
                    setMenuOpen(!menuOpen);
          };

          return (
                    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
                              <div className="logo">
                                        <a href="https://github.com/SAGE-OF-SIX-PATHS">D_ProficientPhilip</a>
                              </div>
                              <button
                                        className={`hamburger ${scrolled ? 'scrolled' : ''}`}
                                        onClick={toggleMenu}
                                        aria-label="Toggle menu"
                              >
                                        {menuOpen ? '✖' : '☰'}
                              </button>
                              <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
                                        <li><button onClick={() => handleScrollTo(0)} className="nav-link">Home</button></li>
                                        <li><button onClick={() => handleScrollTo(520)} className="nav-link">About</button></li>
                                        <li><button onClick={() => handleScrollTo(900)} className="nav-link">Skills</button></li>
                                        <li><button onClick={() => handleScrollTo(1785)} className="nav-link">Projects</button></li>
                                        <li><button onClick={() => handleScrollTo(2390)} className="nav-link">Contact</button></li>
                              </ul>
                    </nav>
          );
};

export default Navbar;