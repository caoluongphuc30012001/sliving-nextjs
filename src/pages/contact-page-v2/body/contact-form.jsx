import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const validateFeedback = (field) => {
    return (
      <Form.Control.Feedback type="invalid">
        Please provide {field}
      </Form.Control.Feedback>
    );
  };
  const handleValidatorNumber = (e) => {
    const val = e.target.value;
    const maxLength = 10;
    const newVal = val.length <= maxLength ? val : val.toString().substring(0, maxLength)
    e.target.value = newVal;
  }
  const handleOnSubmit=(e)=>{
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
          The Sliving's team stands ready to co-operate with you.
        </h4>
        <p className="text-center">
          Please fill out the fields below and someone will be in touch with you
          very soon.
        </p>
        <label for="customerName">Your Name</label>
          <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="Nguyen Van A"
              name="name"
              type="text"
              required
            />
            {validateFeedback("Your Name")}
          </Form.Group>
        <label for="type">Types of Customer</label>
          <Form.Group style={{width:'100%'}}>
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
        <label for="country">Country</label>
          <Form.Group style={{width:'100%'}}>
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
        <label for="email">Email Address</label>
        <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="youremail@gmail.com"
              name="email"
              id="email"
              type="email"
              required
            />
            {validateFeedback("Email")}
          </Form.Group>
        <label for="phoneNumber">Phone Number</label>
          <Form.Group style={{ width: "100%" }} className="phoneNumber">
            <span class="numberPrefix">+84</span>
            <Form.Control
              name="Phone number"
              id="phoneNumber"
              placeholder="379503xxx"
              type="text"
              pattern="[0-9]{9}|[0-9]{10}"
              onInput={handleValidatorNumber}
              required
            />
            {validateFeedback("Phone Number")}
          </Form.Group>
        <label for="companyName">Company Name</label>
        <Form.Group style={{ width: "100%" }}>
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
        <label for="jobTitle">Job Title</label>
                <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="Project Manager"
              name="jobTitle"
              id="jobTitle"
              type="text"
            />
          </Form.Group>
        <label for="website">Website</label>
                <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="http://"
              name="website"
              id="website"
              type="url"
            />
          </Form.Group>
        <button type="submit" class="btn btn-lg btn-block">
          Submit
        </button>
      </Form>
    </section>
  );
};
export default ContactForm;
