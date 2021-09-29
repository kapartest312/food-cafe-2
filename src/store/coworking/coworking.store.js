import {decorate, observable} from "mobx";
import {CoworkingAction} from "./coworking.action";

class CoworkingStore extends CoworkingAction {
  coworkingsList = {};
  coworkingDetails = {};
  reservesTables = {};
  reservesMeetingRooms = {};
  reservesHall = {};
  coworkingFiles = [];
}

// eslint-disable-next-line no-class-assign
CoworkingStore = decorate(CoworkingAction, {
  coworkingsList: observable,
  coworkingDetails: observable,
  reservesTables: observable,
  reservesMeetingRooms: observable,
  reservesHall: observable,
  coworkingFiles: observable,
});

export default new CoworkingStore();
