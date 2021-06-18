import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <Link to="/">
          <img src="./images/logo.png" alt="Kasa" />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;