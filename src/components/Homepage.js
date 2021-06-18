import React, { Component } from "react";
import "../css/Homepage.css";
import { data } from "../data";

import Thumb from "./Thumb";
import Banner from "./Banner";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <header className="main-header">
          <Banner
            content="Chez vous, partout et ailleurs"
            imgSrc="./images/homepage-banner.png"
            imgAlt="Landscape"
          />
        </header>
        <main className="main-content">
          {data.map((elt) => (
            <article key={elt.id} className="location-elt">
              <Thumb title={elt.title} src={elt.cover} id={elt.id} />
            </article>
          ))}
        </main>
      </div>
    );
  }
}

export default Homepage;