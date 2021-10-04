import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {NavLink, useLocation} from "react-router-dom";

import arrow from "../../../common/images/svg/arrow.svg";
import cross from "../../../common/images/svg/cross.svg";
import warning from "../../../common/images/svg/warning.svg";

import Layout from "../../segments/Layout";
import TableSort from "./components/TableSort/TableSort";

import {formatLastDigits, formatDate, formatPrice} from "./helpers";

import {MAIN_PAGE} from "../../../consts/routes.const";

const ReservesPage = inject("store")(
  observer(({store: {reserves}}) => {
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    useEffect(() => {
      if (!reserves.lastDigitsOfNumber) {
        reserves.setLastDigitsOfNumber(query.get("digits"));
        reserves.getReservesData(reserves.lastDigitsOfNumber).then(() => {
          console.log("then");

          reserves.setReservesList(
            reserves.reservesList?.map((item, index) => {
              item.fullName = `${9 - index}`;

              return item;
            })
          );
        });
      }
    }, [query, reserves]);

    function reserve(reserveId) {
      // reserves.reserveById(reserveId);
      reserves.testReserveById(reserveId);
    }

    function sortReservesList(sortFn, isDesc) {
      let sorted = reserves.reservesList.sort(sortFn);
      console.log("isDesc", isDesc);
      if (isDesc) {
        sorted.reverse();
      }

      reserves.setReservesList(sorted);
    }

    function prepareSkeleton() {
      let headers = [
        {
          id: "fullname",
          title: "ФИО",
          sorting: (isDesc) => {
            console.log("Name", isDesc);
            sortReservesList((a, b) => {
              if (a.fullName[0] < b.fullName[0]) {
                return -1;
              } else {
                return 1;
              }
            }, isDesc);
          },
        },
        {
          id: "datetime",
          title: "Дата и время резерва",
          sorting: (isDesc) => {
            sortReservesList((a, b) => {
              if (a.fullName[0] < b.fullName[0]) {
                return -1;
              } else {
                return 1;
              }
            }, isDesc);
          },
        },
        {
          id: "guests",
          title: "Гости",
          sorting: (isDesc) => {
            sortReservesList((a, b) => {
              if (a.peopleCount < b.peopleCount) {
                return -1;
              } else {
                return 1;
              }
            }, isDesc);
          },
        },
        {
          id: "amount",
          title: "Сумма депозита",
          sorting: (isDesc) => {
            sortReservesList((a, b) => {
              if (a.price < b.price) {
                return -1;
              } else {
                return 1;
              }
            }, isDesc);
          },
        },
        {
          id: "action",
          type: "empty",
          sorting: () => {},
        },
      ];

      function rows(data) {
        let self = this;
        return data?.map((item, index) => {
          return {
            fullname: () => (
              <div className="user-info">
                <h3 className="user-info__title">{item.fullName}</h3>
                <h4 className="user-info__subtitle">{item.network?.name}</h4>
              </div>
            ),
            datetime: () => formatDate(item.reservationDate, item.reservationHours.from),
            guests: () => item.peopleCount,
            amount: () => formatPrice(item.price),
            action: () => (
              <div className="td-buttons">
                <a
                  href="#"
                  className="btn btn--size-small"
                  onClick={reserve.bind(self, item.id)}
                >
                  Подтвердить
                </a>
              </div>
            ),
          };
        });
      }

      return {
        headers: headers,
        rows: rows,
      };
    }

    return (
      <Layout headerTitle="Резервы">
        <div className="page-wrapper">
          <div className="container container-full">
            <div className="page">
              <div className="page__top">
                <NavLink to={MAIN_PAGE} className="icon-button">
                  <img src={arrow} alt="Back button" />
                </NavLink>
                <p>
                  Резервы для номера **** {formatLastDigits(reserves.lastDigitsOfNumber)}
                </p>
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
                {reserves.reservesList?.length && (
                  <TableSort skeleton={prepareSkeleton()} data={reserves.reservesList} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  })
);

export default ReservesPage;
