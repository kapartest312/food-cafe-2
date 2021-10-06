import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";
import {useLocation} from "react-router-dom";

import Layout from "../../segments/Layout";
import TableSort from "./components/TableSort/TableSort";
import Alert from "./components/Alert/Alert";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";

import {formatLastDigits, formatDate, formatPrice} from "./helpers";

import {MAIN_PAGE} from "../../../consts/routes.const";
import moment from "moment";

const ReservesPage = inject("store")(
  observer(({store: {reserves}}) => {
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    useEffect(() => {
      if (!reserves.lastDigitsOfNumber) {
        reserves.setLastDigitsOfNumber(query.get("digits"));
        reserves.getReservesData(reserves.lastDigitsOfNumber);
      }
    }, [query, reserves]);

    function reserve(reserveId) {
      // reserves.reserveById(reserveId);
      reserves
        .testReserveById(reserveId)
        .then((response) => {})
        .catch((error) => {});
    }

    function sortReservesList(sortFn, isDesc) {
      let sorted = reserves.reservesList.sort(sortFn);
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
              let aReservationDate = moment(a.reservationDate, "DD.MM.YYYY").format(
                "YYYY-MM-DD"
              );
              let bReservationDate = moment(b.reservationDate, "DD.MM.YYYY").format(
                "YYYY-MM-DD"
              );

              let aReservationStartDate = moment(
                `${aReservationDate}T${a.reservationHours.from}`
              ).format("YYYY-MM-DDTHH:mm:ss");
              let bReservationStartDate = moment(
                `${bReservationDate}T${b.reservationHours.from}`
              ).format("YYYY-MM-DDTHH:mm:ss");

              if (moment(aReservationStartDate).isAfter(bReservationStartDate)) {
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
              <BreadCrumb
                to={MAIN_PAGE}
                text={`Резервы для номера **** ${formatLastDigits(
                  reserves.lastDigitsOfNumber
                )}`}
              />
              <div className="page__content">
                <Alert text="Уточните фамилию гостя перед подтверждением бронирования" />
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
