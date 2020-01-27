import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Polygon from "./mapElements/Polygon";

class MapUnchangeComponent extends Component {
  lastId = 0;
  render() {
    // console.log("x");
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={{ width: "30%", height: "300px" }}
        initialCenter={{ lat: 35.715298, lng: 51.404343 }}
      >
        {this.drawPolygon()}
        {this.props.points.map(x => (
          <Marker
            name={"Current location"}
            position={{ lat: x.lat, lng: x.lng }}
            id={x.pointId}
            key={x.pointId}
          />
        ))}
      </Map>
    );
  }

  drawPolygon = () => {
    if (this.props.points.length >= 3) {
      console.log("points", this.props.points);
      return (
        <Polygon
          paths={this.props.points}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35}
        />
      );
    }
  };
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"
})(MapUnchangeComponent);
