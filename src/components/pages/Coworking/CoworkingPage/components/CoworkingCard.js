import React from "react";

import {toEditCoworkingPage} from "../../../../../consts/routes.const";
import ButtonLink from "../../../../buttons/ButtonLink";
import CardWrapper from "../../../../cardWrapper";

const CoworkingCard = ({
  id,
  className,
  name,
  network,
  price,
  preview,
  totalSeats,
  status,
}) => {
  return (
    <CardWrapper className={className}>
      <div className="coworking-card_info _name">{name}</div>
      <div className="coworking-card_info _chain">{network}</div>
      <div className="coworking-card_info _preview">
        <img src={preview} alt={preview} />
      </div>
      <div className="coworking-card_info _price">{price}</div>
      <div className="coworking-card_info _seats">{totalSeats}</div>
      <div className="coworking-card_info _status">
        {status ? (
          <div className="coworking-card_info__status coworking-card_info__active-status" />
        ) : (
          <div className="coworking-card_info__status coworking-card_info__inactive-status" />
        )}
      </div>
      <div className="coworking-card_info _more">
        <ButtonLink hrefTo={toEditCoworkingPage(id)}>Редактировать</ButtonLink>
      </div>
    </CardWrapper>
  );
};

export default CoworkingCard;
