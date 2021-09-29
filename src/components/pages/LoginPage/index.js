import React from "react";

import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <div className="auth-page_wrapper">
      <div className="auth-page_inner-wrapper">
        <div className="auth-page_title">
          <div className="auth-page_title__logo">
            <h2>FoodWorking</h2>
          </div>
        </div>
        <div className="auth-page_form__wrapper">
          <h4 className="auth-page_form__title">Для входа введите Ваши логин и пароль</h4>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
