import * as yup from "yup";
import {stringRequired} from "../../../../../../yup/defaultValudations";

export const tablesInitialValues = {
  tables: [
    {
      name: "",
      numberOfSeats: "",
      pricePerSeat: "",
    },
  ],
};

export const tablesSchema = yup.object().shape({
  tables: yup.array().of(
    yup.object().shape({
      name: stringRequired(),
      numberOfSeats: stringRequired(),
      pricePerSeat: stringRequired(),
    })
  ),
});
