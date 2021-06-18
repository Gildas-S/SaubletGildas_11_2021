import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/ErrorPage.css";

class ErrorPage extends Component {
  render() {
    return (
      <div className="homepage">
        <main className="error-main">
          <span className="error">404</span>
          <span className="error-tagline">
            Oops! La page que vous demandez n'existe pas.
          </span>
          <Link to="/" title="Homepage">
            Retourner sur la page d'accueil
          </Link>
        </main>
      </div>
    );
  }
}

export default ErrorPage;