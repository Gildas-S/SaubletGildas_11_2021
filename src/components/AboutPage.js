import React, { Component } from "react";
import { about } from "../data";

import Banner from "./Banner";
import Dropdown from "./Dropdown";

class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <header>
          <Banner imgSrc="./images/about-banner.png" imgAlt="Landscape" />
        </header>
        <main>
          {about.map((elt) => (
            <Dropdown key={elt.id} title={elt.title} content={elt.content} />
          ))}
        </main>
      </div>
    );
  }
}

export default AboutPage;