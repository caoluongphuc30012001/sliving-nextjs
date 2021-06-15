import React, { useState, useEffect, useRef, useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Select, { components } from "react-select";
import {
    Row,
    Col,
    InputGroup,
    Button,
    FormControl,
    Form,
} from "react-bootstrap";
import iconSearch from "@images/icon/icon-search.svg";
//import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import iconLocation from "@images/icon/marker.svgomg.svg";
import { useTranslation } from 'react-i18next';
const ContactPages = () => {
    const { t } = useTranslation();
    const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          label
          value
          district {
            value
          }
        }
      }
    }
  `);
    const selectInputPreRef = useRef();
    const [arrContries, setArrContries] = useState([]);
    const [arrPre, setArrPre] = useState([]);
    const [isDidMount, setIsDidMount] = useState(false);
    useEffect(() => {
        setIsDidMount(true);
    }, []);
    useEffect(() => {
        setArrContries(data.allDataJson.nodes);
        arrContries.forEach((country, index) => {
            country.isActive = index === 0 ? true : false;
            if (country.value === null) {
                arrContries.splice(index, 1);
            }
        });
    }, [arrContries, data.allDataJson.nodes]);
    const Dropdown = () => {
        return <img className="img-search-contact" src={iconSearch} alt="" />;
    };
    const Placeholder = (contacts) => {
        return <components.Placeholder {...contacts} />;
    };
    const handleChange = (selectedOption) => {
        setArrPre([]);
        if (selectedOption) {
            setArrPre(selectedOption.district);
        }
    };
    const MapLeaflet = useMemo(() => {
        const position = [10.849931, 106.805517];
        if (isDidMount) {
            var { MapContainer, Marker, TileLayer } = require("react-leaflet");
            const L = require("leaflet");
            const iconMap = L.icon({
                iconUrl: iconLocation,
                iconSize: [27, 43], // size of the icon
                iconAnchor: [22, 47], // point of the icon which will correspond to marker's location
                popupAnchor: [-3, -76],
                shadowSize: [68, 95], // the same for the shadow
                shadowAnchor: [22, 94], //point from which the popup should open relative to the iconAnchor
            });
            return (
                <MapContainer
                    center={position}
                    zoom={15}
                    scrollWheelZoom={false}
                    style={{ width: 1170, height: 670 }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={iconMap}></Marker>
                </MapContainer>
            );
        } else {
            return null;
        }
    }, [isDidMount]);
    return (
        <div className="container contact-form-search">
            <div className="contact-form-header">
                <div className="contact-form-title txt-blue fs-34 fw-bold">
                    <span>{t(`Sales/Contruction_agent`)}</span>
                </div>
                <div className="contact-form-subtitle  fs-18">
                    <span>{t(`Nearest_agency`)}</span>
                </div>
            </div>
            <div className="contact-form-body">
                <Row noGutters className="contact-search">
                    <Col xs={12} sm={6} className="contact-search-left">
                        {arrContries && (
                            <Select
                                id="select-id"
                                className="react-select-container"
                                classNamePrefix="countries-wrap  select-contries"
                                components={{ Placeholder }}
                                placeholder={t(`Province/City`)}
                                styles={{
                                    placeholder: (base) => ({
                                        ...base,
                                        fontSize: "1em",
                                        fontWeight: 400,
                                        color: "#5c5c5c",
                                    }),
                                }}
                                isClearable
                                onChange={(selectedOption, triggeredAction) => {
                                    handleChange(selectedOption);
                                    if (triggeredAction.action === "clear") {
                                        selectInputPreRef.current.select.clearValue();
                                    }
                                }}
                                isSearchable
                                options={arrContries}
                                getOptionLabel={(option) => `${option.value}`}
                            />
                        )}
                    </Col>
                    <span></span>
                    <Col xs={12} sm={6}>
                        <Select
                            ref={selectInputPreRef}
                            className="react-select-container"
                            classNamePrefix="select-contries"
                            components={{ Placeholder }}
                            placeholder={t(`District`)}
                            options={arrPre}
                            isClearable
                            isSearchable
                            styles={{
                                placeholder: (base) => ({
                                    ...base,
                                    fontSize: "1em",
                                    fontWeight: 400,
                                }),
                            }}
                            getOptionLabel={(option) => `${option.value}`}
                        />
                    </Col>
                </Row>

                <Row noGutters className="contact-search">
                    <Col xs={12}>
                        <InputGroup className="contact-search-input">
                            <FormControl
                                placeholder={t(`Address/Name_Distributor`)}
                                aria-label="Địa chỉ/Tên nhà phân phối"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <Dropdown />
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
            <div className="body-map">{MapLeaflet}</div>
            <div className="form-support">
                <div className="title-support fs-32 fw-bold txt-blue">
                    <span>{t(`How_Can_We_help`)}</span>
                </div>
                <div className="form-support-wrap">
                    <Form className="support-wrap__textarea">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                className="support-wrap-textarea"
                                as="textarea"
                                rows={13}
                                placeholder={t(`Address/Name_Distributor`)} />
                        </Form.Group>
                    </Form>
                    <div className="form-contact">
                        <div className="form-contact-wrap contact-left">
                            <div className="contact-left-input"> <Form.Control className="contact-wrap__name" type="text" placeholder={t(`Your_Name`)} /></div>
                            <div className="contact-left-input"> <Form.Control className="contact-wrap__email" type="text" placeholder={t(`Your_Email`)} /></div>
                        </div>
                        <div className="form-contact-wrap contact-right">
                            <Button className="btn-delete"><span className="fs-20">{t(`Send_Message`)}</span></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactPages;
