import React from "react";
import {inject, observer} from "mobx-react";
import {useHistory} from "react-router-dom";

import {Modal} from "react-responsive-modal";
import ButtonPrimary from "../../../buttons/ButtonPrimary";
import {buttonColor} from "../../../buttons/consts";
import {COWORKING_PAGE} from "../../../../consts/routes.const";

const DeleteCoworkingModal = inject("store")(
  observer(({store: {coworking}, modalVisible, onCloseModal}) => {
    const history = useHistory();

    const deleteCoworking = () => {
      if (coworking?.coworkingDetails?.id) {
        coworking
          .deleteCoworking(coworking.coworkingDetails.id)
          .then(() => {
            history.push(COWORKING_PAGE);
          })
          .finally(() => onCloseModal());
      }
    };

    return (
      <Modal open={modalVisible} onClose={onCloseModal}>
        <div className="custom-modal_content__wrapper ">
          <h3 className="custom-modal_content__title">Удалить коворкинг?</h3>
          <p className="custom-modal_content__text">
            Вы не сможете восстановить коворкинг после его удаления. <br />
          </p>
          <div className="custom-modal_content__actions _wrapper">
            <ButtonPrimary buttonColor={buttonColor.danger} onClick={deleteCoworking}>
              Удалить
            </ButtonPrimary>
            <ButtonPrimary buttonColor={buttonColor.default} onClick={onCloseModal}>
              Отмена
            </ButtonPrimary>
          </div>
        </div>
      </Modal>
    );
  })
);

export default DeleteCoworkingModal;
