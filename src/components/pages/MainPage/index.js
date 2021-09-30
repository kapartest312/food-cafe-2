import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {NavLink} from "react-router-dom";
import OtpInput from "react-otp-input";

import logo from "../../../common/images/svg/logo.svg";

import Layout from "../../segments/Layout";

import {RESERVES_PAGE, MAIN_PAGE} from "../../../consts/routes.const";

const MainPage = inject("store")(
  observer(({store: {reserves}}) => {
    let history = useHistory();
    const [state, setState] = useState("");

    function handleChange(otp) {
      if (otp.length === 4) {
        reserves.setLastDigitsOfNumber(otp);
      }
      setState({otp});
    }

    function submitForm(event) {
      event.preventDefault();
      reserves.getReservesData(reserves.lastDigitsOfNumber).then(function (data) {
        history.push(RESERVES_PAGE + `?digits=${reserves.lastDigitsOfNumber}`);
      });
      // console.log(reserves.getReservesData(reserves.lastDigitsOfNumber));
    }

    return (
      <Layout headerTitle="Главная страница">
        <div className="page-wrapper">
          <div className="container">
            <div className="started-module">
              <div className="started-module__col">
                <NavLink to={MAIN_PAGE} className="started-module__logo">
                  <img src={logo} alt="Foodworking logo" />
                </NavLink>
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
                      <OtpInput
                        value={state.otp}
                        onChange={handleChange}
                        numInputs={4}
                        containerStyle="segmented-input"
                        separator={false}
                      />
                      {/* <div className="segmented-input">
                        <input type="number" autocomplete="none" placeholder="•" />
                        <input type="number" autocomplete="none" placeholder="•" />
                        <input type="number" autocomplete="none" placeholder="•" />
                        <input type="number" autocomplete="none" placeholder="•" />
                      </div> */}
                      <button className="btn" onClick={submitForm}>
                        Далее
                      </button>
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
