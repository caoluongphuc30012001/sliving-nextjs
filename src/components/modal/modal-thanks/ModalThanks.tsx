import * as React from "react";
import { Image, Modal } from "react-bootstrap";
import iconV from "../../../images/icon/icon-v-thanks.svg";
import "./ModalThanks.scss";

function ModalThanks(props: any) {
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
          <Image src={iconV} /> <span>Cảm Ơn Bạn Đã Liên Hệ</span>
        </p>
        <p className="title-thanks-popup-2">
          Thông tin của bạn đã được ghi nhận, chúng tôi sẽ liên hệ tư vấn đến
          bạn sớm nhất có thể. Rất vui khi được trợ giúp bạn.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalThanks;
