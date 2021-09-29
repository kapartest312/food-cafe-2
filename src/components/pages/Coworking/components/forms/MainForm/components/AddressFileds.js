import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import cn from "classnames";

import FieldSelect from "../../../../../../formFields/FieldSelect";

import {mainFieldsNames, mainInitialValues} from "../formAttrs";
import FieldSuggestAddress from "../../../../../../formFields/FieldSuggestAddress";

const AddressFields = inject("store")(
  observer(({store: {common, coworking}, setFieldValue, fieldItemClassName, isEdit}) => {
    const [fetching, setFetching] = useState(true);
    const [citiesListState, setCitiesListState] = useState([]);
    const [metroListOptions, setMetroListOptions] = useState([]);
    const [selectedCityLabel, setSelectedCityLabel] = useState("");
    const {coworkingDetails} = coworking;
    const coworkingCity = coworkingDetails?.address?.city;

    useEffect(() => {
      common.getCitiesData().finally(() => setFetching(false));
    }, [common]);

    useEffect(() => {
      const newCitiesList = common?.citiesList?.map(({city}) => ({
        value: city,
        label: city,
      }));
      setCitiesListState(newCitiesList);
    }, [common.citiesList]);

    const onCitiesChange = (value) => {
      setFieldValue(mainFieldsNames.city, value);
      common.getMetroData(value);
    };

    const formatOptionLabel = ({label, hex_color}) => (
      <div style={{display: "flex"}}>
        {hex_color && (
          <span
            style={{
              backgroundColor: `#${hex_color}`,
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              marginRight: "10px",
              marginTop: "2px",
            }}
          />
        )}
        {label}
      </div>
    );

    useEffect(() => {
      const options = common?.metroList
        ? common?.metroList?.lines?.map((metroItem) => ({
            label: metroItem.name,
            hex_color: metroItem.hex_color,
            options: metroItem?.stations?.map((stationItem) => ({
              label: stationItem.name,
              value: stationItem.name,
              hex_color: metroItem.hex_color,
            })),
          }))
        : [];
      setMetroListOptions(options);
    }, [common.metroList]);

    useEffect(() => {
      if (isEdit && coworkingCity && common?.citiesList) {
        const newSelectedValue = common?.citiesList.find((x) => x.city === coworkingCity);
        setSelectedCityLabel(newSelectedValue.city);
      }
    }, [common.citiesList, coworkingCity, isEdit]);

    return (
      <div className="create-coworking_form__address _wrapper">
        <h3 className="create-coworking_form__title">Адрес</h3>
        <FieldSuggestAddress
          name={mainFieldsNames.address}
          errorName={mainFieldsNames.address}
          label="Адрес:"
          placeholder="Адрес"
          wrapperClassName={cn(fieldItemClassName)}
          setFieldValue={setFieldValue}
        />

        {!fetching && (
          <FieldSelect
            name={mainFieldsNames.city}
            errorName={mainFieldsNames.city}
            label="Город:"
            placeholder="Город"
            wrapperClassName={cn(fieldItemClassName)}
            options={citiesListState}
            onChange={(val) => onCitiesChange(val)}
            defaultValue={
              isEdit && {
                label: selectedCityLabel,
                value: coworkingDetails?.address.city || mainInitialValues.city,
              }
            }
          />
        )}

        {!fetching && (
          <FieldSelect
            name={mainFieldsNames.metro}
            errorName={mainFieldsNames.metro}
            label="Станция метро:"
            placeholder="Метро"
            wrapperClassName={cn(fieldItemClassName)}
            options={metroListOptions}
            disabled={!metroListOptions?.length}
            onChange={(val) => setFieldValue(mainFieldsNames.metro, val)}
            formatOptionLabel={formatOptionLabel}
            styles={{
              groupHeading: (base) => ({
                ...base,
                flex: "1 1",
                color: "black",
                fontWeight: "bold",
                fontSize: "14px",
                backgroundColor: "#dbdbdb",
                margin: 0,
                padding: "10px",
              }),
            }}
          />
        )}
      </div>
    );
  })
);

export default AddressFields;
