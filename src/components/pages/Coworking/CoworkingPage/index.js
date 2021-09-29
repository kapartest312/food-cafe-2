import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";

import Layout from "../../../segments/Layout";
import CoworkingCard from "./components/CoworkingCard";
import CoworkingListHead from "./components/CoworkingListHead";
import ButtonLink from "../../../buttons/ButtonLink";
import {CREATE_COWORKING_PAGE} from "../../../../consts/routes.const";

const CoworkingPage = inject("store")(
  observer(({store: {coworking}}) => {
    useEffect(() => {
      coworking.getCoworkingsData();
    }, [coworking]);

    return (
      <Layout
        headerTitle="Коворкинги"
        headerButton={
          <ButtonLink hrefTo={CREATE_COWORKING_PAGE}>+ Добавить коворкинг</ButtonLink>
        }
      >
        <div className="coworking-page_wrapper">
          <div className="coworking-page_inner-wrapper">
            <div className="coworking-page_list__wrapper">
              <CoworkingListHead />
              <div className="coworking-page_list__inner-wrapper">
                {coworking?.coworkingsList?.map(
                  ({
                    id,
                    name,
                    network,
                    costCategory,
                    numberOfSeats,
                    isActive,
                    medias,
                  }) => (
                    <CoworkingCard
                      id={id}
                      name={name}
                      network={network.name}
                      price={costCategory}
                      preview={medias[0]}
                      totalSeats={numberOfSeats}
                      status={isActive}
                      key={id}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  })
);

export default CoworkingPage;
