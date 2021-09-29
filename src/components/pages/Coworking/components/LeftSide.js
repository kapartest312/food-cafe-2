import React, {useState} from "react";
import cn from "classnames";

import MainForm from "./forms/MainForm";
import ComfortsForm from "./forms/ComfortsForm";
import ReservesPlaces from "./ReservesPlaces";
import ButtonPrimary from "../../../buttons/ButtonPrimary";
import DeleteCoworkingModal from "./DeleteCoworkingModal";

import {buttonColor} from "../../../buttons/consts";

const LeftSide = ({
  isEdit = false,
  isCreate = false,
  classPrefix,
  fieldItemClassName,
  coworkingId,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onOpenModal = () => setModalVisible(true);
  const onCloseModal = () => setModalVisible(false);

  return (
    <div className={cn(`${classPrefix}-coworking-page_left-side__wrapper`)}>
      <div className={cn(`${classPrefix}-coworking-page_left-side__inner-wrapper`)}>
        <MainForm
          isEdit={isEdit}
          isCreate={isCreate}
          fieldItemClassName={fieldItemClassName}
        />
        {isEdit && (
          <>
            <ComfortsForm
              isFormDisable={isCreate}
              classPrefix={classPrefix}
              fieldItemClassName={fieldItemClassName}
            />
            <ReservesPlaces
              isFormDisable={isCreate}
              fieldItemClassName={fieldItemClassName}
            />
          </>
        )}

        {isEdit && coworkingId && (
          <div className={cn(`${classPrefix}-coworking-page_left-side__actions`)}>
            <ButtonPrimary buttonColor={buttonColor.danger} onClick={onOpenModal}>
              Удалить коворкинг
            </ButtonPrimary>
            <DeleteCoworkingModal
              modalVisible={modalVisible}
              onCloseModal={onCloseModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSide;
