import React from "react";
import {inject, observer} from "mobx-react";
import cn from "classnames";

import FieldInputPhone from "../../../../../../formFields/FieldInputPhone";
import FieldInput from "../../../../../../formFields/FieldInput";

import {mainFieldsNames, mainInitialValues} from "../formAttrs";

const ContactsFields = inject("store")(
  observer(({store: {coworking}, setFieldValue, fieldItemClassName}) => {
    const {coworkingDetails} = coworking;

    return (
      <div className="create-coworking_form__contacts _wrapper">
        <h3 className="create-coworking_form__title">Контакты</h3>
        <FieldInputPhone
          name={mainFieldsNames.landlinesPhone}
          errorName={mainFieldsNames.landlinesPhone}
          label="Номер телефона (станционар):"
          wrapperClassName={cn(fieldItemClassName)}
          onChange={(val) => setFieldValue(mainFieldsNames.landlinesPhone, val)}
          defaultValue={
            coworkingDetails?.contacts?.landlines[0] || mainFieldsNames.landlinesPhone
          }
        />
        <FieldInputPhone
          name={mainFieldsNames.mobilePhone}
          errorName={mainFieldsNames.mobilePhone}
          label="Номер телефона (мобильный):"
          wrapperClassName={cn(fieldItemClassName)}
          onChange={(val) => setFieldValue(mainFieldsNames.mobilePhone, val)}
          defaultValue={
            coworkingDetails?.contacts?.mobiles[0] || mainFieldsNames.landlinesPhone
          }
        />
        <FieldInput
          name={mainFieldsNames.site}
          errorName={mainFieldsNames.site}
          label="Сайт:"
          placeholder="Сайт"
          wrapperClassName={cn(fieldItemClassName)}
          defaultValue={coworkingDetails?.contacts?.sites || mainInitialValues.site}
        />
        <FieldInput
          name={mainFieldsNames.emails}
          errorName={mainFieldsNames.emails}
          label="Email:"
          placeholder="Email"
          wrapperClassName={cn(fieldItemClassName)}
          defaultValue={coworkingDetails?.contacts?.emails[0] || mainInitialValues.emails}
        />
      </div>
    );
  })
);

export default ContactsFields;
