import React from "react";
import {NavLink} from "react-router-dom";

import arrow from "../../../../../common/images/svg/arrow.svg";

const BreadCrumb = ({to, text}) => {
  return (
    <div className="page__top">
      <NavLink to={to} className="icon-button">
        <img src={arrow} alt="Back button" />
      </NavLink>
      <p>{text}</p>
    </div>
  );
};

export default BreadCrumb;
