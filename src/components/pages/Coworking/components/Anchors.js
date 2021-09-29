import React from "react";
import cn from "classnames";

const Anchors = ({classPrefix, isEdit}) => {
  return (
    <div className={cn(`${classPrefix}-coworking-page_anchor__wrapper`)}>
      <span className={cn(`${classPrefix}-coworking-page_anchor__item`)}>Общее</span>
      <span className={cn(`${classPrefix}-coworking-page_anchor__item`)}>Контакты</span>
      <span className={cn(`${classPrefix}-coworking-page_anchor__item`)}>Адрес</span>
      {isEdit && (
        <span className={cn(`${classPrefix}-coworking-page_anchor__item`)}>
          Удобства/опции
        </span>
      )}
      {isEdit && (
        <span className={cn(`${classPrefix}-coworking-page_anchor__item`)}>
          Резерв, услуги
        </span>
      )}
    </div>
  );
};

export default Anchors;
