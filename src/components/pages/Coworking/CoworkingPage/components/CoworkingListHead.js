import React from "react";
import cn from "classnames";

const UserListHead = ({className}) => {
  return (
    <div className={cn("coworking-page_list__head _wrapper", className)}>
      <div className="coworking-page_list__head _inner-wrapper">
        <div className="coworking-card_info _name">Название</div>
        <div className="coworking-card_info _chain">Сеть</div>
        <div className="coworking-card_info _preview">Фото</div>
        <div className="coworking-card_info _price">Цен. кат.</div>
        <div className="coworking-card_info _seats">Кол-во мест</div>
        <div className="coworking-card_info _status">Статус</div>
      </div>
    </div>
  );
};

export default UserListHead;
