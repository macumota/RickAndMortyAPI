import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="coments">Visita nuestros GitHub para ver mas proyectos: </p>
      <div className="divGithubs">
        {/* enlace a nuestros githubs */}

        <a href="https://github.com/macumota">
          <p className="git">
            <span className="fa-brands fa-github"></span> macumota
          </p>
        </a>
        <a href="https://github.com/Numby86">
          <p className="git">
            <span className="fa-brands fa-github"></span> Numby86
          </p>
        </a>
      </div>

      {/* te manda al login, para ver los comentarios */}

      <Link to={"/login"}>
        <p className="coments">Leer comentarios de nuestros usuarios</p>
      </Link>
    </div>
  );
};

export default Footer;
