import React from "react";
import Loader from "react-loader-spinner";

export const LoaderComponent = ({
  width = 100,
  height = 100,
  color = "#00BFFF",
  type = "TailSpin",
  className,
  timeout,
}) => {
  return (
    <div className={className}>
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={timeout} //3 secs
      />
    </div>
  );
};
