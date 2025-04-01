import React from "react";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaDatabase,
  FaFlask,
  FaCode,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiC,
  SiLiquibase,
  SiHibernate,
  SiJavascript,
} from "react-icons/si";
import "../abilities.css";

export default function Abilities() {
  const skills = {
    Advanced: [
      { name: "Java", icon: <FaJava /> },
      { name: "SpringBoot", icon: <SiSpringboot /> },
    ],
    Intermediate: [
      { name: "C", icon: <SiC /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "RestAPI", icon: <FaDatabase /> },
      { name: "JPA", icon: <FaDatabase /> },
      { name: "OOP", icon: <FaDatabase /> },
      { name: "Data Structures and Algorithms", icon: <FaDatabase /> },
    ],
    Beginner: [
      { name: "Python", icon: <FaDatabase /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Oracle", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "JUnit", icon: <FaFlask /> },
      { name: "Mockito", icon: <FaCode /> },
      { name: "Liquibase", icon: <SiLiquibase /> },
      { name: "Hibernate", icon: <SiHibernate /> },
      { name: "React", icon: <FaReact /> },
      { name: "HTML, CSS, JS", icon: <SiJavascript /> },
    ],
  };

  return (
    <div className="abilities-container">
      <div className="abilities-wrapper">
        {Object.entries(skills).map(([level, skillsList]) => (
          <div className="abilities-category" key={level}>
            <h2>{level}</h2>
            <ul>
              {skillsList.map((skill) => (
                <li key={skill.name}>
                  <span className="icon">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
