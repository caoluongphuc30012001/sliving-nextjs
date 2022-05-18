import React from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  MapContainerProps,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import iconLocation from "@images/footer-v3/svg/icon-pin.svg";

function SectionMap({ position, whenCreated }) {
  const iconMap = L.icon({
    iconUrl: iconLocation,
    iconSize: [25, 35], // size of the icon
    iconAnchor: [10, 35], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76],
    shadowSize: [68, 95], // the same for the shadow
    shadowAnchor: [22, 94],
  });
  return (
    <article>
      <div className="map">
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
      </div>
    </article>
  );
}

SectionMap.defaultProps = {
  position: undefined,
  whenCreated: undefined,
};

export default SectionMap;
