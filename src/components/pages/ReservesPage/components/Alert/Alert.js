import React, {useState} from "react";
import {inject, observer} from "mobx-react";
import cn from "classnames";

import cross from "../../../../../common/images/svg/cross.svg";
import warning from "../../../../../common/images/svg/warning.svg";

const Alert = inject("store")(
  observer(({text}) => {
    const [isClosed, setIsClosed] = useState(false);

    function closeAlert() {
      setIsClosed(true);
    }

    return (
      <div className={cn("alert", isClosed && "closed")}>
        <div className="alert__close" onClick={closeAlert}>
          <img src={cross} alt="Close" />
        </div>
        <div className="alert__row">
          <div className="circle-icon circle-icon--warning">
            <img src={warning} alt="Warning" />
          </div>
          <p>{text}</p>
        </div>
      </div>
    );
  })
);

export default Alert;
