import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [preNumPhone,setPreNumPhone]=useState('+84')
  const { t } = useTranslation();

  const arrNumRange=['+84','+354','+380','+66','+1']

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
          {t(`Contact.Title`)}
        </h4>
        <p className="text-center">
          {t(`Contact.Action`)}
        </p>
        <label htmlFor="customerName">{t(`Contact.YourName`)}</label>
          <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="Nguyen Van A"
              name="name"
              type="text"
              required
            />
            {validateFeedback("ErrorYourName")}
          </Form.Group>
        <label htmlFor="type">{t(`Contact.TypesofCustomer`)}</label>
          <Form.Group style={{width:'100%'}}>
            <Form.Control
              name="type"
              id="type"
              required
              as="select"
              className="form-select"
            >
            <option value="1">Distributors</option>
            <option value="2">Intergration & Customizing Solutions</option>
            </Form.Control>
            {validateFeedback("ErrorTypesofCustomer")}
          </Form.Group>
        <label htmlFor="country">{t(`Contact.Country`)}</label>
          <Form.Group style={{width:'100%'}}>
            <Form.Control
              name="country"
              id="country"
              required
              as="select"
              className="form-select"
              defaultValue={'--None--'}
              onChange={(e)=>setPreNumPhone(arrNumRange[e.target.value])}
            >
            {/* <option value="" disabled selected hidden>
              --None--
            </option> */}
            <option value={0}>Viet Nam</option>
            <option value={1}>Iceland</option>
            <option value={2}>Ukraine</option>
            <option value={3}>Thailand</option>
            <option value={4}>Saint Kitts and Nevis</option>
            </Form.Control>
            {validateFeedback("ErrorCountry")}
          </Form.Group>
        <label htmlFor="email">{t(`Contact.Email`)}</label>
        <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="youremail@gmail.com"
              name="email"
              id="email"
              type="email"
              required
            />
            {validateFeedback("ErrorEmail")}
          </Form.Group>
        <label htmlFor="phoneNumber">{t(`Contact.Number`)}</label>
          <Form.Group style={{ width: "100%" }} className="phoneNumber">
            <span className="numberPrefix">{preNumPhone}</span>
            <Form.Control
              name="Phone number"
              id="phoneNumber"
              placeholder="379503xxx"
              type="number"
              pattern="[0-9]{9}|[0-9]{10}"
              onInput={handleValidatorNumber}
              required
            />
            {validateFeedback("ErrorNumber")}
          </Form.Group>
        <label htmlFor="companyName">{t(`Contact.CompanyName`)}</label>
        <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="ABC Company"
              name="companyName"
              id="companyName"
              type="text"
              pattern="abc"
              required
            />
            {validateFeedback("ErrorCompanyName")}
          </Form.Group>
        <label htmlFor="jobTitle">{t(`Contact.Job`)}</label>
                <Form.Group style={{ width: "100%" }}>
            <Form.Control
              placeholder="Project Manager"
              name="jobTitle"
              id="jobTitle"
              type="text"
            />
          </Form.Group>
        <label htmlFor="website">Website</label>
                <Form.Group style={{ width: "100%" }}>
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
