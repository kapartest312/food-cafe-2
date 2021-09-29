import {decorate, observable} from "mobx";
import {UsersAction} from "./users.action";

class UsersStore extends UsersAction {
  usersList = [];
}

// eslint-disable-next-line no-class-assign
UsersStore = decorate(UsersStore, {
  usersList: observable,
});

export default new UsersStore();
