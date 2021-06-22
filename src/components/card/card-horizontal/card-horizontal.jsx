import React from 'react';
import { Link } from "gatsby";
import { Row, Col } from "react-bootstrap";
import iconPlay from "@images/icon/play_arrow.svg";
const CardHorizonal = (props) => {
    return (
        <div className="card-horizonal">
            <Row className="card-horizonal-wrap" noGutters>
                <Col className="card-horizonal-wrap__img">
                    {
                        props.isVideo && (
                            <img src={iconPlay} alt="" className="icon-play-video" />
                        )
                    }
                    <Link to={`/news-page/${props.slug}`}
                        className="card-horizonal-link"
                        state={{ data: props.data, slug: props.slug }} >
                        <img src={props.imgUrl} alt="" className="img-sliving" />
                    </Link>
                </Col>
                <Col className="card-horizonal-wrap__desc">
                    <Link to={`/news-page/${props.slug}`}
                        className="card-horizonal-link"
                        state={{ data: props.data, slug: props.slug }} >
                        <span className="horizonal-wrap__desc-date">
                            01/06/2021
                        </span>
                        <div className="horizonal-wrap__desc-text fs-16 fw-bold">
                            <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequ...</span>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
export default CardHorizonal;
