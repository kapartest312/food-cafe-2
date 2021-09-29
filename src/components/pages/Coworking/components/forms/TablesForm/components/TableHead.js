import React from "react";
import cn from "classnames";

const TableHead = ({fieldItemClassName}) => {
  return (
    <div className="reserves-form_tables__head reserves-form_tables__item _wrapper">
      <div className={cn(fieldItemClassName, "create-coworking_form__index")}>№</div>
      <div className={cn(fieldItemClassName, "create-coworking_form__name")}>
        Название или индекс стола
      </div>
      <div className={cn(fieldItemClassName, "create-coworking_form__places-count")}>
        Количество мест
      </div>
      <div className={cn(fieldItemClassName, "create-coworking_form__price-count")}>
        Стоимость места
      </div>
    </div>
  );
};

export default TableHead;
