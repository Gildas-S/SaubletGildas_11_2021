import React, { Component } from "react";
import "../css/Tag.css";

class Tag extends Component {
  render() {
    const { content } = this.props;

    return <div className="tag">{content}</div>;
  }
}

export default Tag;