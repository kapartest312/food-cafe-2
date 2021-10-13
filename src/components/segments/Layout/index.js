import React from "react";
import cn from "classnames";

const Layout = ({children, className}) => {
  return (
    <div className={cn("layout_wrapper", className)}>
      <div className="layout_inner-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
