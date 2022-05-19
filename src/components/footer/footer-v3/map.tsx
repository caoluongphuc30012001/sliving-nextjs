import React, { useMemo } from "react";
// import {
//   MapContainer,
//   Marker,
//   TileLayer,
//   MapContainerProps,
// } from "react-leaflet";
// import L, { LatLngExpression } from "leaflet";
import iconLocation from "/assets/image/svg/icon-pin.svg";

// const position = { lat: 10.849997413384632, lng: 106.80553665690692 };
// const zoom = 15;

function SectionMap({ position, whenCreated }) {
  const BuildMap = useMemo(() => {
    const { MapContainer, TileLayer, Marker } = require("react-leaflet");
    const { LatLngExpression } = require("leaflet");
    const L = require("leaflet");

    const iconMap = L.icon({
      iconUrl: iconLocation,
      iconSize: [25, 35], // size of the icon
      iconAnchor: [10, 35], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76],
      shadowSize: [68, 95], // the same for the shadow
      shadowAnchor: [22, 94],
    });
    return (
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ width: "100%", height: 362 }}
        preferCanvas
        whenCreated={whenCreated}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && <Marker position={position} icon={iconMap} />}
      </MapContainer>
    );
  }, []);
  return (
    <article>
      <div className="map">{BuildMap}</div>
    </article>
  );
}

SectionMap.defaultProps = {
  position: undefined,
  whenCreated: undefined,
};

export default SectionMap;
