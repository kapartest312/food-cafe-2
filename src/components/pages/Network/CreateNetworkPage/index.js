import React from "react";
import {inject, observer} from "mobx-react";

import Layout from "../../../segments/Layout";

const CreateNetworkPage = inject("store")(
  observer(({store: {file}}) => {
    return (
      <Layout headerTitle="Создание сети">
        <div className="create-networks-page_wrapper">
          <div className="create-networks-page_inner-wrapper">
            <h1>Создание Сети</h1>
            <h1>Создание Сети</h1>
            <h1>Создание Сети</h1>
            <h1>Создание Сети</h1>
          </div>
        </div>
      </Layout>
    );
  })
);

export default CreateNetworkPage;
