import React, { useState } from "react";
import "./Contact.css";

import {
          FaPhone,
          FaLinkedin,
          FaTelegram,
          FaTwitter,
          FaDiscord,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const ContactList = () => {
          const [hoverInfo, setHoverInfo] = useState("");
          const [bottomRightInfo, setBottomRightInfo] = useState("");

          const handleMouseEnter = (info, bottomInfo) => {
                    setHoverInfo(info);
                    setBottomRightInfo(bottomInfo);
          };

          const handleMouseLeave = () => {
                    setHoverInfo("");
                    setBottomRightInfo("");
          };

          return (
                    <div className="Parent">
                              {/* Form Section */}
                              <div className="contact-section">
                                        <div className="contact-content">
                                                  <h2>Send an E-Mail</h2>
                                                  <p>Good products are promoted by sentiment analysis, tell us how you feel about the service.</p>
                                                  <form className="contact-form">
                                                            <input type="text" placeholder="Name" required />
                                                            <input type="email" placeholder="Email" required />
                                                            <textarea placeholder="Message" required></textarea>
                                                            <button type="submit">Send Message</button>
                                                  </form>
                                        </div>
                              </div>

                              {/* Contact List Section */}
                              <div className="contact-list-container">
                                        <div className="contact-hover-container">
                                                  <div className="hover-info">{hoverInfo}</div>
                                                  <div className="icon-container">
                                                            <div className="icon-border"><FaPhone
                                                                      className="icon"
                                                                      onMouseEnter={() =>
                                                                                handleMouseEnter("Phone: +234 8133458141", "Phone : +234 8133458141")
                                                                      }
                                                                      onMouseLeave={handleMouseLeave}
                                                            /></div>
                                                            <div className="icon-border"><FaTelegram
                                                                      className="icon"
                                                                      onMouseEnter={() =>
                                                                                handleMouseEnter(
                                                                                          "http://t.me/Phil_ALPHA",
                                                                                          "USERNAME: Phil_ALPHA"
                                                                                )
                                                                      }
                                                                      onMouseLeave={handleMouseLeave}
                                                            /></div>
                                                            <div className="icon-border"><FaLinkedin
                                                                      className="icon"
                                                                      onMouseEnter={() =>
                                                                                handleMouseEnter(
                                                                                          "LinkedIn: Fill in your link here",
                                                                                          "USERNAME: Philip_Alpha"
                                                                                )
                                                                      }
                                                                      onMouseLeave={handleMouseLeave}
                                                            /></div>
                                                            <div className="icon-border"><FaTwitter
                                                                      className="icon"
                                                                      onMouseEnter={() =>
                                                                                handleMouseEnter(
                                                                                          "Twitter: Fill in your link here",
                                                                                          "USERNAME: @PhilipAkpamgbo"
                                                                                )
                                                                      }
                                                                      onMouseLeave={handleMouseLeave}
                                                            /></div>
                                                            <div className="icon-border"><FaHouse
                                                                      className="icon"
                                                                      onMouseEnter={() =>
                                                                                handleMouseEnter(
                                                                                          "Website: Fill in your link here",
                                                                                          `COMPANY: @Cyrobyte & Genesys TechHub.`

                                                                                )
                                                                      }
                                                                      onMouseLeave={handleMouseLeave}
                                                            /></div>
                                                            <div className="icon-border"><FaDiscord
                                                                      className="icon"
                                                                      onMouseEnter={() =>
                                                                                handleMouseEnter(
                                                                                          "Website: Fill in your link here",
                                                                                          `USERNAME: @Nzubechukwu Akpamgbo(BE)`

                                                                                )
                                                                      }
                                                                      onMouseLeave={handleMouseLeave}
                                                            /></div>
                                                  </div>
                                        </div>
                                        <div className="bottom-right-info"><p className="info-text">{bottomRightInfo}</p></div>
                              </div>
                    </div>
          );
};

export default ContactList;
