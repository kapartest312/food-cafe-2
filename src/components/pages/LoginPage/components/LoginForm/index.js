import React from "react";
import {Formik, Form} from "formik";
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router-dom";

import FieldInput from "../../../../formFields/FieldInput";
import ButtonPrimary from "../../../../buttons/ButtonPrimary";

import {loginFormFieldsNames, loginFormSchema, loginFormInitialValues} from "./formAttrs";
import {COWORKING_PAGE} from "../../../../../consts/routes.const";

const LoginForm = inject("store")(
  observer(({store: {auth}}) => {
    let history = useHistory();

    const onSubmitForm = (values) => {
      auth.login(values).then(() => {
        history.push(COWORKING_PAGE);
      });
    };

    return (
      <Formik
        initialValues={loginFormInitialValues}
        validationSchema={loginFormSchema}
        onSubmit={onSubmitForm}
      >
        <div className="login-form-container">
          <Form className="login-form">
            <FieldInput
              name={loginFormFieldsNames.email}
              errorName={loginFormFieldsNames.email}
              placeholder="Email"
              addClass="login-form-container__input"
            />
            <FieldInput
              type="password"
              name={loginFormFieldsNames.password}
              errorName={loginFormFieldsNames.password}
              placeholder="Password"
              addClass="login-form-container__input"
            />
            <ButtonPrimary type="submit" className="auth-page_form__btn">
              Далее
            </ButtonPrimary>
          </Form>
        </div>
      </Formik>
    );
  })
);

export default LoginForm;
