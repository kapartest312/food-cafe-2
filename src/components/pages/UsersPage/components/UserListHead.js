import React from "react";
import cn from "classnames";

const UserListHead = ({className}) => {
  return (
    <div className={cn("users-page_list__head _wrapper", className)}>
      <div className="users-page_list__head _inner-wrapper">
        <div className="user-card_info _fullName">Имя</div>
        <div className="user-card_info _number">Номер</div>
        <div className="user-card_info _email">Email</div>
        <div className="user-card_info _reserves">Количество резервов</div>
      </div>
    </div>
  );
};

export default UserListHead;
