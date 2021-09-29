import React from "react";
import cn from "classnames";

const HallsHead = ({fieldItemClassName}) => {
  return (
    <div className="reserves-form_meeting__head reserves-form_halls__item _wrapper">
      <div className={cn(fieldItemClassName, "create-coworking_form__index")}>№</div>
      <div className={cn(fieldItemClassName, "create-coworking_form__name")}>
        Название или индекс зала
      </div>
      <div className={cn(fieldItemClassName, "create-coworking_form__places-count")}>
        Количество мест
      </div>
      <div className={cn(fieldItemClassName, "create-coworking_form__price-count")}>
        Стоимость зала
      </div>
    </div>
  );
};

export default HallsHead;
