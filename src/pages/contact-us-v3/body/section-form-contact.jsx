import React from "react";
import {
  Row,
  Col,
  Image,
  Container,
  FloatingLabel,
  Form,
  FormControl,
} from "react-bootstrap";
import axios from "axios";
// import imgUnderLine from "/assets/image/svg/title-line-under.svg";
// import imgAbsolute from "/assets/image/landing-page/digital-banking/bg-contact-us.png";
import { Controller, useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";

function SectionFormContact() {
  // const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    // console.log("data", data);
    // const formData = new FormData();
    // formData.append("name", data.fullName);
    // formData.append("phone", data.telephone);
    // formData.append(
    //   "content",
    //   `Nội dung tin nhắn : ${data.content} </br> Công ty : ${data.company}`
    // );
    // formData.append("email", data.email);
    // formData.append("boolean", "true");
    // formData.append("list", "6xdCd892x7gSZoG7768926aeLA");

    // axios
    //   .post("/subscribe", formData)
    //   .then((response) => {
    //     console.log("response: ", response.data);
    //     console.log("response.status: ", response.status);
    //     console.log("response.data: ", response.data);
    //     alert("Nhân viên của chúng tôi sẽ liên hệ bạn sau ít phút.");
    //   })
    //   .catch((error) => {
    //     console.error("Something went wrong!", error);
    //     // alert('Lỗi hệ thống.');
    //   });
    alert("Lỗi hệ thống.");
    reset();
  };
  return (
    <div className="back-ground-contact-us" id="back-ground-contact-us">
      <Container className="max-width-1180 padding-left-right">
        {/* <h1 className="title-banking-software">
          {t("digitalBankingLandingPage.contact.title")}
        </h1>
        <div className="d-flex justify-content-center">
          <Image src={imgUnderLine} style={{ width: 224, height: 6 }} />
        </div>
        <p className="description-contact-us-digital">
          {t("digitalBankingLandingPage.contact.des")}
        </p> */}
        <div className="row-form-contact-us">
          <Form
            className="form-contact-digital px-0 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <Row className="gx-4">
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label=""
                  className="mb-5"
                >
                  <Controller
                    control={control}
                    name="fullName"
                    defaultValue=""
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
                        placeholder="fullName"
                        aria-label="fullName"
                        aria-describedby="fullName"
                        autoComplete="off"
                      />
                    )}
                  />

                  <Form.Control.Feedback type="invalid">
                    {Object.keys(errors).length !== 0 &&
                      errors.fullName?.type === "required" && (
                        <span>fullNameError</span>
                      )}
                  </Form.Control.Feedback>
                  <Form.Label>
                    fullName
                    <span style={{ color: "red" }}> *</span>
                  </Form.Label>
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="floatingInput"
                  label=""
                  className="mb-5"
                >
                  <Controller
                    control={control}
                    name="telephone"
                    defaultValue=""
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
                        placeholder="telephone"
                        aria-label="telephone"
                        aria-describedby="telephone"
                        autoComplete="off"
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {Object.keys(errors).length !== 0 &&
                      errors.telephone?.type === "pattern" && (
                        <span>telephoneErrorValid</span>
                      )}
                    {Object.keys(errors).length !== 0 &&
                      errors.telephone?.type === "required" && (
                        <span>telephoneError</span>
                      )}
                  </Form.Control.Feedback>
                  <Form.Label>
                    telephone
                    <span style={{ color: "red" }}> *</span>
                  </Form.Label>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="gx-4">
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label=""
                  className="mb-5"
                >
                  <Controller
                    control={control}
                    name="email"
                    defaultValue=""
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
                          placeholder="email"
                          aria-label="email"
                          aria-describedby="email"
                          autoComplete="nope"
                        />
                      );
                    }}
                  />

                  <Form.Control.Feedback type="invalid">
                    {Object.keys(errors).length !== 0 &&
                      errors.email?.type === "pattern" && (
                        <span>emailErrorValid</span>
                      )}
                    {Object.keys(errors).length !== 0 &&
                      errors.email?.type === "required" && (
                        <span>emailError</span>
                      )}
                  </Form.Control.Feedback>
                  <Form.Label>
                    email
                    <span style={{ color: "red" }}> *</span>
                  </Form.Label>
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label=""
                  className="mb-5"
                >
                  <Controller
                    control={control}
                    name="company"
                    defaultValue=""
                    rules={{ required: true }}
                    render={({
                      field: { onChange, value, ref },
                      fieldState: { invalid, isDirty },
                    }) => (
                      <FormControl
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        isInvalid={errors.company}
                        isValid={isDirty && !invalid}
                        className="company"
                        placeholder="company"
                        aria-label="company"
                        aria-describedby="company"
                        autoComplete="off"
                      />
                    )}
                  />

                  <Form.Control.Feedback type="invalid">
                    {Object.keys(errors).length !== 0 &&
                      errors.company?.type === "required" && (
                        <span>companyError</span>
                      )}
                  </Form.Control.Feedback>
                  <Form.Label>
                    company
                    <span style={{ color: "red" }}> *</span>
                  </Form.Label>
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Controller
                  control={control}
                  name="content"
                  defaultValue=""
                  //   rules={{ required: 'Chưa nhập tên công ty' }}
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
                      placeholder="content"
                      autoComplete="off"
                    />
                  )}
                />
              </Form.Group>
            </Row>
            <Row className="justify-content-center">
              <button type="submit" className="btn-consult-now">
                contact
              </button>
            </Row>
          </Form>
        </div>
      </Container>
      <div>
        {/* <Image src={imgAbsolute} className="img-bottom-contact-us" /> */}
      </div>
    </div>
  );
}
export default SectionFormContact;
