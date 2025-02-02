import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Welcome.css';

const FirstDiv = () => {
          const handleType = (count) => {
                    console.log(count);
          };

          const handleDone = () => {
                    console.log('Done after 5 loops!');
          };

          return (
                    <div className="hero-container">
                              <img src="/images/Philip3.jpg" alt="myhero" className="hero-image" />
                              <div className="hero-content">
                                        <h1 className="hero-header">Welcome to My Portfolio</h1>
                                        <p>
                                                  I am D_Proficient Philip,{' '}
                                                  <span>
                                                            <Typewriter
                                                                      words={[
                                                                                'I develop interactive softwares iteratively',
                                                                                'with standard Methodologies.',
                                                                                'I am Open to new Ideas and Technologies.',
                                                                      ]}
                                                                      loop={3}
                                                                      cursor
                                                                      cursorStyle="|"
                                                                      typeSpeed={70}
                                                                      deleteSpeed={50}
                                                                      delaySpeed={1000}
                                                                      onLoopDone={handleDone}
                                                                      onType={handleType}
                                                            />
                                                  </span>
                                        </p>
                              </div>
                    </div>
          );
};

export default FirstDiv;