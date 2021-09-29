import * as yup from "yup";
// import {stringRequired} from "../../../../../../yup/defaultValudations";

export const mainFieldsNames = {
  name: "name",
  networkId: "networkId",
  description: "description",
  medias: "medias",
  restaurant_timeFrom: "restaurant_timeFrom",
  restaurant_timeTo: "restaurant_timeTo",
  coworking_timeFrom: "coworking_timeFrom",
  coworking_timeTo: "coworking_timeTo",
  mobilePhone: "mobilePhone",
  landlinesPhone: "landlinesPhone",
  site: "site",
  emails: "emails",
  country: "country",
  address: "address",
  latitude: "latitude",
  longitude: "longitude",
  city: "city",
  metro: "metro",
};

export const mainInitialValues = {
  name: "",
  networkId: "",
  description: "",
  medias: [""],
  restaurant_timeFrom: "",
  restaurant_timeTo: "",
  coworking_timeFrom: "",
  coworking_timeTo: "",
  mobilePhone: "",
  landlinesPhone: "",
  site: "",
  emails: "",
  country: "Russia",
  address: "",
  latitude: "",
  longitude: "",
  city: "",
  metro: "",
};

export const mainSchema = yup.object().shape({
  // name: stringRequired(),
  // networkId: stringRequired(),
  // description: stringRequired(),
  // restaurant_timeFrom: stringRequired(),
  // restaurant_timeTo: stringRequired(),
  // coworking_timeFrom: stringRequired(),
  // coworking_timeTo: stringRequired(),
  // phone: stringRequired(),
  // site: stringRequired(),
  // city: stringRequired(),
  // metro: stringRequired(),
});
