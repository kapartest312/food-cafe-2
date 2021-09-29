import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import cn from "classnames";

import FieldInput from "../../../../../../formFields/FieldInput";
import FieldTextarea from "../../../../../../formFields/FieldTextarea";
import FieldSelect from "../../../../../../formFields/FieldSelect";
import FieldTimePicker from "../../../../../../formFields/FieldTimePicker";
import FieldDropzone from "../../../../../../formFields/FieldDropzone";

import {mainFieldsNames, mainInitialValues} from "../formAttrs";

const GeneralFields = inject("store")(
  observer(({store: {common, coworking}, setFieldValue, fieldItemClassName, isEdit}) => {
    const [fetching, setFetching] = useState(true);
    const [networkList, setNetworkList] = useState([]);
    const [selectedLabel, setSelectedLabel] = useState("");
    const {coworkingDetails} = coworking;
    const coworkingNetworkId = coworkingDetails?.networkId;
    const commonNetworksList = common?.networksList?.networks;

    useEffect(() => {
      common.getNetworksData().finally(() => setFetching(false));
    }, [common]);

    useEffect(() => {
      const newNetworkList = common?.networksList?.networks?.map(({name, id}) => ({
        value: id,
        label: name,
      }));
      setNetworkList(newNetworkList);
    }, [common.networksList]);

    useEffect(() => {
      if (isEdit && coworkingNetworkId && commonNetworksList) {
        const newSelectedValue = commonNetworksList.find(
          (x) => x.id === coworkingNetworkId
        );
        setSelectedLabel(newSelectedValue.name);
      }
    }, [commonNetworksList, coworkingNetworkId, isEdit]);

    return (
      <div className="create-coworking_form__general _wrapper">
        <h3 className="create-coworking_form__title">Общее</h3>
        <FieldInput
          name={mainFieldsNames.name}
          errorName={mainFieldsNames.name}
          label="Название:"
          placeholder="Название"
          wrapperClassName={cn(fieldItemClassName)}
          defaultValue={coworkingDetails?.name || mainInitialValues.name}
        />
        {!fetching && (
          <FieldSelect
            name={mainFieldsNames.networkId}
            errorName={mainFieldsNames.networkId}
            label="Сеть:"
            placeholder="Сеть"
            wrapperClassName={cn(fieldItemClassName)}
            options={networkList}
            onChange={(val) => setFieldValue(mainFieldsNames.networkId, val)}
            defaultValue={
              isEdit && {
                label: selectedLabel,
                value: coworkingDetails?.networkId || mainInitialValues.networkId,
              }
            }
          />
        )}
        <FieldTextarea
          name={mainFieldsNames.description}
          errorName={mainFieldsNames.description}
          label="Описание:"
          placeholder="Описание"
          wrapperClassName={cn(fieldItemClassName)}
          charCounter={true}
          maxChar={300}
          onChange={(val) => setFieldValue(mainFieldsNames.description, val)}
          defaultValue={coworkingDetails?.description || mainInitialValues.description}
        />
        <FieldDropzone
          name={mainFieldsNames.medias}
          errorName={mainFieldsNames.medias}
          label="Фото:"
          wrapperClassName={cn(fieldItemClassName, "create-coworking_form__media")}
          setFieldValue={setFieldValue}
          defaultList={isEdit && coworkingDetails?.medias}
        />
        <div className="create-coworking_form__time _wrapper">
          <label className="create-coworking_form__time _label">
            Время работы ресторана:
          </label>
          <FieldTimePicker
            name={mainFieldsNames.restaurant_timeFrom}
            errorName={mainFieldsNames.restaurant_timeFrom}
            label="с"
            placeholder="00:00"
            wrapperClassName={cn(fieldItemClassName, "create-coworking_form__timeFrom")}
            onChange={(val) => setFieldValue(mainFieldsNames.restaurant_timeFrom, val)}
          />
          <FieldTimePicker
            name={mainFieldsNames.restaurant_timeTo}
            errorName={mainFieldsNames.restaurant_timeTo}
            label="до"
            placeholder="00:00"
            wrapperClassName={cn(fieldItemClassName, "create-coworking_form__timeTo")}
            onChange={(val) => setFieldValue(mainFieldsNames.restaurant_timeTo, val)}
          />
        </div>
        <div className="create-coworking_form__time _wrapper">
          <label className="create-coworking_form__time _label">
            Время работы в режиме коворкинга:
          </label>
          <FieldTimePicker
            name={mainFieldsNames.coworking_timeFrom}
            errorName={mainFieldsNames.coworking_timeFrom}
            label="с"
            placeholder="00:00"
            wrapperClassName={cn(fieldItemClassName, "create-coworking_form__timeFrom")}
            onChange={(val) => setFieldValue(mainFieldsNames.coworking_timeFrom, val)}
            minuteStep={30}
          />
          <FieldTimePicker
            name={mainFieldsNames.coworking_timeTo}
            errorName={mainFieldsNames.coworking_timeTo}
            label="до"
            placeholder="00:00"
            wrapperClassName={cn(fieldItemClassName, "create-coworking_form__timeTo")}
            onChange={(val) => setFieldValue(mainFieldsNames.coworking_timeTo, val)}
            minuteStep={30}
          />
        </div>
      </div>
    );
  })
);

export default GeneralFields;
