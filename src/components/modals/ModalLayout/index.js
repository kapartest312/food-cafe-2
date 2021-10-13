import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import cn from "classnames";

import disableBodyScroll from "../../../helper/disableScrollBody";

const ModalLayout = ({children, isVisible, wrapperClassName}) => {
  useEffect(() => {
    disableBodyScroll(isVisible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, document]);

  const component = (
    <div className={cn("modal_wrapper", wrapperClassName, {visible: isVisible})}>
      <div className="modal_mask_wrapper" />
      <div className="modal_inner-wrapper">{children}</div>
    </div>
  );

  return document && document.body ? createPortal(component, document.body) : component;
};

export default ModalLayout;
