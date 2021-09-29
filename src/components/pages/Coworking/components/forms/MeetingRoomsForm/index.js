import React from "react";
import {FieldArray, Form, Formik} from "formik";
import cn from "classnames";
import {toast} from "react-toastify";

import {IconPlus, IconMeeting} from "../../../../../Icons";

import ButtonPrimary from "../../../../../buttons/ButtonPrimary";
import MeetingRoomItem from "./components/MeetingRoomItem";
import MeetingRoomHead from "./components/MeetingRoomHead";

import {COLOR_WHITE} from "../../../../../../consts/colors.const";
import {meetingRoomsInitialValues, meetingRoomsSchema} from "./formAttrs";

const MeetingRoomsForm = ({className, isFormDisable, fieldItemClassName}) => {
  const onSubmitForm = (values) => {
    if (isFormDisable) {
      toast.error("Увы, форма недоступна");
      return;
    }
    console.log("MeetingRoomsForm values", values);
  };

  return (
    <Formik
      initialValues={meetingRoomsInitialValues}
      validationSchema={meetingRoomsSchema}
      onSubmit={onSubmitForm}
    >
      {({values}) => {
        return (
          <Form
            className={cn("create-coworking_form__wrapper", className, {
              _disable: isFormDisable,
            })}
          >
            <div className="reserves-form_meeting__wrapper">
              <h3 className="create-coworking_form__title">
                <span className="create-coworking_form__icon">
                  <IconMeeting color={COLOR_WHITE} width={14} height={14} />
                </span>
                Резерв, услуги "Переговорные комнаты"
              </h3>
              <FieldArray
                name="meetingRooms"
                render={({push, remove}) => (
                  <>
                    <MeetingRoomHead fieldItemClassName={fieldItemClassName} />
                    <div className="reserves-form_tables__list">
                      {values?.meetingRooms?.map((item, index) => (
                        <MeetingRoomItem
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
                      Добавить комнату
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
                Добавить "Переговорные комнаты"
              </ButtonPrimary>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MeetingRoomsForm;
