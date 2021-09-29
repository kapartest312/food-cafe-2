import React from "react";
import cn from "classnames";

const ButtonPrimary = ({
  type = "button",
  className,
  disabled,
  onClick,
  onSubmit,
  image,
  isVisible = true,
  children,
  buttonColor,
}) => {
  if (!isVisible) return null;

  return (
    <button
      disabled={disabled}
      onSubmit={onSubmit}
      onClick={onClick}
      type={type}
      className={cn("btn-custom", className, buttonColor, {_disabled: disabled})}
    >
      {image && <img src={image} alt="icon" />}
      {children}
    </button>
  );
};

export default ButtonPrimary;
