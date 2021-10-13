import React, {useState} from "react";
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Formik, Form} from "formik";
import {toast} from "react-toastify";

import SearchReservesInput from "./components/SearchReservesInput/SearchReservesInput";
import Layout from "../../segments/Layout";

import logo from "../../../common/images/svg/logo.svg";
import {RESERVES_PAGE, MAIN_PAGE} from "../../../consts/routes.const";
import {formSchema, initialValues} from "./formAttrs";
import ButtonPrimary from "../../buttons/ButtonPrimary";

const MainPage = inject("store")(
  observer(({store: {reserves}}) => {
    let history = useHistory();
    const [isHasntReserves, setIsHasntReserves] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleChange = (numbers) => {
      setIsHasntReserves(false);
      setErrorText("");
      if (numbers.length === 4) {
        setIsValid(true);
      } else setIsValid(false);
    };

    const onSubmitForm = (values) => {
      reserves.setLastDigitsOfNumber(values.digitsOfNumber);
      reserves
        .getReservesData(reserves.lastDigitsOfNumber)
        .then(() => {
          history.push(RESERVES_PAGE + `?digits=${reserves.lastDigitsOfNumber}`);
        })
        .catch((error) => {
          setIsHasntReserves(true);
          if (error) {
            setErrorText(error.data?.errors[0]);
          } else toast.error("Непредвиденная ошибка. Поробуйте перезагрузить страницу.");
        });
    };

    return (
      <Layout headerTitle="Главная страница" className="started-module_layout">
        <div className="started-module_wrapper">
          <div className="container">
            <div className="started-module_col _left-side">
              <NavLink to={MAIN_PAGE} className="started-module_logo">
                <img src={logo} alt="Foodworking logo" />
              </NavLink>
              <p className="started-module_description">Добро пожаловать в фудворкинг!</p>
            </div>

            <div className="started-module_col _right-side">
              <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={onSubmitForm}
              >
                {({setFieldValue, errors}) => {
                  return (
                    <Form className="started-module_form__wrapper">
                      <div className="started-module_form__content">
                        <h2 className="started-module_form__title">Введите телефон</h2>
                        <p className="started-module_form__description">
                          Для подтверждения брони введите 4 последних цифры телефона
                          гостя, указанного при бронировании
                        </p>
                        <SearchReservesInput
                          name="digitsOfNumber"
                          onChange={handleChange}
                          hasErrored={isHasntReserves}
                          errorText={errors.digitsOfNumber || errorText}
                          setFieldValue={setFieldValue}
                        />
                        <ButtonPrimary
                          type="submit"
                          disabled={!isValid}
                          buttonColor="primary"
                        >
                          Далее
                        </ButtonPrimary>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </Layout>
    );
  })
);

export default MainPage;
