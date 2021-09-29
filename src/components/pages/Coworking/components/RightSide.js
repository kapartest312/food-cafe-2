import React from "react";
import cn from "classnames";

import Anchors from "./Anchors";

const RightSide = ({classPrefix, isEdit}) => {
  return (
    <div className={cn(`${classPrefix}-coworking-page_right-side__wrapper`)}>
      <div className={cn(`${classPrefix}-coworking-page_right-side__inner-wrapper`)}>
        <Anchors classPrefix={classPrefix} isEdit={isEdit} />
      </div>
    </div>
  );
};

export default RightSide;
