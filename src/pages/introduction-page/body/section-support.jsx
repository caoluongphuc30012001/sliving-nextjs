import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const SectionSupport = () => {
    const { t } = useTranslation();
    return (
        <div className="section-introduction__support">
            <div className="container-wrap">
                <div className="form-support">
                    <div className="title-support fs-32 fw-bold txt-blue">
                        <span>{t(`How_Can_We_help`)}</span>
                    </div>
                    <div className="form-support-wrap">
                        <Form className="support-wrap__textarea">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    className="support-wrap-textarea"
                                    as="textarea"
                                    rows={13}
                                    placeholder={t(`Address/Name_Distributor`)} />
                            </Form.Group>
                        </Form>
                        <div className="form-contact">
                            <div className="form-contact-wrap contact-left">
                                <div className="contact-left-input"> <Form.Control className="contact-wrap__name" type="text" placeholder={t(`Your_Name`)} /></div>
                                <div className="contact-left-input"> <Form.Control className="contact-wrap__email" type="text" placeholder={t(`Your_Email`)} /></div>
                            </div>
                            <div className="form-contact-wrap contact-right">
                                <Button className="btn-delete"><span className="fs-20">{t(`Send_Message`)}</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SectionSupport;