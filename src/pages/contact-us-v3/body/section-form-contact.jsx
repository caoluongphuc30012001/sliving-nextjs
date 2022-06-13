import React from "react";
import { Row, Image, Form, FormControl } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import ModalThanks from "../../../components/modal/modal-thanks/ModalThanks";
import axios from "axios";

function SectionFormContact() {
  const [modalShow, setModalShow] = React.useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const googleSheetAPI =
    "https://script.google.com/macros/s/AKfycbzBXBn9hPRVMvstSnUNmQRXpZ_kTothqkts6LHbtfq-yeIEYy4KCPwQ6ouCOBCYjEbx/exec";
  const onSubmit = (data) => {
    const googleSheetFormData = new FormData();
    googleSheetFormData.append("fullName", data.fullName);
    googleSheetFormData.append("email", data.email);
    googleSheetFormData.append("telephone", `'${data.telephone}`);
    googleSheetFormData.append("content", data.content);
    googleSheetFormData.append(
      "timestamp",
      new Date().toLocaleDateString().substring(0, 10)
    );
    googleSheetFormData.append("linkedBy", "sliving");
    axios
      .post(googleSheetAPI, googleSheetFormData)
      .then((response) => {
        if (response.status === 200) {
          //   onHide(false);
          setModalShow(true);
        }
      })
      .catch(() => {});

    const formData = new FormData();
    formData.append("name", data.fullName);
    formData.append("phone", data.telephone);
    formData.append("email", data.email);
    formData.append("content", data.content);
    formData.append("boolean", "true");
    formData.append("list", "6xdCd892x7gSZoG7768926aeLA");
    formData.append("subform", "yes");

    axios
      .post("/subscribe", formData)
      .then((response) => {
        console.log("response: ", response);
        console.log("response.status: ", response.status);
        console.log("response.data: ", response.data);
      })
      .catch(() => {});
    reset();

    // setModalShow(true);
  };
  return (
    <div
      className="section-form-contact container-1220"
      id="section-form-contact"
    >
      <Row className="row-line-center">
        <span className="title-eng-line-center">CONTACT US</span>
        <h2 className="title-line-center">Hãy Để Chúng Tôi Tư Vấn Đến Bạn</h2>
        <div className="img-line-center">
          <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
        </div>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)} className="contact-us-form">
        <div>
          <span className="contact-title">
            Họ và Tên <span style={{ color: "red" }}> *</span>
          </span>
          <Controller
            control={control}
            defaultValue=""
            name="fullName"
            rules={{ required: true }}
            render={({
              field: { onChange, value, ref },
              fieldState: { invalid, isDirty },
            }) => (
              <FormControl
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors.fullName}
                isValid={isDirty && !invalid}
                className="fullName"
                placeholder="Nhập tên của bạn ở đây"
                autoComplete="off"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {Object.keys(errors).length !== 0 &&
              errors.fullName?.type === "required" && (
                <span>Dữ liệu không hợp lệ</span>
              )}
          </Form.Control.Feedback>
        </div>
        <div>
          <span className="contact-title">
            Email <span style={{ color: "red" }}> *</span>
          </span>
          <Controller
            control={control}
            defaultValue=""
            name="email"
            rules={{
              required: true,
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "",
              },
            }}
            render={({
              field: { onChange, value, ref },
              fieldState: { invalid, isDirty },
            }) => {
              return (
                <FormControl
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  isInvalid={errors.email}
                  isValid={isDirty && !invalid}
                  className="email"
                  placeholder="Nhập email của bạn ở đây"
                  autoComplete="off"
                />
              );
            }}
          />

          <Form.Control.Feedback type="invalid">
            {Object.keys(errors).length !== 0 &&
              errors.email?.type === "pattern" && (
                <span>Dữ liệu không hợp lệ</span>
              )}
            {Object.keys(errors).length !== 0 &&
              errors.email?.type === "required" && (
                <span>Dữ liệu không hợp lệ</span>
              )}
          </Form.Control.Feedback>
        </div>
        <div>
          <span className="contact-title">
            Số điện thoại <span style={{ color: "red" }}> *</span>
          </span>
          <Controller
            control={control}
            defaultValue=""
            name="telephone"
            rules={{
              required: true,
              pattern: {
                value:
                  /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                message: "",
              },
            }}
            render={({
              field: { onChange, value, ref },
              fieldState: { invalid, isDirty },
            }) => (
              <FormControl
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors.telephone}
                isValid={isDirty && !invalid}
                className="telephone"
                placeholder="Nhập số điện thoại của bạn ở đây"
                autoComplete="off"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {Object.keys(errors).length !== 0 &&
              errors.telephone?.type === "pattern" && (
                <span>Dữ liệu không hợp lệ</span>
              )}
            {Object.keys(errors).length !== 0 &&
              errors.telephone?.type === "required" && (
                <span>Dữ liệu không hợp lệ</span>
              )}
          </Form.Control.Feedback>
        </div>
        <div>
          <span className="contact-title">Lời nhắn/ Thắc mắc</span>
          <Controller
            control={control}
            defaultValue=""
            name="content"
            render={({
              field: { onChange, value, ref },
              fieldState: { invalid, isDirty },
            }) => (
              <Form.Control
                onChange={onChange}
                value={value}
                ref={ref}
                isInvalid={errors.content}
                isValid={isDirty && !invalid}
                className="content"
                as="textarea"
                rows={9}
                placeholder="Để lại thắc mắc của bạn ở đây"
                autoComplete="off"
              />
            )}
          />
        </div>
        <Row className="justify-content-center">
          <button type="submit" className="btn-advise-now">
            <span>Nhận tư vấn</span>
          </button>
        </Row>
      </Form>
      <ModalThanks show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default SectionFormContact;
