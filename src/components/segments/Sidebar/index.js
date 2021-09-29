import React, {useRef, useEffect} from "react";
import {NavLink} from "react-router-dom";

import Logout from "../../common/Logout";

import {
  COWORKING_PAGE,
  LOGIN_PAGE,
  MAIN_PAGE,
  USERS_PAGE,
} from "../../../consts/routes.const";

const Sidebar = ({setSidebarWidth}) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef?.current?.clientWidth) {
      const clientWidth = sidebarRef.current.clientWidth;
      setSidebarWidth(clientWidth);
    }
  });

  return (
    <div className="sidebar_wrapper" ref={sidebarRef}>
      <div className="sidebar_inner-wrapper">
        <div className="sidebar_logo__wrapper">
          <NavLink to={MAIN_PAGE} className="sidebar_logo__item">
            FOODWORKING
          </NavLink>
        </div>
        <div className="sidebar_list__wrapper">
          {/*<NavLink to={STATIC_PAGE} className="sidebar_list__item">*/}
          {/*  Управление сайтом*/}
          {/*</NavLink>*/}
          {/*<NavLink to={RESERVES_PAGE} className="sidebar_list__item">*/}
          {/*  Резервы*/}
          {/*</NavLink>*/}
          <NavLink to={USERS_PAGE} className="sidebar_list__item">
            Пользователи
          </NavLink>
          <NavLink to={COWORKING_PAGE} className="sidebar_list__item">
            Коворкинги
          </NavLink>
          {/*<NavLink to={NETWORKS_PAGE} className="sidebar_list__item">*/}
          {/*  Сети*/}
          {/*</NavLink>*/}
        </div>
        <div className="sidebar_exit__wrapper">
          <Logout
            component={
              <NavLink to={LOGIN_PAGE} className="sidebar_exit__item">
                Выйти
              </NavLink>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
