import React from "react";

import Layout from "../../segments/Layout";

const StaticPage = () => {
  return (
    <Layout headerTitle="Static page">
      <div className="static-page_wrapper">
        <div className="static-page_inner-wrapper">
          <h1>Static page</h1>
        </div>
      </div>
    </Layout>
  );
};

export default StaticPage;
