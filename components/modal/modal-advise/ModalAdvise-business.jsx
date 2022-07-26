import * as React from "react";
import { useState, useEffect } from "react";
import { Form, Modal, FormControl } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import ModalThanks from "../modal-thanks/ModalThanks";
import "./ModalAdvise.scss";
import swapIcon from "@images/business-step2-v3/png/swap.png";
function ModalAdvise({
  houseName = "",
  serviceName = "",
  solutionNames = "",
  ...props
}) {
  const { onHide } = props;

  const listOption = [
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
  ];
  const [modalShow, setModalShow] = React.useState(false);
  const [drop, setDrop] = useState(false);
  const [option, setOption] = useState(listOption[0]);
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
            {/* <p>Hãy để chúng tôi tư vấn đến bạn</p> */}
            <Form.Group className="mb-4" controlId="ControlFullName">
              <Form.Label>
                Tên Công Ty<span style={{ color: "red" }}> *</span>
              </Form.Label>
              {/* <Form.Control type="text" placeholder="Nhập tên của bạn" /> */}
              <Controller
                control={control}
                name="fullName"
                defaultValue=""
                rules={{ required: "Chưa nhập tên công ty của bạn" }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.fullName}
                    aria-describedby="Nhập tên"
                    autoComplete="off"
                    type="text"
                    placeholder="Nhập tên"
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
                Email<span style={{ color: "red" }}> *</span>
              </Form.Label>
              {/* <Form.Control type="email" placeholder="Nhập email của bạn" /> */}
              <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{
                  required: "Chưa nhập email",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Vui lòng nhập đúng Email",
                  },
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.email}
                    placeholder="Nhập email của bạn ở đây"
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
                Số điện thoại<span style={{ color: "red" }}> *</span>
              </Form.Label>
              {/* <Form.Control type="text" placeholder="Nhập số điện thoại của bạn" /> */}
              <Controller
                control={control}
                name="telephone"
                defaultValue=""
                rules={{
                  required: "Chưa nhập số điện thoại",
                  pattern: {
                    value:
                      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                    message: "Số điện thoại không đúng",
                  },
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.telephone}
                    className="telephone"
                    placeholder="Nhập số điện thoại của bạn ở đây"
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
                  <p className="title">{"Quy mô "}</p>
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
            {/* <div className="title-sub">
              <p className="title">{"Quy mô "}</p>
              <p className="title-star">*</p>
            </div>
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
            </div> */}
            {/* <Form.Group className="mb-4" controlId="ControlContent">
              <Form.Label>Lời nhắn/ Thắc mắc</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="name@example.com" />
              <Controller
                control={control}
                name="content"
                defaultValue=""
                render={({ field: { onChange, value, ref } }) => (
                  <Form.Control
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.content}
                    aria-label="Default select example"
                    // required
                    as="textarea"
                    rows={3}
                    placeholder="Để lại thắc mắc của bạn ở đây"
                  />
                )}
              />
            </Form.Group> */}
            <button type="submit">
              <span>Nhận tư vấn</span>
            </button>
          </Form>
        </Modal.Body>
      </Modal>
      <ModalThanks show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default ModalAdvise;
