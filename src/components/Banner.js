import React, { Component } from "react";
import "../css/Banner.css";

class Banner extends Component {
  render() {
    const { content, imgSrc, imgAlt } = this.props;

    return (
      <div className="banner">
        <div className="banner-cover"></div>
        <img src={imgSrc} alt={imgAlt} />
        {content ? <h2>{content}</h2> : null}
      </div>
    );
  }
}

export default Banner;