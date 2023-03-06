import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import RingLoader from "react-spinners/RingLoader";

import { ContactFormI } from 'interface/interfaces';

const emailRequestUrl = 'http://emailsender-env.eba-eraxmp2b.us-east-1.elasticbeanstalk.com/sender/send';

const ContactForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  
  const formik = useFormik<ContactFormI>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit(values) {
      let emailSenderAvailableCount = localStorage.getItem("SENT_EMAIL") ? +localStorage.getItem("SENT_EMAIL")! : 3;

      if (emailSenderAvailableCount === 0) {
        toast(t("contacts.emailMaxLimit"), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        return;
      }

      (async () => {
        setIsLoading(true);
        const data = {
          subject: `JOB REQUEST. Email: ${values.email}. Name: ${values.name}`,
          content: values.message
        }
        await fetch(emailRequestUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data), 
        })
        .then(() => {
          setIsLoading(false);
          emailSenderAvailableCount = emailSenderAvailableCount - 1;
          localStorage.setItem("SENT_EMAIL", `${emailSenderAvailableCount}`);

          toast(t("contacts.emailSuccess"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch(() => {
            setIsLoading(false);
            toast(t("contacts.emailFailed"), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
        });
      })();
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
      {isLoading && <div className='loader_container'>
        <RingLoader color="#A460F9" loading={isLoading} />
      </div> }
    </form>
  );
}

export default ContactForm;
