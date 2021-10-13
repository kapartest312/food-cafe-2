import React from "react";
import {Route, Redirect} from "react-router-dom";
// local
import {getStorage} from "../services/storage.service";
import {LOGIN} from "../consts/routes.const";

export const PrivateRouter = ({component: Component}) => {
  const userId = getStorage("user_id");
  return <Route>{!userId ? <Redirect to={`${LOGIN}`} /> : <Component />}</Route>;
};
