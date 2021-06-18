import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../css/LocationPage.css";
import { data } from "../data";

import Gallery from "./Gallery";
import Tag from "./Tag";
import Host from "./Host";
import Rate from "./Rate";
import Dropdown from "./Dropdown";

class LocationPage extends Component {
  render() {
    const idParam = this.props.match.params.id;
    //if (!data.some((elt) => elt.id === idParam)) return <Redirect to="/404" />;

    const currentLocation = data.filter((elt) => elt.id === idParam)[0];
    if (currentLocation == null) {
        return <Redirect to="/404" />;
    }

    const {
      title,
      location,
      pictures,
      host,
      equipments,
      tags,
      rating,
      description,
    } = currentLocation;

    return (
      <div className="location-page">
        <header>
          <Gallery images={pictures} />
        </header>

        <main className="main-location">
          <header className="location-header">
            <div>
              <h2>{title}</h2>
              <p>{location}</p>
              {tags.map((tag, index) => (
                <Tag key={index} content={tag} />
              ))}
            </div>
            <div className="location-header-host">
              <Host name={host.name} img={host.picture} />
              <Rate fill={rating} />
            </div>
          </header>

          <section className="location-details">
            <Dropdown title="Description" content={description} />
            <Dropdown title="Equipements" content={equipments} />
          </section>
        </main>
      </div>
    );
  }
}

export default LocationPage;