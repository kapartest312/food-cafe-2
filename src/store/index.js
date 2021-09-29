import AuthStore from "./auth/auth.store";
import CoworkingStore from "./coworking/coworking.store";
import CommonStore from "./common/common.store";
import UsersStore from "./users/users.store";
import ReservesStore from "./reserves/reserves.store";

class RootStore {
  constructor() {
    this.auth = AuthStore;
    this.coworking = CoworkingStore;
    this.common = CommonStore;
    this.users = UsersStore;
    this.reserves = ReservesStore;
  }
}

export default new RootStore();
