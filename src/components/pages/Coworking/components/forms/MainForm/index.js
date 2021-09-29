import React from "react";
import {inject, observer} from "mobx-react";
import {Form, Formik} from "formik";
import {useHistory} from "react-router-dom";

import ButtonPrimary from "../../../../../buttons/ButtonPrimary";
import GeneralFields from "./components/GeneralFields";
import ContactsFields from "./components/ContactsFields";
import AddressFields from "./components/AddressFileds";

import {mainInitialValues, mainSchema} from "./formAttrs";
import {convertNewCoworkingData} from "../../../../../../helper/coworking.helper";
import {COWORKING_PAGE} from "../../../../../../consts/routes.const";

const MainForm = inject("store")(
  observer(({store: {coworking}, fieldItemClassName, isEdit, isCreate}) => {
    const history = useHistory();

    const onSubmitForm = (values) => {
      const params = convertNewCoworkingData(values);
      if (isCreate) {
        coworking.createCoworking(params).then(() => {
          history.push(COWORKING_PAGE);
          coworking.resetCoworkingState();
        });
      } else {
        coworking.updateCoworking(params);
      }
    };

    return (
      <Formik
        initialValues={isEdit ? {} : mainInitialValues}
        validationSchema={mainSchema}
        onSubmit={onSubmitForm}
      >
        {(props) => {
          const {setFieldValue} = props;
          return (
            <Form className="create-coworking_form__wrapper">
              <GeneralFields
                setFieldValue={setFieldValue}
                fieldItemClassName={fieldItemClassName}
                isEdit={isEdit}
              />
              <ContactsFields
                setFieldValue={setFieldValue}
                fieldItemClassName={fieldItemClassName}
                isEdit={isEdit}
              />
              <AddressFields
                setFieldValue={setFieldValue}
                fieldItemClassName={fieldItemClassName}
                isEdit={isEdit}
              />
              <div className="create-coworking_form__actions _wrapper">
                <ButtonPrimary
                  type="submit"
                  wrapperClassName="create-coworking_form__actions _button"
                >
                  {isCreate ? "Создать коворкинг" : "Обновить данные"}
                </ButtonPrimary>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  })
);

export default MainForm;
