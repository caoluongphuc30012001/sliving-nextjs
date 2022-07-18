import React from "react";
import { Row, Image, Form, FormControl } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import imgUnderLine from "@images/home-page-v3/svg/title-line-under.svg";
import ModalThanks from "../../../components/modal/modal-thanks/ModalThanks";
import axios from "axios";

import { useTranslation } from "react-i18next";
function SectionFormContact() {
  const [modalShow, setModalShow] = React.useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { i18n, t } = useTranslation();

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
        <span className="title-eng-line-center">
          {t("contact.formContact.subTileMain")}
        </span>
        <h2 className="title-line-center">
          {t("contact.formContact.titleMain")}
        </h2>
        <div className="img-line-center">
          <Image src={imgUnderLine} style={{ width: 88, height: 4 }} />
        </div>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)} className="contact-us-form">
        <div>
          <span className="contact-title">
            {t("contact.formContact.inputTitle.name")}{" "}
            <span style={{ color: "red" }}> *</span>
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
                placeholder={t("contact.formContact.inputPlaceholder.name")}
                autoComplete="off"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {Object.keys(errors).length !== 0 &&
              errors.fullName?.type === "required" && (
                <span>{t('contact.formContact.invalid')}</span>
              )}
          </Form.Control.Feedback>
        </div>
        <div>
          <span className="contact-title">
            {t("contact.formContact.inputTitle.email")}{" "}
            <span style={{ color: "red" }}> *</span>
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
                  placeholder={t("contact.formContact.inputPlaceholder.email")}
                  autoComplete="off"
                />
              );
            }}
          />

          <Form.Control.Feedback type="invalid">
            {Object.keys(errors).length !== 0 &&
              errors.email?.type === "pattern" && (
                <span>{t('contact.formContact.invalid')}</span>
              )}
            {Object.keys(errors).length !== 0 &&
              errors.email?.type === "required" && (
                <span>{t('contact.formContact.invalid')}</span>
              )}
          </Form.Control.Feedback>
        </div>
        <div>
          <span className="contact-title">
            {t("contact.formContact.inputTitle.phoneNumber")}{" "}
            <span style={{ color: "red" }}> *</span>
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
                placeholder={t(
                  "contact.formContact.inputPlaceholder.phoneNumber"
                )}
                autoComplete="off"
              />
            )}
          />
          <Form.Control.Feedback type="invalid">
            {Object.keys(errors).length !== 0 &&
              errors.telephone?.type === "pattern" && (
                <span>{t('contact.formContact.invalid')}</span>
              )}
            {Object.keys(errors).length !== 0 &&
              errors.telephone?.type === "required" && (
                <span>{t('contact.formContact.invalid')}</span>
              )}
          </Form.Control.Feedback>
        </div>
        <div>
          <span className="contact-title">
            {t("contact.formContact.inputTitle.message")}
          </span>
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
                placeholder={t("contact.formContact.inputPlaceholder.message")}
                autoComplete="off"
              />
            )}
          />
        </div>
        <Row className="justify-content-center">
          <button type="submit" className="btn-advise-now">
            <span>{t("contact.formContact.button")}</span>
          </button>
        </Row>
      </Form>
      <ModalThanks show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default SectionFormContact;
