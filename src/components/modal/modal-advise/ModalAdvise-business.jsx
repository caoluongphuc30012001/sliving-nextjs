import * as React from "react";
import { useState, useEffect } from "react";
import { Form, Modal, FormControl } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import ModalThanks from "../modal-thanks/ModalThanks";
import "./ModalAdvise.scss";
import swapIcon from "../../../images/business-step2-v3/png/swap.png";
import { useTranslation } from "react-i18next";

function ModalAdvise({
  houseName = "",
  serviceName = "",
  solutionNames = "",
  ...props
}) {
  const { t, i18n, ready } = useTranslation();
  const { onHide } = props;
  const [listOption, setListOption] = useState([
    {
      id: 0,
      label: "Quy mô nhỏ",
      value: "Quy mô nhỏ",
    },
    {
      id: 1,
      label: "Quy mô vừa",
      value: "Quy mô vừa",
    },
    {
      id: 2,
      label: "Quy mô lớn",
      value: "Quy mô lớn",
    },
    {
      id: 3,
      label: "Chọn quy mô",
      value: "Chọn quy mô",
    },
  ]);
  const [modalShow, setModalShow] = React.useState(false);
  const [drop, setDrop] = useState(false);
  const [option, setOption] = useState(listOption[0]);
  useEffect(() => {
    setListOption(t("modal.listOption", { returnObjects: true }));
  }, [ready, i18n.language]);
  useEffect(() => {
    setOption(listOption[0]);
  }, [listOption]);
  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target.className !== "selection-box" &&
        event.target.parentNode?.className !== "selection-box"
      ) {
        setDrop(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const googleSheetAPI =
    "https://script.google.com/macros/s/AKfycbxUm-yjyyvuJsHRJG2frhEWRkbabmeDMGoHOnAr0-t3MY6DqYt26oW5pXv0hIfhz4z2/exec";

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.fullName);
    formData.append("phone", data.telephone);
    formData.append("email", data.email);
    formData.append("content", data.content);
    formData.append("boolean", "true");
    formData.append("list", "6xdCd892x7gSZoG7768926aeLA");
    formData.append("subform", "yes");

    const googleSheetFormData = new FormData();
    googleSheetFormData.append("fullName", data.fullName);
    googleSheetFormData.append("email", data.email);
    googleSheetFormData.append("telephone", `'${data.telephone}`);
    googleSheetFormData.append("scope", option.value);
    googleSheetFormData.append("solutions", solutionNames);
    googleSheetFormData.append(
      "timestamp",
      new Date().toLocaleDateString().substring(0, 10)
    );
    googleSheetFormData.append("linkedBy", "sliving");

    axios
      .post("/subscribe", formData)
      .then(() => {
        // console.log('response: ', response.data);
        // console.log('response.status: ', response.status);
        // console.log('response.data: ', response.data);
      })
      .catch(() => {});

    axios
      .post(googleSheetAPI, googleSheetFormData)
      .then((response) => {
        if (response.status === 200) {
          onHide(false);
          setModalShow(true);
        }
      })
      .catch(() => {});

    reset();
  };
  return (
    <>
      <Modal
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-advise-sliving"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form
            className="form-advise-sliving"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <p>{t("modal.advise.title")}</p> */}
            <Form.Group className="mb-4" controlId="ControlFullName">
              <Form.Label>
                {t("modal.advise.input.company")}
                <span style={{ color: "red" }}> *</span>
              </Form.Label>
              {/* <Form.Control type="text" placeholder="Nhập tên của bạn" /> */}
              <Controller
                control={control}
                name="fullName"
                defaultValue=""
                rules={{ required: t("modal.advise.input.companyRequired") }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.fullName}
                    aria-describedby="Nhập tên"
                    autoComplete="off"
                    type="text"
                    placeholder={t("modal.advise.input.placeholderCompany")}
                    // required
                  />
                )}
              />
              <Form.Control.Feedback type="invalid" className="mx-2">
                {Object.keys(errors).length !== 0 &&
                  errors.fullName?.type === "required" && (
                    <span style={{ color: "red" }}>
                      {errors.fullName?.message}
                    </span>
                  )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="ControlEmail">
              <Form.Label>
                {t("modal.advise.input.email")}
                <span style={{ color: "red" }}> *</span>
              </Form.Label>
              {/* <Form.Control type="email" placeholder="Nhập email của bạn" /> */}
              <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{
                  required: t("modal.advise.input.emailRequired"),
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: t("modal.advise.input.placeholderEmailValid"),
                  },
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.email}
                    placeholder={t("modal.advise.input.placeholderEmail")}
                    aria-label="email"
                    aria-describedby="email"
                    autoComplete="off"
                    // required
                  />
                )}
              />
              <Form.Control.Feedback type="invalid" className="mx-2">
                {Object.keys(errors).length !== 0 &&
                  errors.email?.type === "pattern" && (
                    <span>{errors.email?.message}</span>
                  )}
                {Object.keys(errors).length !== 0 &&
                  errors.email?.type === "required" && (
                    <span>{errors.email?.message}</span>
                  )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="ControlTelephone">
              <Form.Label>
                {t("modal.advise.input.phoneNumber")}
                <span style={{ color: "red" }}> *</span>
              </Form.Label>
              {/* <Form.Control type="text" placeholder="Nhập số điện thoại của bạn" /> */}
              <Controller
                control={control}
                name="telephone"
                defaultValue=""
                rules={{
                  required: t("modal.advise.input.phoneNumberRequired"),
                  pattern: {
                    value:
                      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                    message: t(
                      "modal.advise.input.placeholderPhoneNumberValid"
                    ),
                  },
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.telephone}
                    className="telephone"
                    placeholder={t("modal.advise.input.placeholderPhoneNumber")}
                    aria-label="telephone"
                    aria-describedby="telephone"
                    autoComplete="off"
                    // required
                  />
                )}
              />
              <Form.Control.Feedback type="invalid" className="mx-2">
                {Object.keys(errors).length !== 0 &&
                  errors.telephone?.type === "pattern" && (
                    <span>{errors.telephone?.message}</span>
                  )}
                {Object.keys(errors).length !== 0 &&
                  errors.telephone?.type === "required" && (
                    <span>{errors.telephone?.message}</span>
                  )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="select-group">
              <Form.Label>
                <div className="title-sub">
                  <p className="title">{t("modal.advise.scale")}</p>
                  <p className="title-star">*</p>
                </div>
              </Form.Label>
              <div
                className="selection-box"
                onClick={() => {
                  setDrop(!drop);
                }}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <div
                  className={`main-selection ${
                    option.value !== listOption[listOption?.length - 1].value
                      ? "done"
                      : ""
                  }`}
                >
                  {option.label}
                </div>
                <img src={swapIcon} alt="" className="icon-drop-down" />
                <div className={`drop-box ${drop ? "drop" : ""}`}>
                  {listOption.map((item, index) => {
                    return (
                      index !== listOption?.length - 1 && (
                        <div
                          key={item.id}
                          className={`option ${
                            item.label === option.label ? "active" : ""
                          }`}
                          onClick={() => {
                            setOption(item);
                          }}
                          onKeyDown={() => {}}
                          role="button"
                          tabIndex={0}
                        >
                          {item.label}
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            </Form.Group>
            <button type="submit">
              <span>{t("modal.btn")}</span>
            </button>
          </Form>
        </Modal.Body>
      </Modal>
      <ModalThanks show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default ModalAdvise;
