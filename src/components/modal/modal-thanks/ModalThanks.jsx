import * as React from "react";
import { Image, Modal } from "react-bootstrap";
import iconV from "../../../images/icon/icon-v-thanks.svg";
import { useTranslation } from "react-i18next";
import "./ModalThanks.scss";

function ModalThanks(props) {
  const { t } = useTranslation();
  return (
    <Modal
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-thanks-popup"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p className="title-thanks-popup">
          <Image src={iconV} /> <span>{t("modal.thank.title")}</span>
        </p>
        <p className="title-thanks-popup-2">
          {t(
            "Your information is recorded, and we will contact you to consult the solution at the soonest time. It's nice to help you!"
          )}
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalThanks;
