import React from "react";
import PersonalPhoto from "./PersonalPhoto";
import "../header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <PersonalPhoto></PersonalPhoto>
      <div className="text-container">
        <h1>Luís Gustavo</h1>
        <h3>Backend Developer</h3>
      </div>
    </div>
  );
}
