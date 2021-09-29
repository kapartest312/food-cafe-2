import React from "react";
import cn from "classnames";

const MeetingRoomHead = ({fieldItemClassName}) => {
  return (
    <div className="reserves-form_meeting__head reserves-form_meeting__item _wrapper">
      <div className={cn(fieldItemClassName, "create-coworking_form__index")}>№</div>
      <div className={cn(fieldItemClassName, "create-coworking_form__name")}>
        Название или индекс комнаты
      </div>
      <div className={cn(fieldItemClassName, "create-coworking_form__places-count")}>
        Количество мест
      </div>
      <div className={cn(fieldItemClassName, "create-coworking_form__price-count")}>
        Стоимость комн.
      </div>
    </div>
  );
};

export default MeetingRoomHead;
