import React from "react";
import cn from "classnames";

import Layout from "../../../segments/Layout";

import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import {inject, observer} from "mobx-react";

const CreateCoworkingPage = inject("store")(
  observer(({store: {coworking}}) => {
    const isCreate = true;
    const fieldItemClassName = "create-coworking_form__item";
    const classPrefix = "create";

    return (
      <Layout headerTitle="Создание коворгинка">
        <div className={cn(`${classPrefix}-coworking-page_wrapper`)}>
          <div className={cn(`${classPrefix}-coworking-page_inner-wrapper`)}>
            <LeftSide
              isCreate={isCreate}
              classPrefix={classPrefix}
              fieldItemClassName={fieldItemClassName}
            />
            <RightSide
              classPrefix={classPrefix}
              fieldItemClassName={fieldItemClassName}
            />
          </div>
        </div>
      </Layout>
    );
  })
);

export default CreateCoworkingPage;
