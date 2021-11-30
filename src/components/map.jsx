import React, { useState, useCallback, useMemo, useEffect } from 'react';
import iconLocation from "../images/icon/location-pin.svg";
import iconPin from "../images/icon/pin_fill.svg";
import ArticleInfo from './article-info';


const position = [10.849997413384632, 106.80553665690692];
const zoom = 15;
const SectionMap = () => {
    const [isDidMount, setIsDidMount] = useState(false);
    useEffect(() => {
        setIsDidMount(true);
    }, []);
    const [map, setMap] = useState(null);
    const BuildPosition = ({ map }) => {
        const onClick = useCallback(() => {
            map.setView(position, zoom)
        }, [map])
        return (
            <button onClick={onClick} className="btn-reset"><img src={iconPin} alt="careers sunshine tech" /></button>
        )
    }

    const MapLeaflet = useMemo(() => {
        if (isDidMount) {
            var { MapContainer, Marker, TileLayer } = require("react-leaflet");
            const L = require("leaflet");
            const iconMap = L.icon({
                iconUrl: iconLocation,
                iconSize: [27, 43], // size of the icon
                // iconAnchor: [22, 47], // point of the icon which will correspond to marker's location
                popupAnchor: [-3, -76],
                shadowSize: [68, 95], // the same for the shadow
                shadowAnchor: [22, 94], //point from which the popup should open relative to the iconAnchor
            });
            return (
                <>
                    <MapContainer
                        center={position}
                        zoom={15}
                        scrollWheelZoom={false}
                        style={{ width: 1440, height: 660 }}
                        whenCreated={setMap}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={iconMap}></Marker>
                    </MapContainer>

                </>
            );
        } else {
            return null;
        }
    }, [isDidMount]);
    return (
        <section className="section-map container-v2">
            {MapLeaflet} {map ? <BuildPosition map={map} /> : null}
            <article className="form-contact-wrap">
                <ArticleInfo />
            </article>
        </section>
    );
}

export default SectionMap;