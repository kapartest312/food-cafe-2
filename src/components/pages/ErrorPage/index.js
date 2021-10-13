import React from "react";

import Layout from "../../segments/Layout";
import ButtonLink from "../../buttons/ButtonLink";

import {MAIN_PAGE} from "../../../consts/routes.const";

const ErrorPage = () => {
  return (
    <Layout headerTitle="Cтраница ошибки" className="error-page_wrapper">
      <div className="container">
        <div className="error-page_content__wrapper">
          <div className="error-page_content__title">404</div>
          <div className="error-page_content__sub-title">Страница не найдена</div>
          <div className="error-page_content__text">
            Возможно, вы воспользовались недействительной ссылкой или страница была
            удалена. Вы можете вернуться на главную
          </div>
          <div className="error-page_content__actions">
            <ButtonLink hrefTo={MAIN_PAGE} buttonColor="primary">
              На главную
            </ButtonLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
