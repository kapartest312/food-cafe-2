import * as yup from "yup";
import {stringRequired} from "../../../../../../yup/defaultValudations";

export const meetingRoomsInitialValues = {
  meetingRooms: [
    {
      name: "",
      numberOfSeats: "",
      totalPrice: "",
    },
  ],
};

export const meetingRoomsSchema = yup.object().shape({
  meetingRooms: yup.array().of(
    yup.object().shape({
      name: stringRequired(),
      numberOfSeats: stringRequired(),
      totalPrice: stringRequired(),
    })
  ),
});
