import axios from 'axios';
import { useTranslation } from 'next-i18next';
import * as React from 'react';
import { Form, FormControl, Modal } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { ModalThanks } from '..';
import styles from './ModalAdvise.module.scss';

function ModalAdvise({ houseName = '', serviceName = '', productName = '', ...props }) {
  const { onHide } = props;

  const [modalShow, setModalShow] = React.useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const { t } = useTranslation('common');

  const googleSheetAPI =
    'https://script.google.com/macros/s/AKfycbzBXBn9hPRVMvstSnUNmQRXpZ_kTothqkts6LHbtfq-yeIEYy4KCPwQ6ouCOBCYjEbx/exec';

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.fullName);
    formData.append('phone', data.telephone);
    formData.append('email', data.email);
    formData.append('content', data.content);
    formData.append('boolean', 'true');
    formData.append('list', '6xdCd892x7gSZoG7768926aeLA');
    formData.append('subform', 'yes');

    const googleSheetFormData = new FormData();
    googleSheetFormData.append('fullName', data.fullName);
    googleSheetFormData.append('email', data.email);
    googleSheetFormData.append('telephone', `'${data.telephone}`);
    googleSheetFormData.append('content', data.content);
    googleSheetFormData.append('timestamp', new Date().toLocaleDateString().substring(0, 10));
    googleSheetFormData.append('linkedBy', 'sliving');
    googleSheetFormData.append('serviceName', serviceName);
    {
      productName && googleSheetFormData.append('productName', productName);
    }
    googleSheetFormData.append('houseName', houseName);

    axios
      .post('/subscribe', formData)
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
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles['modal-advise-sliving']}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form className={styles['form-advise-sliving']} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4" controlId="ControlFullName">
              <Form.Label>
                {t('modal.advise.input.name')}
                <span style={{ color: 'red' }}> *</span>
              </Form.Label>
              <Controller
                control={control}
                name="fullName"
                defaultValue=""
                rules={{ required: t('modal.advise.input.nameRequired') }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.fullName}
                    aria-describedby="Nhập tên của bạn"
                    autoComplete="off"
                    type="text"
                    placeholder={t('modal.advise.input.placeholderName')}
                  />
                )}
              />
              <Form.Control.Feedback type="invalid" className="mx-2">
                {Object.keys(errors).length !== 0 && errors.fullName?.type === 'required' && (
                  <span style={{ color: 'red' }}>{errors.fullName?.message}</span>
                )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="ControlEmail">
              <Form.Label>
                {t('modal.advise.input.email')}
                <span style={{ color: 'red' }}> *</span>
              </Form.Label>
              <Controller
                control={control}
                name="email"
                defaultValue=""
                rules={{
                  required: t('modal.advise.input.emailRequired'),
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: t('modal.advise.input.placeholderEmailValid'),
                  },
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.email}
                    placeholder={t('modal.advise.input.placeholderEmail')}
                    aria-label="email"
                    aria-describedby="email"
                    autoComplete="off"
                  />
                )}
              />
              <Form.Control.Feedback type="invalid" className="mx-2">
                {Object.keys(errors).length !== 0 && errors.email?.type === 'pattern' && (
                  <span>{errors.email?.message}</span>
                )}
                {Object.keys(errors).length !== 0 && errors.email?.type === 'required' && (
                  <span>{errors.email?.message}</span>
                )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="ControlTelephone">
              <Form.Label>
                {t('modal.advise.input.phoneNumber')}
                <span style={{ color: 'red' }}> *</span>
              </Form.Label>
              <Controller
                control={control}
                name="telephone"
                defaultValue=""
                rules={{
                  required: t('modal.advise.input.phoneNumberRequired'),
                  pattern: {
                    value: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                    message: t('modal.advise.input.placeholderPhoneNumberValid'),
                  },
                }}
                render={({ field: { onChange, value, ref } }) => (
                  <FormControl
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.telephone}
                    className="telephone"
                    placeholder={t('modal.advise.input.placeholderPhoneNumber')}
                    aria-label="telephone"
                    aria-describedby="telephone"
                    autoComplete="off"
                  />
                )}
              />
              <Form.Control.Feedback type="invalid" className="mx-2">
                {Object.keys(errors).length !== 0 && errors.telephone?.type === 'pattern' && (
                  <span>{errors.telephone?.message}</span>
                )}
                {Object.keys(errors).length !== 0 && errors.telephone?.type === 'required' && (
                  <span>{errors.telephone?.message}</span>
                )}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="ControlContent">
              <Form.Label>
                {!productName ? t('modal.advise.message') : t('modal.advise.product')}
              </Form.Label>
              <Controller
                control={control}
                name="content"
                defaultValue=""
                render={({ field: { onChange, value, ref } }) => (
                  <Form.Control
                    disabled={!productName ? false : true}
                    onChange={onChange}
                    value={!productName ? value : productName}
                    ref={ref}
                    isInvalid={errors.content}
                    aria-label="Default select example"
                    as="textarea"
                    rows={3}
                    placeholder={t('modal.advise.placeholderMessage')}
                  />
                )}
              />
            </Form.Group>

            <button type="submit">
              <span>{t('modal.btn')}</span>
            </button>
          </Form>
        </Modal.Body>
      </Modal>
      <ModalThanks show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default ModalAdvise;
