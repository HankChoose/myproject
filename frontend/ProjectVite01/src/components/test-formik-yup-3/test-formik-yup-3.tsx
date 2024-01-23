import classNames from 'classnames';
import styles from './test-formik-yup-3.module.scss';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormik, FormikValues } from 'formik';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .matches(/^[^—]*$/, 'Email cannot contain special characters--')
    .required('Email address is required'),

  phone: Yup.string()
    .nullable()
    .matches(/^[0-9-]+$/, 'Invalid phone number')
    .max(20, 'Phone number must be 20 characters or less'),

  username: Yup.string()
    .matches(/^[^\s-]+$/, 'Username cannot contain spaces or -')
    .max(30, 'Username must be 30 characters or less')
    .required('Username is required'),

  message: Yup.string().max(1000, 'Message must be 1000 characters or less'),
});

const initialValues = {
  email: '',
  phone: '',
  username: '',
  message: '',
};

export interface TestFormikYup3Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TestFormikYup3 = ({ className }: TestFormikYup3Props) => {
  const onSubmit = (values: FormikValues) => {
    // 处理表单提交逻辑
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <Field type="text" id="phone" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};