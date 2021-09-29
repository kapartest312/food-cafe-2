import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {useParams} from "react-router-dom";
import cn from "classnames";

import Layout from "../../../segments/Layout";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const EditCoworkingPage = inject("store")(
  observer(({store: {coworking}}) => {
    const [fetching, setFetching] = useState(true);
    const isEdit = true;
    const fieldItemClassName = "edit-coworking_form__item";
    const classPrefix = "edit";
    const {coworkingId} = useParams();
    const coworkingData = coworking?.coworkingDetails;

    useEffect(() => {
      coworking.getCoworkingDetails(coworkingId).finally(() => setFetching(false));
    }, [coworking, coworkingId]);

    useEffect(() => {
      return () => {
        coworking.resetCoworkingState();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Layout headerTitle={`Редактирование коворкинга. ID: ${coworkingData?.id || ""}`}>
        <div className={cn(`${classPrefix}-coworking-page_wrapper`)}>
          {!fetching ? (
            <div className={cn(`${classPrefix}-coworking-page_inner-wrapper`)}>
              <LeftSide
                isEdit={isEdit}
                classPrefix={classPrefix}
                fieldItemClassName={fieldItemClassName}
                coworkingId={coworkingData?.id}
              />
              <RightSide
                isEdit={isEdit}
                classPrefix={classPrefix}
                fieldItemClassName={fieldItemClassName}
              />
            </div>
          ) : (
            "Загрузка данных..."
          )}
        </div>
      </Layout>
    );
  })
);

export default EditCoworkingPage;
