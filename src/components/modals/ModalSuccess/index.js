import React from "react";
import {inject, observer} from "mobx-react";
import cn from "classnames";
import {useHistory} from "react-router-dom";

import {MAIN_PAGE} from "../../../consts/routes.const";
import ModalLayout from "../ModalLayout";
import ButtonPrimary from "../../buttons/ButtonPrimary";

const ModalSuccess = inject("store")(
  observer(({isVisible, closeModal}) => {
    const history = useHistory();
    const classPrefix = "modal-success";

    const onMainBtnClick = () => {
      history.push(MAIN_PAGE);
    };

    return (
      <ModalLayout isVisible={isVisible} wrapperClassName={`${classPrefix}_wrapper`}>
        <div className={cn("modal_content", `${classPrefix}_content`)}>
          <div className={cn("modal_icon", `${classPrefix}_icon`)}>{"👍"}</div>
          <h3 className={cn("modal_title", `${classPrefix}_title`)}>
            Бронь активирована
          </h3>
          <p className={cn("modal_text", `${classPrefix}_text`)}>
            Теперь вы можете пройти за столик и комфортно работать в вашем любимом
            ресторане!
          </p>
          <div className={cn("modal_actions", `${classPrefix}_actions`)}>
            <ButtonPrimary onClick={onMainBtnClick} type="button" buttonColor="primary">
              На главную
            </ButtonPrimary>
          </div>
        </div>
      </ModalLayout>
    );
  })
);

export default ModalSuccess;
