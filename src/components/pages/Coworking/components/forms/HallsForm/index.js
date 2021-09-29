import React from "react";
import {FieldArray, Form, Formik} from "formik";
import cn from "classnames";
import {toast} from "react-toastify";

import {IconPlus, IconHalls} from "../../../../../Icons";
import ButtonPrimary from "../../../../../buttons/ButtonPrimary";
import HallsItem from "./components/HallsItem";
import HallsHead from "./components/HallsHead";

import {COLOR_WHITE} from "../../../../../../consts/colors.const";
import {hallsInitialValues, hallsSchema} from "./formAttrs";

const HallsForm = ({className, isFormDisable, fieldItemClassName}) => {
  const onSubmitForm = (values) => {
    if (isFormDisable) {
      toast.error("Увы, форма недоступна");
      return;
    }
    console.log("HallsForm values", values);
  };

  return (
    <Formik
      initialValues={hallsInitialValues}
      validationSchema={hallsSchema}
      onSubmit={onSubmitForm}
    >
      {({values}) => {
        return (
          <Form
            className={cn("create-coworking_form__wrapper", className, {
              _disable: isFormDisable,
            })}
          >
            <div className="reserves-form_halls__wrapper">
              <h3 className="create-coworking_form__title">
                <span className="create-coworking_form__icon">
                  <IconHalls color={COLOR_WHITE} width={14} height={14} />
                </span>
                Резерв, услуги "Зал для конференций"
              </h3>
              <FieldArray
                name="halls"
                render={({push, remove}) => (
                  <>
                    <HallsHead fieldItemClassName={fieldItemClassName} />
                    <div className="reserves-form_tables__list">
                      {values?.halls?.map((item, index) => (
                        <HallsItem
                          key={index}
                          index={index}
                          remove={remove}
                          fieldItemClassName={fieldItemClassName}
                        />
                      ))}
                    </div>
                    <button
                      className="reserves-form_actions__btn-add"
                      type="button"
                      onClick={() =>
                        push({
                          name: "",
                          numberOfSeats: "",
                          totalPrice: "",
                        })
                      }
                    >
                      <span>
                        <IconPlus color={COLOR_WHITE} />
                      </span>
                      Добавить зал
                    </button>
                  </>
                )}
              />
            </div>
            <div className="create-coworking_form__actions _wrapper">
              <ButtonPrimary
                type="submit"
                wrapperClassName="create-coworking_form__actions _button"
              >
                Добавить "Зал для конференций"
              </ButtonPrimary>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default HallsForm;
