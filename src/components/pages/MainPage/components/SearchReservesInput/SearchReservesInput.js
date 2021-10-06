import React, {useState} from "react";
import {inject, observer} from "mobx-react";
import cn from "classnames";
import OtpInput from "react-otp-input";

const SearchReservesInput = inject("store")(
  observer(({onChange, hasErrored, errorText}) => {
    const [state, setState] = useState("");
    let isErrored = hasErrored;

    function handleChange(otp) {
      onChange(otp);
      setState({otp});
    }

    return (
      <div className="segmented-input-wrapper">
        <OtpInput
          value={state.otp}
          onChange={handleChange}
          numInputs={4}
          containerStyle="segmented-input"
          separator={false}
          hasErrored={isErrored}
          errorStyle="error"
        />
        <p className={cn("segmented-input__error-text", isErrored ? "show" : "")}>
          {errorText}
        </p>
      </div>
    );
  })
);

export default SearchReservesInput;
