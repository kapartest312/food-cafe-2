import React from "react";
import {inject, observer} from "mobx-react";
import {NavLink} from "react-router-dom";
import logo from "../../../common/images/svg/logo.svg";

import Layout from "../../segments/Layout";

import {RESERVES_PAGE} from "../../../consts/routes.const";

const MainPage = inject("store")(
  observer(({store: {file}}) => {
    return (
      <Layout headerTitle="Главная страница">
        <div className="page-wrapper">
          <div className="container">
            <div className="started-module">
              <div className="started-module__col">
                <a href="/" className="started-module__logo">
                  <img src={logo} alt="Foodworking logo" />
                </a>
                <p className="started-module__description">
                  Добро пожаловать в фудворкинг!
                </p>
              </div>

              <div className="started-module__col">
                <form>
                  <div className="form-block">
                    <div className="form-block__content">
                      <h2 className="form-block__title">Введите телефон</h2>
                      <p className="form-block__description">
                        Для подтверждения брони введите 4 последних цифры телефона гостя,
                        указанного при бронировании
                      </p>
                      <div className="segmented-input">
                        <input type="number" autocomplete="none" placeholder="•" />
                        <input type="number" autocomplete="none" placeholder="•" />
                        <input type="number" autocomplete="none" placeholder="•" />
                        <input type="number" autocomplete="none" placeholder="•" />
                      </div>
                      <button className="btn">Далее</button>
                      <NavLink to={RESERVES_PAGE}>ReservesPage</NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  })
);

export default MainPage;
