import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [preNumPhone, setPreNumPhone] = useState('+84')
  const { t } = useTranslation();

  const arrNumRange = ['+84', '+354', '+380', '+66', '+1']

  const validateFeedback = (field) => {
    return (
      <Form.Control.Feedback type="invalid">
        {t(`Contact.${field}`)}
      </Form.Control.Feedback>
    );
  };
  const handleValidatorNumber = (e) => {
    const val = e.target.value;
    const maxLength = 10;
    const newVal = val.length <= maxLength ? val : val.toString().substring(0, maxLength)
    e.target.value = newVal;
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      const errorElements = document.querySelectorAll("input.form-control:invalid");
      errorElements[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
      e.preventDefault();
      e.stopPropagation();
      return null;
    }
  }
  return (
    <section className="contactUs d-flex justify-content-center mb-5">
      <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
        <h4 className="text-center">
          {t(`Contact.Title`)}
        </h4>
        <p className="text-center">
          {t(`Contact.Action`)}
        </p>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="customerName">Your Name</Form.Label>
          <Form.Control
            placeholder="Nguyen Van A"
            name="name"
            type="text"
            required
          />
          {validateFeedback("Your Name")}
        </Form.Group>
        <Form.Group style={{ width: '100%' }}>
          <Form.Label htmlFor="type">Types of Customer</Form.Label>
          <Form.Control
            name="type"
            id="type"
            required
            as="select"
            className="form-select"
          >
            <option value="" disabled selected hidden>
              --None--
            </option>
            <option value="1">Distributors</option>
            <option value="2">Intergration & Customizing Solutions</option>
          </Form.Control>
          {validateFeedback("Types of Customer")}
        </Form.Group>
        <Form.Group style={{ width: '100%' }}>
          <Form.Label htmlFor="country">Country</Form.Label>
          <Form.Control
            name="country"
            id="country"
            required
            as="select"
            className="form-select"
          >
            <option value="" disabled selected hidden>
              --None--
            </option>
            <option value="1">Viet Nam</option>
            <option value="2">Iceland</option>
            <option value="3">Ukraine</option>
            <option value="4">Thailand</option>
            <option value="5">Saint Kitts and Nevis</option>
          </Form.Control>
          {validateFeedback("Country")}
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            placeholder="youremail@gmail.com"
            name="email"
            id="email"
            type="email"
            required
          />
          {validateFeedback("Email")}
        </Form.Group>
        <Form.Group style={{ width: "100%" }} className="phoneNumber ">
          <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
          <span className="numberPrefix phone-number" id="phone-number">+84</span>
          <Form.Control
            name="Phone number"
            id="phoneNumber"
            placeholder="379503xxx"
            type="text"
            pattern="[0-9]{9}|[0-9]{10}"
            onInput={handleValidatorNumber}
            required
            aria-describedby="phone-number"
          />
          {validateFeedback("Phone Number")}
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="companyName">Company Name</Form.Label>

          <Form.Control
            placeholder="ABC Company"
            name="companyName"
            id="companyName"
            type="text"
            pattern="abc"
            required
          />
          {validateFeedback("Company Name")}
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="jobTitle">Job Title</Form.Label>
          <Form.Control
            placeholder="Project Manager"
            name="jobTitle"
            id="jobTitle"
            type="text"
          />
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="website">Website</Form.Label>
          <Form.Control
            placeholder="http://"
            name="website"
            id="website"
            type="url"
          />
        </Form.Group>
        <button type="submit" className="btn btn-lg btn-block">
          {t(`Contact.Submit`)}
        </button>
      </Form>
    </section>
  );
};
export default ContactForm;
