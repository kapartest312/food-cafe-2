import {decorate, observable} from "mobx";
import {ReservesAction} from "./reserves.action";

class ReservesStore extends ReservesAction {
  reservesList = {};
  lastDigitsOfNumber = "";
}

// eslint-disable-next-line no-class-assign
ReservesStore = decorate(ReservesAction, {
  reservesList: observable,
  lastDigitsOfNumber: observable,
});

export default new ReservesStore();
