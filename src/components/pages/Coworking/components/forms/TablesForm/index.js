import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";
import {Form, Formik, FieldArray} from "formik";
import cn from "classnames";
import {toast} from "react-toastify";
import {toJS} from "mobx";

import {IconTables, IconPlus} from "../../../../../Icons";
import ButtonPrimary from "../../../../../buttons/ButtonPrimary";
import TableItem from "./components/TableItem";
import TableHead from "./components/TableHead";

import {COLOR_WHITE} from "../../../../../../consts/colors.const";
import {coworkingReservesType} from "../../../../../../consts/coworking.const";
import {tablesSchema} from "./formAttrs";

const TablesForm = inject("store")(
  observer(({store: {coworking}, className, isFormDisable, fieldItemClassName}) => {
    const onSubmitForm = (values) => {
      if (isFormDisable) {
        toast.error("Увы, форма недоступна");
        return;
      }
      const tablesDataList = [];
      for (let i = 0; i < values.tables.length; i++) {
        tablesDataList.push({
          name: values.tables[i].name,
          numberOfSeats: values.tables[i].numberOfSeats,
          pricePerSeat: values.tables[i].pricePerSeat,
          features: [
            {
              name: "nameTest1",
              description: "descriptionTest1",
              media: {
                url: "https://picsum.photos/30/30",
              },
            },
          ],
        });
      }
      const params = {
        tables: tablesDataList,
      };
      if (coworking?.coworkingDetails?.id) {
        coworking.createReservesPlace(
          params,
          coworking.coworkingDetails.id,
          coworkingReservesType.tables
        );
      }
    };

    const tablesForms = (tablesValue, remove) => {
      if (tablesValue.tables) {
        return tablesValue.tables.map((item, index) => (
          <TableItem
            key={index}
            values={item}
            index={index}
            remove={remove}
            fieldItemClassName={fieldItemClassName}
          />
        ));
      }
      return tablesValue?.map((item, index) => (
        <TableItem
          key={index}
          values={item}
          index={index}
          remove={remove}
          fieldItemClassName={fieldItemClassName}
        />
      ));
    };

    useEffect(() => {
      if (coworking?.coworkingDetails?.id) {
        coworking.getReservesPlace(
          coworking.coworkingDetails.id,
          coworkingReservesType.tables
        );
      }
    }, [coworking, coworking.coworkingDetails]);

    if (!coworking?.reservesTables?.tables) {
      return null;
    }

    return (
      <Formik
        initialValues={toJS(coworking?.reservesTables?.tables) || {}}
        validationSchema={tablesSchema}
        onSubmit={onSubmitForm}
      >
        {({values}) => {
          return (
            <Form
              className={cn("create-coworking_form__wrapper", className, {
                _disable: isFormDisable,
              })}
            >
              <div className="reserves-form_tables__wrapper">
                <h3 className="create-coworking_form__title">
                  <span className="create-coworking_form__icon">
                    <IconTables color={COLOR_WHITE} width={14} height={14} />
                  </span>
                  Резерв, услуги "Рабочие места"
                </h3>
                <FieldArray
                  name="tables"
                  render={({push, remove}) => (
                    <>
                      <TableHead fieldItemClassName={fieldItemClassName} />
                      <div className="reserves-form_tables__list">
                        {tablesForms(values, remove)}
                      </div>
                      <button
                        className="reserves-form_actions__btn-add"
                        type="button"
                        onClick={() =>
                          push({
                            name: "",
                            numberOfSeats: "",
                            pricePerSeat: "",
                          })
                        }
                      >
                        <span>
                          <IconPlus color={COLOR_WHITE} />
                        </span>
                        Добавить стол
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
                  Добавить "Рабочие места"
                </ButtonPrimary>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  })
);

export default TablesForm;
