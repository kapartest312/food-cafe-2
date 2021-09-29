import React from "react";
import {Form, Formik} from "formik";
import cn from "classnames";
import {toast} from "react-toastify";

import FieldCheckbox from "../../../../../formFields/FieldCheckbox";
import ButtonPrimary from "../../../../../buttons/ButtonPrimary";

import {comfortsBase, comfortsFieldsNames, comfortsInitialValues} from "./formAttrs";

const ComfortsForm = ({isFormDisable, fieldItemClassName}) => {
  const onSubmitForm = (values) => {
    if (isFormDisable) {
      toast.error("Увы, форма недоступна");
      return;
    }
    console.log("ComfortsForm values", values);
  };

  return (
    <Formik initialValues={comfortsInitialValues} onSubmit={onSubmitForm}>
      <Form className={cn("create-coworking_form__wrapper", {_disable: isFormDisable})}>
        <div className="create-coworking_form__comforts _wrapper">
          <h3 className="create-coworking_form__title">Удобства/опции</h3>
          <div role="group" className="create-coworking_form__comforts _list">
            {comfortsBase.map((item) => (
              <FieldCheckbox
                key={item.value}
                name={comfortsFieldsNames.comforts}
                errorName={comfortsFieldsNames.comforts}
                label={item.title}
                wrapperClassName={cn(fieldItemClassName)}
                value={item.value}
                icon={item.icon}
                haveCheckbox={false}
              />
            ))}
          </div>
        </div>
        <div className="create-coworking_form__actions _wrapper">
          <ButtonPrimary
            type="submit"
            wrapperClassName="create-coworking_form__actions _button"
          >
            Добавить удобства
          </ButtonPrimary>
        </div>
      </Form>
    </Formik>
  );
};

export default ComfortsForm;
