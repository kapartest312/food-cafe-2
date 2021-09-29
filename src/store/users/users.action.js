import axiosInstance from "../../api/api";

export class UsersAction {
  getUsersList() {
    axiosInstance
      .get("users")
      .then(({data}) => {
        this.setUsersList(data.users);
      })
      .catch((err) => {
        throw err;
      });
  }

  setUsersList(data) {
    this.usersList = data;
  }
}
