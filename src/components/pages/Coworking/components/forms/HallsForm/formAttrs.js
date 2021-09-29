import * as yup from "yup";
import {stringRequired} from "../../../../../../yup/defaultValudations";

export const hallsInitialValues = {
  halls: [
    {
      name: "",
      numberOfSeats: "",
      totalPrice: "",
    },
  ],
};

export const hallsSchema = yup.object().shape({
  halls: yup.array().of(
    yup.object().shape({
      name: stringRequired(),
      numberOfSeats: stringRequired(),
      totalPrice: stringRequired(),
    })
  ),
});
