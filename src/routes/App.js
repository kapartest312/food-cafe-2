import React, {useEffect} from "react";
import {Provider} from "mobx-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {useHistory} from "react-router-dom";

import "rc-time-picker/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-modal/styles.css";
// local
import store from "../store";
import {
  MAIN_PAGE,
  LOGIN_PAGE,
  COWORKING_PAGE,
  CREATE_COWORKING_PAGE,
  EDIT_COWORKING_PAGE,
  NETWORKS_PAGE,
  CREATE_NETWORK_PAGE,
  STATIC_PAGE,
  RESERVES_PAGE,
  USERS_PAGE,
} from "../consts/routes.const";

import MainPageLayout from "../pages/MainPageLayout";
import LoginPageLayout from "../pages/LoginPageLayout";
import CoworkingPageLayout from "../pages/CoworkingPageLayout";
import CreateCoworkingPageLayout from "../pages/CreateCoworkingPageLayout";
import EditCoworkingPageLayout from "../pages/EditCoworkingPageLayout";
import StaticPageLayout from "../pages/StaticPageLayout";
import NetworksPageLayout from "../pages/NetworksPageLayout";
import CreateNetworkPageLayout from "../pages/CreateNetworkPageLayout";
import UsersPageLayout from "../pages/UsersPageLayout";
import ReservesPageLayout from "../pages/ReservesPageLayout";
import ErrorPageLayout from "../pages/ErrorPageLayout";

import {clearStorage, getStorage} from "../services/storage.service";
import {ACCESS_TOKEN, ACCESS_TOKEN_EXPIRES} from "../consts/auth.const";
import {getTokenExpires} from "../helper/time.helper";

export const App = () => {
  let history = useHistory();
  const accessToken = getStorage(ACCESS_TOKEN);
  const accessTokenExpiresAtUtc = getStorage(ACCESS_TOKEN_EXPIRES);
  const nowTime = new Date().toISOString();

  useEffect(() => {
    if (nowTime > getTokenExpires(ACCESS_TOKEN_EXPIRES, true)) {
      clearStorage();
      toast.warning("Переавторизуйтесь. Ваша сессия истекта.");
      history.push(LOGIN_PAGE);
    }
    if (!accessToken) {
      history.push(LOGIN_PAGE);
    }
  }, [accessToken, nowTime, accessTokenExpiresAtUtc, history]);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={MAIN_PAGE} component={MainPageLayout} />
            {/* <Route exact path={LOGIN_PAGE} component={LoginPageLayout} /> */}
            {/* <Route exact path={STATIC_PAGE} component={StaticPageLayout} /> */}
            {/* <Route exact path={COWORKING_PAGE} component={CoworkingPageLayout} /> */}
            {/* <Route path={CREATE_COWORKING_PAGE} component={CreateCoworkingPageLayout} /> */}
            {/* <Route exact path={EDIT_COWORKING_PAGE} component={EditCoworkingPageLayout} /> */}
            {/* <Route exact path={NETWORKS_PAGE} component={NetworksPageLayout} /> */}
            {/* <Route path={CREATE_NETWORK_PAGE} component={CreateNetworkPageLayout} /> */}
            {/* <Route path={USERS_PAGE} component={UsersPageLayout} /> */}
            <Route path={RESERVES_PAGE} component={ReservesPageLayout} />
            {/* <Route path="*" component={ErrorPageLayout} /> */}
          </Switch>
        </Router>
      </Provider>
      <ToastContainer />
    </div>
  );
};
