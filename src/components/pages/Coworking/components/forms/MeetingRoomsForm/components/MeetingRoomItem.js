import React from "react";
import cn from "classnames";

import FieldInput from "../../../../../../formFields/FieldInput";
import IconMinus from "../../../../../../Icons/common/IconMinus";
import {COLOR_WHITE} from "../../../../../../../consts/colors.const";

const MeetingRoomItem = ({index, className, remove, fieldItemClassName}) => {
  return (
    <div className={cn("reserves-form_meeting__item _wrapper", className)}>
      <div className="create-coworking_form__item create-coworking_form__index">
        {index + 1})
      </div>
      <FieldInput
        name={`meetingRooms.${index}.name`}
        errorName={`meetingRooms.${index}.name`}
        placeholder="Название или индекс комнаты"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__name")}
      />
      <FieldInput
        name={`meetingRooms.${index}.numberOfSeats`}
        errorName={`meetingRooms.${index}.numberOfSeats`}
        placeholder="Количество мест"
        type="number"
        wrapperClassName={cn(fieldItemClassName, "create-coworking_form__places-count")}
      />
      <FieldInput
        name={`meetingRooms.${index}.totalPrice`}
        errorName={`meetingRooms.${index}.totalPrice`}
        placeholder="Стоимость комн."
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

export default MeetingRoomItem;
