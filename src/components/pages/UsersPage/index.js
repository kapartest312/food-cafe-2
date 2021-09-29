import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";

import Layout from "../../segments/Layout";
import UserCard from "./components/UserCard";
import UserListHead from "./components/UserListHead";

const UsersPage = inject("store")(
  observer(({store: {users}}) => {
    useEffect(() => {
      users.getUsersList();
    }, [users]);

    return (
      <Layout headerTitle="Пользователи">
        <div className="users-page_wrapper">
          <div className="users-page_inner-wrapper">
            <div className="users-page_list__wrapper">
              <UserListHead />
              {users?.usersList?.map((item, index) => (
                <UserCard
                  key={index}
                  fullName={item?.fullName}
                  number={item?.phoneNumber}
                  email={item?.email}
                  reserves={item?.numberOfReservationsMade}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  })
);

export default UsersPage;
