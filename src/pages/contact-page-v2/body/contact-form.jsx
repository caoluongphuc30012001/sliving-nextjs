import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { sendMail } from "../../../utils/ses-send-email";
import { graphql, useStaticQuery } from "gatsby";
import bgSendMailSuccess from '../../../images/contact-page-v2/image121.jpg';
import circleImg from '../../../images/contact-page-v2/circle.png';
import vectorImg from '../../../images/contact-page-v2/Vector2.png';
import data from "./../../../data/countrycode/countrycode.json"

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [ phone,setPreNumPhone] = useState('+84')
  const [formValue, setFormValue] = useState({
    name: "",
    type: "",
    country: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    jobTitle: "",
    website: "",
  });
  const [showMessage,setShowMessage] = useState(false);

  const queryGetEmail = QueryGetEmail();

  //const [ setPreNumPhone] = useState('+84')
  const { t } = useTranslation();

  //const arrNumRange = ['+84', '+354', '+380', '+66', '+1']

  const validateFeedback = (field) => {
    return (
      <Form.Control.Feedback type="invalid">
        {t(`Contact.${field}`)}
      </Form.Control.Feedback>
    );
  };

  const formatFormValue = () => {
    setFormValue({
      name: "",
      type: "",
      country: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      jobTitle: "",
      website: "",
    });
  };

  const handleValidatorNumber = (e) => {
    const val = e.target.value;
    const maxLength = 10;
    const newVal =
      val.length <= maxLength ? val : val.toString().substring(0, maxLength);
    e.target.value = newVal;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      const errorElements = document.querySelectorAll(
        "input.form-control:invalid"
      );
      errorElements[0].scrollIntoView({ block: "center", behavior: "smooth" });
      e.preventDefault();
      e.stopPropagation();
      return null;
    }

    const sendToCustomer = sendMail(
      formValue,
      queryGetEmail?.EmailCustomer?.nodes[0]
    ); // send mail to customer
    const sendToSale = sendMail(
      formValue,
      queryGetEmail?.EmailSale?.nodes[0],
      1
    ); // send mail to sale
    if (sendToCustomer && sendToSale) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      setValidated(false);
      formatFormValue()
    }
  };

  return (
    <section className="contactUs d-flex justify-content-center mb-5">

      <Form noValidate validated={validated} onSubmit={handleOnSubmit}>
        <h4 className="text-center">{t(`Contact.Title`)}</h4>
        <p className="text-center">{t(`Contact.Action`)}</p>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="customerName">Your Name</Form.Label>
          <Form.Control
            placeholder="Nguyen Van A"
            name="name"
            type="text"
            required
            value={formValue.name}
            onChange={(e) =>
              setFormValue((formFields) => ({
                ...formFields,
                name: e.target.value,
              }))
            }
          />
          {validateFeedback("Your Name")}
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="type">Types of Customer</Form.Label>
          <Form.Control
            name="type"
            id="type"
            required
            as="select"
            className="form-select"
            value={formValue.type}
            onChange={(e) =>
              setFormValue((formFields) => ({
                ...formFields,
                type: e.target.value,
              }))
            }
          >
            <option value="" hidden>
              --None--
            </option>
            <option value="1">Distributors</option>
            <option value="2">Intergration & Customizing Solutions</option>
          </Form.Control>
          {validateFeedback("Types of Customer")}
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="country">Country</Form.Label>
          <Form.Control
            name="country"
            id="country"
            required
            as="select"
            className="form-select"
            value={formValue.country}
            defaultValue="Your Country"
            onChange={(e) => {
              setFormValue((formFields) => ({
                ...formFields,
                country: e.target.value,
              }));
              setPreNumPhone(e.target.value)
            }
            }
          >
            <option value="" hidden>
              --None--
            </option>
            {data.map(item=><option key={item.code} value={item.dial_code}>
              {item.name}
            </option>)}
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
            value={formValue.email}
            onChange={(e) =>
              setFormValue((formFields) => ({
                ...formFields,
                email: e.target.value,
              }))
            }
          />
          {validateFeedback("Email")}
        </Form.Group>
        <Form.Group style={{ width: "100%" }} className="phoneNumber ">
          <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
          <span className="numberPrefix phone-number" id="phone-number">{phone}</span>
          <Form.Control
            name="phoneNumber"
            id="phoneNumber"
            placeholder="379503xxx"
            type="text"
            pattern="[0-9]{9}|[0-9]{10}"
            onInput={handleValidatorNumber}
            required
            aria-describedby="phone-number"
            value={formValue.phoneNumber}
            onChange={(e) =>
              setFormValue((formFields) => ({
                ...formFields,
                phoneNumber: e.target.value,
              }))
            }
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
            value={formValue.companyName}
            onChange={(e) =>
              setFormValue((formFields) => ({
                ...formFields,
                companyName: e.target.value,
              }))
            }
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
            value={formValue.jobTitle}
            onChange={(e) =>
              setFormValue((formFields) => ({
                ...formFields,
                jobTitle: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Form.Group style={{ width: "100%" }}>
          <Form.Label htmlFor="website">Website</Form.Label>
          <Form.Control
            placeholder="http://"
            name="website"
            id="website"
            type="url"
            value={formValue.website}
            onChange={(e) =>
              setFormValue((formFields) => ({
                ...formFields,
                website: e.target.value,
              }))
            }
          />
        </Form.Group>
        <button type="submit" className="btn btn-lg btn-block">
          {t(`Contact.Submit`)}
        </button>
      </Form>

       <div className={showMessage ? "message-notify open":"message-notify"}>
         <div className="bg-message-notify" style={{backgroundImage:`url(${bgSendMailSuccess})`}}>
              <div className="message-notify-content">
                  <div className="message-notify-icon">
                      <img className='img-vector' src={vectorImg} alt="vectorImg" />
                      <img className="img-circle" src={circleImg} alt="circleImg" />
                  </div>
                  <div className="message-notify-info">
                    {t(`thanks_submitform`)}
                  </div>
                  <div className="message-notify-line">

                  </div>
              </div>
              
          </div>
       </div>       
    </section>
  );
};

export default ContactForm;

const QueryGetEmail = () => {
  return useStaticQuery(graphql`
    {
      EmailCustomer: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/sendmail/" }
          frontmatter: { typeEmail: { eq: 0 } }
        }
      ) {
        nodes {
          html
          frontmatter {
            typeEmail
            imgBaner {
              publicURL
            }
            imgLogo {
              publicURL
            }
          }
        }
      }
      EmailSale: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/sendmail/" }
          frontmatter: { typeEmail: { eq: 1 } }
        }
      ) {
        nodes {
          html
          frontmatter {
            typeEmail
            imgBaner {
              publicURL
            }
            imgLogo {
              publicURL
            }
          }
        }
      }
    }
  `);
};
