import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import imagelogo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Link className="links" to={"/"}>
        <img className="imageLogo" src={imagelogo} alt="logo" />
      </Link>
      <ul className="ulNavBar">
        <span className="spanLi">
          <li className="liNavBar">
            <Link className="links" to={"/login"}>
              <h2 className="h2NavBar">TU USUARIO</h2>
            </Link>
          </li>
        </span>
        <span className="spanLi">
        <li className="liNavBar">
          <Link className="links" to={"/list"}>
            <h2 className="h2NavBar">LISTADO</h2>
          </Link>
        </li>
        </span>
        <span className="spanLi">
        <li className="liNavBar">
          <Link className="links" to={"/miniCard"}>
            <h2 className="h2NavBar">CARDS</h2>
          </Link>
        </li>
        </span>
      </ul>
    </div>
  );
};

export default Header;