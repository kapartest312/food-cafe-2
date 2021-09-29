import React from "react";

import {COLOR_DEFAULT_DARK} from "../../../consts/colors.const";

const IconHalls = ({color, className, width, height}) => {
  return (
    <svg
      width={width || 16}
      height={height || 18}
      fill={color || COLOR_DEFAULT_DARK}
      className={className}
      viewBox="0 0 16 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.125 3.375C0.125 1.57761 1.53003 0.108381 3.30169 0.00572968L3.5 0H12.5C14.2974 0 15.7666 1.40504 15.8693 3.17669L15.875 3.375L15.875 14.625C15.875 16.4224 14.47 17.8916 12.6983 17.9943L12.5 18H3.5C1.70261 18 0.233381 16.595 0.130729 14.8233L0.125 14.625L0.125 3.375ZM2.375 3.375L2.375 14.625C2.375 15.2019 2.8093 15.6774 3.3688 15.7424L3.5 15.75H12.5C13.0769 15.75 13.5524 15.3157 13.6174 14.7562L13.625 14.625L13.625 3.375C13.625 2.79806 13.1907 2.32255 12.6312 2.25757L12.5 2.25H3.5C2.92306 2.25 2.44755 2.6843 2.38257 3.2438L2.375 3.375ZM8 4.5C8 3.92306 8.4343 3.44755 8.9938 3.38257L9.125 3.375H11.375C11.9519 3.375 12.4274 3.8093 12.4924 4.3688L12.5 4.5V6.75C12.5 7.37132 11.9963 7.875 11.375 7.875C10.7981 7.875 10.3226 7.4407 10.2576 6.8812L10.25 6.75V5.625H9.125C8.54806 5.625 8.07256 5.1907 8.00757 4.6312L8 4.5ZM3.5 11.25C3.5 10.6287 4.00368 10.125 4.625 10.125C5.20194 10.125 5.67745 10.5593 5.74243 11.1188L5.75 11.25V12.375H6.875C7.45194 12.375 7.92744 12.8093 7.99243 13.3688L8 13.5C8 14.0769 7.5657 14.5524 7.0062 14.6174L6.875 14.625H4.625C4.04806 14.625 3.57255 14.1907 3.50757 13.6312L3.5 13.5V11.25Z" />
    </svg>
  );
};

export default IconHalls;
