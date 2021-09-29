import React, {useState, useEffect} from "react";

const Layout = ({children, headerTitle, headerButton}) => {
  return (
    <div className="layout_wrapper">
      <div className="layout_inner-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
