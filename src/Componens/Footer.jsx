import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <span className="logo">⬢</span>
        <p>DUELO DE MOUNSTRUOS © 2026</p>
      </div>

      <div className="footer-center">
        <a href="#">TÉRMINOS DEL DUELO</a>
        <a href="#">PRIVACIDAD DE RELIQUIAS</a>
        <a href="#">CONTACTO</a>
      </div>

      <div className="footer-right">
        <button>⤴</button>
        <button>✣</button>
      </div>

    </footer>
  );
}

export default Footer;