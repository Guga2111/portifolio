import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "../socialMedia.css";

export default function SocialMedia() {
  return (
    <div className="social-media-container">
      <h2>Minhas Redes Sociais</h2>
      <div className="social-links">
        <a
          href="https://github.com/Guga2111"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/luís-gustavo-oliveira-sampaio-886196300/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin size={40} />
        </a>

        <a
          href="https://www.instagram.com/luisgsampaio_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram size={40} />
        </a>
      </div>
    </div>
  );
}
