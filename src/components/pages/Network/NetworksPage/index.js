import React from "react";
import {inject, observer} from "mobx-react";

import Layout from "../../../segments/Layout";
import ButtonLink from "../../../buttons/ButtonLink";

import {CREATE_NETWORK_PAGE} from "../../../../consts/routes.const";

const NetworksPage = inject("store")(
  observer(({store: {file}}) => {
    return (
      <Layout
        headerTitle="Сети"
        headerButton={
          <ButtonLink hrefTo={CREATE_NETWORK_PAGE}>+ Добавить сеть</ButtonLink>
        }
      >
        <div className="networks-page_wrapper">
          <div className="networks-page_inner-wrapper">
            <h1>Список сетей</h1>
            <h1>Список сетей</h1>
            <h1>Список сетей</h1>
          </div>
        </div>
      </Layout>
    );
  })
);

export default NetworksPage;
