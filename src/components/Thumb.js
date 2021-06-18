import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Thumb.css";

class Thumb extends Component {
  render() {
    const { title, src, id } = this.props;

    return (
      <div className="thumb">
        <Link to={`/location/${id}`} title={title} className="thumb-link">
          <div className="thumb-cover"></div>
          <img src={src} alt={title} />
          <h2>{title}</h2>
        </Link>
      </div>
    );
  }
}

export default Thumb;