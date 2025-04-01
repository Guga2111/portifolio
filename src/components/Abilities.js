import React from "react";
import "../abilities.css";

export default function Abilities() {
  return (
    <div className="abilities-container">
      <div className="abilities-wrapper">
        <div className="abilities-category">
          <h2>Advanced</h2>
          <ul>
            <li>Java</li>
            <li>SpringBoot</li>
          </ul>
        </div>
        <div className="abilities-category">
          <h2>Intermediate</h2>
          <ul>
            <li>C</li>
            <li>MySQL</li>
            <li>RestAPI</li>
            <li>JPA</li>
            <li>OOP</li>
            <li>Data Structures and Algorithms</li>
          </ul>
        </div>
        <div className="abilities-category">
          <h2>Beginner</h2>
          <ul>
            <li>Python</li>
            <li>Docker</li>
            <li>Oracle</li>
            <li>PostgreeSQL</li>
            <li>JUnit</li>
            <li>Mockito</li>
            <li>Liquibase</li>
            <li>Hibernate</li>
            <li>React</li>
            <li>Html, Css, Js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
