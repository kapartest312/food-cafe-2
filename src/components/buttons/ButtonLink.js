import React from "react";
import {Link} from "react-router-dom";
import cn from "classnames";

const ButtonLink = ({
  className,
  target,
  hrefTo,
  children,
  buttonColor = "primary" | "danger" | "default",
}) => {
  return (
    <Link
      to={hrefTo}
      className={cn("btn-custom btn-link", buttonColor, className)}
      target={target}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
