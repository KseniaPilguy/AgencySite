import { useFormik } from 'formik';
import * as yup from 'yup';

import { ContactFormI } from 'interface/interfaces';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  
  const formik = useFormik<ContactFormI>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit(values) {
      console.log(values)
    },
    validationSchema: yup.object().shape({
      name: yup.string().required().min(2).max(255),
      email: yup.string().email().required().min(2).max(255),
      message: yup.string().required().min(2).max(255)
    })
  });


  return (
    <form onSubmit={formik.handleSubmit} className='contact_form_container flex'>
      <input
        type="text"
        name="name"
        placeholder={`${t("contacts.nameFormLabel")}`}
        className={`input ${formik.errors.name ? 'error' : ''}`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      <input
        type="email"
        name="email"
        placeholder={`${t("contacts.emailFormLabel")}`}
        className={`input ${formik.errors.email ? 'error' : ''}`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <textarea
        name="message"
        placeholder={`${t("contacts.messageFormLabel")}`}
        className={`input textarea ${formik.errors.message ? 'error' : ''}`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      <button type="submit" disabled={!formik.isValid}>
        {t("contacts.formButton")}
      </button>
    </form>
  );
}

export default ContactForm;
