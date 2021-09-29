import React from "react";
import {Link} from "react-router-dom";

export const Tab = ({onClick, name, addClass, hash, img, fontSize}) => {
  return (
    <div>
      <button className={`tab ${addClass}`} onClick={onClick}>
        <Link to={hash}>
          <img src={img} alt="" />
          <span style={{fontSize}}>{name}</span>
        </Link>
      </button>
    </div>
  );
};
