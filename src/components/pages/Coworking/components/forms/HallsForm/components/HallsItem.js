import React from "react";
import cn from "classnames";

import FieldInput from "../../../../../../formFields/FieldInput";
import IconMinus from "../../../../../../Icons/common/IconMinus";
import {COLOR_WHITE} from "../../../../../../../consts/colors.const";

const HallsItem = ({index, className, remove, fieldItemClassName}) => {
  return (
    <div className={cn("reserves-form_halls__item _wrapper", className)}>
      <div className="create-coworking_form__item create-coworking_form__index">
        {index + 1})
      </div>
      <FieldInput
        name={`halls.${index}.name`}
        errorName={`halls.${index}.name`}
        placeholder="Название или индекс зала"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__name")}
      />
      <FieldInput
        name={`halls.${index}.numberOfSeats`}
        errorName={`halls.${index}.numberOfSeats`}
        placeholder="Количество мест"
        type="number"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__places-count")}
      />
      <FieldInput
        name={`halls.${index}.totalPrice`}
        errorName={`halls.${index}.totalPrice`}
        placeholder="Стоимость зала"
        type="number"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__price-count")}
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

export default HallsItem;
