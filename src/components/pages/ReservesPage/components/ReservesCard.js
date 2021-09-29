import React from "react";
import CardWrapper from "../../../cardWrapper";

const ReservesCard = ({data}) => {
  const {
    id,
    lastName,
    number,
    restaurant,
    date,
    type,
    numberSeats,
    deposited,
    comment,
    confirmation,
  } = data;
  return (
    <CardWrapper>
      <div className="reserves-card">
        <div className="reserves-card__column">
          <div>
            <span>id</span>
            <p>{id}</p>
          </div>
          <div>
            <span>Фамилия</span>
            <p>{lastName}</p>
          </div>
          <div>
            <span>Номер телефона</span>
            <p>{number}</p>
          </div>
          <div>
            <span>Ресторан</span>
            <p>{restaurant}</p>
          </div>
          <div>
            <span>Дата</span>
            <p>{date}</p>
          </div>
        </div>
        <div className="reserves-card__column">
          <div>
            <span>Тип резерва</span>
            <p>{type}</p>
          </div>
          <div>
            <span>Колличество мест</span>
            <p>{numberSeats}</p>
          </div>
          <div>
            <span>Внесенная сумма</span>
            <p>{deposited}</p>
          </div>
          <div>
            <span>Комментарий</span>
            <p>{comment}</p>
          </div>
          <div>
            <span>Подтвержден</span>
            <p>{confirmation}</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ReservesCard;
