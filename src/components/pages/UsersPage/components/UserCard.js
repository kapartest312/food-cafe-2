import React from "react";
import CardWrapper from "../../../cardWrapper";

const UserCard = ({className, fullName, number, email, reserves}) => {
  return (
    <CardWrapper className={className}>
      <div className="user-card_info _fullName">{fullName}</div>
      <div className="user-card_info _number">{number}</div>
      <div className="user-card_info _email">{email}</div>
      <div className="user-card_info _reserves">{reserves}</div>
    </CardWrapper>
  );
};

export default UserCard;
