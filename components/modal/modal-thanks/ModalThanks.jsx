import * as React from "react";
import { Image, Modal } from "react-bootstrap";
import iconV from "@images/icon/icon-v-thanks.svg";
import style from "./ModalThanks.module.scss";

function ModalThanks(props) {
  return (
    <Modal
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={style["modal-thanks-popup"]}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <p className={style["title-thanks-popup"]}>
          <Image src={iconV} alt="" /> <span>Cảm Ơn Bạn Đã Liên Hệ</span>
        </p>
        <p className={style["title-thanks-popup-2"]}>
          Thông tin của bạn đã được ghi nhận, chúng tôi sẽ liên hệ tư vấn đến
          bạn sớm nhất có thể. Rất vui khi được trợ giúp bạn.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalThanks;
