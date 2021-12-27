import React from 'react';
import { Link } from "gatsby";
import { Row, Col } from "react-bootstrap";
import iconPlay from "@images/icon/play_arrow.svg";
import useGetLgn from "@hook/useGetLgn";
const CardHorizonal = (props) => {
    const Lgn = useGetLgn();
    return (
        <div className="card-horizonal">
            <Row className="card-horizonal-wrap"  >
                <Col className="card-horizonal-wrap__img">
                    {
                        props.isVideo && (
                            <img src={iconPlay} alt="" className="icon-play-video" />
                        )
                    }
                    <Link to={`${Lgn}${props.url}/${props.slug}`} className="card-horizonal-link" >
                        <img src={props.imgUrl} alt={props.alt} className="img-sliving" />
                    </Link>
                </Col>
                <Col className="card-horizonal-wrap__desc">
                    <Link to={`${Lgn}${props.url}/${props.slug}`} className="card-horizonal-link" >
                        <span className="horizonal-wrap__desc-date">
                            {
                                props.date
                            }
                        </span>
                        <div className="horizonal-wrap__desc-text fs-16 fw-bold">
                            <span>{props.title}</span>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default CardHorizonal;
