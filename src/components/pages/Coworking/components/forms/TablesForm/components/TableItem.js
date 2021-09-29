import React from "react";
import cn from "classnames";

import FieldInput from "../../../../../../formFields/FieldInput";
import IconMinus from "../../../../../../Icons/common/IconMinus";

import {COLOR_WHITE} from "../../../../../../../consts/colors.const";
import {tablesInitialValues} from "../formAttrs";

const TableItem = ({index, className, remove, fieldItemClassName, values}) => {
  return (
    <div className={cn("reserves-form_tables__item _wrapper", className)}>
      <div className="create-coworking_form__item create-coworking_form__index">
        {index + 1})
      </div>
      <FieldInput
        name={`tables.${index}.name`}
        errorName={`tables.${index}.name`}
        placeholder="Название или индекс стола"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__name")}
        defaultValue={values.name || tablesInitialValues.tables.name}
      />
      <FieldInput
        name={`tables.${index}.numberOfSeats`}
        errorName={`tables.${index}.numberOfSeats`}
        placeholder="Количество мест"
        type="number"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__places-count")}
        defaultValue={values.numberOfSeats || tablesInitialValues.tables.numberOfSeats}
      />
      <FieldInput
        name={`tables.${index}.pricePerSeat`}
        errorName={`tables.${index}.pricePerSeat`}
        placeholder="Стоимость места"
        type="number"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__price-count")}
        defaultValue={values.pricePerSeat || tablesInitialValues.tables.pricePerSeat}
      />
      <button
        className="reserves-form_tables__item _btn-remove"
        type="button"
        onClick={() => remove(index)}
      >
        <IconMinus color={COLOR_WHITE} />
      </button>
    </div>
  );
};

export default TableItem;
