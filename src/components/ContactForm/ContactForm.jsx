import { nanoid } from 'nanoid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      // .min(10, 'Number is too short')
      // .max(12, 'Number is too long')
      // .matches(/^[0-9]+$/, 'Only numbers are accepted here')
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Phone number must be in the format 111-11-11'
      )
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    addContact(newContact);
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.error} name="name" component="div" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage className={s.error} name="number" component="div" />
          </label>
          <button type="submit">Add contacts</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
