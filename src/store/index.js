import ReservesStore from "./reserves/reserves.store";

class RootStore {
  constructor() {
    this.reserves = ReservesStore;
  }
}

export default new RootStore();
