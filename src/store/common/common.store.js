import {decorate, observable} from "mobx";
import {CommonAction} from "./common.action";

class CommonStore extends CommonAction {
  citiesList = [];
  metroList = [];
  networksList = {};
  addressList = [];
}

// eslint-disable-next-line no-class-assign
CommonStore = decorate(CommonAction, {
  citiesList: observable,
  metroList: observable,
  networksList: observable,
  addressList: observable,
});

export default new CommonStore();
