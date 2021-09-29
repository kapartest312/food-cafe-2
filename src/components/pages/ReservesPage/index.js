import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {NavLink} from "react-router-dom";

import arrow from "../../../common/images/svg/arrow.svg";
import cross from "../../../common/images/svg/cross.svg";
import warning from "../../../common/images/svg/warning.svg";

import Layout from "../../segments/Layout";
import {
  reservesData1,
  reservesData2,
  tabNumber,
  tabs,
} from "../../../consts/reserves.const";

import {MAIN_PAGE} from "../../../consts/routes.const";

const ReservesPage = inject("store")(
  observer(({store: {reserves}}) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    useEffect(() => {
      reserves.getReservesData();
    }, [reserves]);

    return (
      <Layout headerTitle="Резервы">
        <div className="wrapper">
          <div className="container container-full">
            <div className="page">
              <div className="page__top">
                <NavLink to={MAIN_PAGE} className="icon-button">
                  <img src={arrow} alt="Back button" />
                </NavLink>
                <p>Резервы для номера **** 12 34</p>
              </div>
              <div className="page__content">
                <div className="alert">
                  <div className="alert__close">
                    <img src={cross} alt="Close" />
                  </div>
                  <div className="alert__row">
                    <div className="circle-icon circle-icon--warning">
                      <img src={warning} alt="Warning" />
                    </div>
                    <p>Уточните фамилию гостя перед подтверждением бронирования</p>
                  </div>
                </div>
                <div className="table-module">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <div className="th-button th-button--sorting is-active">
                            <span>ФИО</span>
                          </div>
                        </th>
                        <th>
                          <div className="th-button th-button--sorting">
                            <span>Дата и время резерва</span>
                          </div>
                        </th>
                        <th>
                          <div className="th-button th-button--sorting">
                            <span>Гости</span>
                          </div>
                        </th>
                        <th>
                          <div className="th-button th-button--sorting">
                            <span>Сумма депозита</span>
                          </div>
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="user-info">
                            <h3 className="user-info__title">Иванов Иван Иванович</h3>
                            <h4 className="user-info__subtitle">Сеть кафе “Кофемания”</h4>
                          </div>
                        </td>
                        <td>25 сен / 10:00</td>
                        <td>1</td>
                        <td>2 500 ₽</td>
                        <td>
                          <div className="td-buttons">
                            <a href="#" className="btn btn--size-small">
                              Подтвердить
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-info">
                            <h3 className="user-info__title">Иванов Иван Иванович</h3>
                            <h4 className="user-info__subtitle">Сеть кафе “Кофемания”</h4>
                          </div>
                        </td>
                        <td>25 сен / 10:00</td>
                        <td>1</td>
                        <td>2 500 ₽</td>
                        <td>
                          <div className="td-buttons">
                            <a href="#" className="btn btn--size-small">
                              Подтвердить
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-info">
                            <h3 className="user-info__title">Иванов Иван Иванович</h3>
                            <h4 className="user-info__subtitle">Сеть кафе “Кофемания”</h4>
                          </div>
                        </td>
                        <td>25 сен / 10:00</td>
                        <td>1</td>
                        <td>2 500 ₽</td>
                        <td>
                          <div className="td-buttons">
                            <a href="#" className="btn btn--size-small">
                              Подтвердить
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="user-info">
                            <h3 className="user-info__title">Иванов Иван Иванович</h3>
                            <h4 className="user-info__subtitle">Сеть кафе “Кофемания”</h4>
                          </div>
                        </td>
                        <td>25 сен / 10:00</td>
                        <td>1</td>
                        <td>2 500 ₽</td>
                        <td>
                          <div className="td-buttons">
                            <a href="#" className="btn btn--size-small">
                              Подтвердить
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  })
);

export default ReservesPage;
