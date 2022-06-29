import React, { useMemo, useRef, useEffect } from "react";
import iconLocation from "@images/footer-v3/svg/icon-location.svg";

const positionList = {
  headquarters: { lat: 21.0300541, lng: 105.7786784 },
  factory: { lat: 10.85023, lng: 106.80562 },
};

function SectionMap({ position, whenCreated }) {
  const BuildMap = useMemo(() => {
    const {
      MapContainer,
      TileLayer,
      Marker,
      Popup,
      Tooltip,
    } = require("react-leaflet");
    const L = require("leaflet");
    const iconMap = L.icon({
      iconUrl: iconLocation,
      iconSize: [50, 40], // size of the icon
      iconAnchor: [22, 35], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76],
      shadowSize: [68, 95], // the same for the shadow
      shadowAnchor: [22, 94],
    });

    return (
      <MapContainer
        center={position}
        zoom={20}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "calc(100vh - 90px - 44px)",
          zIndex: "1",
        }}
        preferCanvas
        whenCreated={whenCreated}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && (
          <Marker position={position} icon={iconMap}>
            <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
              {position.lat === positionList.headquarters.lat &&
              position.lng === positionList.headquarters.lng
                ? "Sunshine Center"
                : "Unicloud Smart Factory"}
            </Tooltip>
          </Marker>
        )}
      </MapContainer>
    );
  }, [position]);

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
