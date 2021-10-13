import React from "react";
import {Provider} from "mobx-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import "rc-time-picker/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-modal/styles.css";
// local
import store from "../store";
import {MAIN_PAGE, RESERVES_PAGE} from "../consts/routes.const";

import MainPageLayout from "../pages/MainPageLayout";
import ReservesPageLayout from "../pages/ReservesPageLayout";
import ErrorPageLayout from "../pages/ErrorPageLayout";

export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={MAIN_PAGE} component={MainPageLayout} />
            <Route path={RESERVES_PAGE} component={ReservesPageLayout} />
            <Route component={ErrorPageLayout} />
          </Switch>
        </Router>
      </Provider>
      <ToastContainer />
    </div>
  );
};
