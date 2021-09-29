import React from "react";

import {COLOR_DEFAULT_DARK} from "../../../consts/colors.const";

const IconMeeting = ({color, className, width, height}) => (
  <svg
    width={width || 18}
    height={height || 18}
    fill={color || COLOR_DEFAULT_DARK}
    className={className}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 3.375C0 1.51104 1.51104 0 3.375 0H14.625C16.489 0 18 1.51104 18 3.375V14.625C18 16.489 16.489 18 14.625 18H3.375C1.51104 18 0 16.489 0 14.625L0 3.375ZM10.125 10.125V15.75H14.625C15.2463 15.75 15.75 15.2463 15.75 14.625V10.125H10.125ZM10.125 2.25L10.125 7.875L15.75 7.875L15.75 3.375C15.75 2.75368 15.2463 2.25 14.625 2.25L10.125 2.25ZM2.25 10.125L2.25 14.625C2.25 15.2463 2.75368 15.75 3.375 15.75H7.875L7.875 10.125H2.25ZM2.25 3.375L2.25 7.875H7.875V2.25H3.375C2.75368 2.25 2.25 2.75368 2.25 3.375Z"
    />
  </svg>
);

export default IconMeeting;
