import React from "react";

import TablesForm from "./forms/TablesForm";

const ReservesPlaces = ({isFormDisable, fieldItemClassName}) => {
  return (
    <div className="create-coworking_reserves__wrapper">
      <div className="create-coworking_reserves__inner-wrapper">
        <TablesForm
          className="create-coworking_form__reserves _wrapper"
          isFormDisable={isFormDisable}
          fieldItemClassName={fieldItemClassName}
        />
        {/*<MeetingRoomsForm*/}
        {/*  className="create-coworking_form__reserves _wrapper"*/}
        {/*  isFormDisable={isFormDisable}*/}
        {/*  fieldItemClassName={fieldItemClassName}*/}
        {/*/>*/}
        {/*<HallsForm*/}
        {/*  className="create-coworking_form__reserves _wrapper"*/}
        {/*  isFormDisable={isFormDisable}*/}
        {/*  fieldItemClassName={fieldItemClassName}*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default ReservesPlaces;
