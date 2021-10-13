import React from "react";
import {NavLink} from "react-router-dom";

import arrow from "../../../../../common/images/svg/arrow.svg";

const BreadCrumb = ({to, text}) => {
  return (
    <div className="reserves-page_head__wrapper">
      <NavLink to={to} className="reserves-page_head__back">
        <img src={arrow} alt="Back button" />
      </NavLink>
      <p className="reserves-page_head__text">{text}</p>
    </div>
  );
};

export default BreadCrumb;
