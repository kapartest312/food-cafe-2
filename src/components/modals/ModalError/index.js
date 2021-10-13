import React from "react";
import {inject, observer} from "mobx-react";
import cn from "classnames";
import {useHistory} from "react-router-dom";

import {MAIN_PAGE} from "../../../consts/routes.const";
import ModalLayout from "../ModalLayout";
import ButtonPrimary from "../../buttons/ButtonPrimary";

const ModalError = inject("store")(
  observer(({isVisible, closeModal}) => {
    const history = useHistory();
    const classPrefix = "modal-error";

    const onMainBtnClick = () => {
      history.push(MAIN_PAGE);
    };

    const refreshPage = () => {
      if (window) {
        window.location.reload();
      }
    };

    return (
      <ModalLayout isVisible={isVisible} wrapperClassName={`${classPrefix}_wrapper`}>
        <div className={cn("modal_content", `${classPrefix}_content`)}>
          <div className={cn("modal_icon", `${classPrefix}_icon`)}>{"🤷"}</div>
          <h3 className={cn("modal_title", `${classPrefix}_title`)}>
            Что-то пошло не так!
          </h3>
          <p className={cn("modal_text", `${classPrefix}_text`)}>
            Попробуйте перезагрузить страницу и повторить снова.
          </p>
          <p className={cn("modal_text", `${classPrefix}_text`)}>
            Если не получится подтвердить бронь после перезагрузки страницы, то обратитесь
            в службу поддержки +7 (495) 120-02-31.
          </p>
          <div className={cn("modal_actions", `${classPrefix}_actions`)}>
            <ButtonPrimary onClick={refreshPage} type="button" buttonColor="default">
              Перезагрузить страницу
            </ButtonPrimary>
            <ButtonPrimary onClick={onMainBtnClick} type="button" buttonColor="primary">
              На главную
            </ButtonPrimary>
          </div>
        </div>
      </ModalLayout>
    );
  })
);

export default ModalError;
