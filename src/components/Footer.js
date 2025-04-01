import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer">
        <p className="footer-text">©{currentYear} Guga, all rights deserved.</p>
      </footer>
    </div>
  );
}
