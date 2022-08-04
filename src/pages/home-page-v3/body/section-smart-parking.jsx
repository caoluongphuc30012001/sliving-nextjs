import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import imgItemCart1 from "@images/home-page-v3/svg/icon-smart-parking-item1.svg";
import imgItemCart2 from "@images/home-page-v3/svg/icon-smart-parking-item2.svg";
import imgItemCart3 from "@images/home-page-v3/svg/icon-smart-parking-item3.svg";
import imgItemCart4 from "@images/home-page-v3/svg/icon-smart-parking-item4.svg";
import imgSmartParking from "@images/home-page-v3/png/img-smart-parking.png";
import imgSmartParkingMobile from "@images/home-page-v3/png/img-smart-parking-mobile.png";
import ModalAdvise from "@components/modal/modal-advise/ModalAdvise";
import { Link } from "gatsby";

import { useTranslation } from "react-i18next";

function SectionSmartParking() {
  const [modalShow, setModalShow] = React.useState(false);

  const { t } = useTranslation();

  const listItemCard = [
    {
      id: 0,
      linkImg: imgItemCart1,
      title: t("homePage.smartParking.groupItems.title1"),
    },
    {
      id: 1,
      linkImg: imgItemCart2,
      title: (
        <>
          {t("homePage.smartParking.groupItems.title2.1")}
          <br />
          {t("homePage.smartParking.groupItems.title2.2")}
        </>
      ),
    },
    {
      id: 2,
      linkImg: imgItemCart3,
      title: (
        <>
          {t("homePage.smartParking.groupItems.title3.1")}
          <br />
          {t("homePage.smartParking.groupItems.title3.2")}
        </>
      ),
    },
    {
      id: 3,
      linkImg: imgItemCart4,
      title: t("homePage.smartParking.groupItems.title4"),
    },
  ];
  return (
    <section className="bg-ground-smart-parking">
      <div className="container-1220">
        <Row className="row-line-center m-left-right-12">
          <span className="title-eng-line-center">SMART PARKING</span>
          <h1 className="title-line-center">
            {t("homePage.smartParking.mainTitle")}
          </h1>
          <div className="img-line-center">
            <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
          </div>
          <Image src={imgSmartParking} className="smart-parking-group-img" />
          <Image
            src={imgSmartParkingMobile}
            className="smart-parking-group-img-mobile"
          />
          <h2 className="smart-parking-title">
            {t("homePage.smartParking.subTitle")}
          </h2>
          <p className="smart-parking-des">
            {t("homePage.smartParking.mainDesc")}
          </p>
        </Row>

        <Row lg={4} md={4} xs={1} className="smart-parking-cards">
          {listItemCard.map((itemCard, index) => (
            <Col className="gx-5 smart-parking-card-col" key={index.toString()}>
              <div className="smart-parking-card">
                <div className="smart-parking-card-top">
                  <Image
                    src={itemCard.linkImg}
                    className="smart-parking-card-img"
                  />
                </div>
                <span className="smart-parking-card-title">
                  {itemCard.title}
                </span>
              </div>
            </Col>
          ))}
        </Row>
        <div className="btn-group">
          <button className="advise-now-btn" onClick={() => setModalShow(true)}>
            <span>{t("homePage.btnGroup.adviseBtn")}</span>
          </button>
          <Link to="/smart-parking">
            <button className="learn-more-btn">
              <span>{t("homePage.btnGroup.learnMoreBtn")}</span>
            </button>
          </Link>
        </div>
      </div>
      <ModalAdvise show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  );
}

export default SectionSmartParking;
