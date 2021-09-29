const renderOpeningHours = (timeFrom, timeTo) => {
  const timetable = [];
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let i = 0; i < weekDays.length; i++) {
    timetable.push({
      dayOfWeek: weekDays[i],
      sequences: [
        {
          from: timeFrom,
          to: timeTo,
          type: "Work",
        },
      ],
    });
  }
  return timetable;
};

export const convertNewCoworkingData = (values) => {
  const restaurantHours = renderOpeningHours(
    values.restaurant_timeFrom,
    values.restaurant_timeTo
  );
  const coworkingHours = renderOpeningHours(
    values.coworking_timeFrom,
    values.coworking_timeTo
  );
  return {
    name: values.name,
    description: values.description,
    networkId: values.networkId,
    contacts: {
      landlines: [values.landlinesPhone],
      mobiles: [values.mobilePhone],
      sites: [values.sites],
      emails: [values.emails],
    },
    address: {
      city: values.city,
      country: values.country,
      address: values.address,
      metroStation: values.metro.name,
      metroColor: values.metro.hex_color,
      lat: values.latitude,
      lon: values.longitude,
    },
    coworkingOpeningHours: {
      regulars: coworkingHours,
    },
    eateryOpeningHours: {
      regulars: restaurantHours,
    },
    features: [
      {
        name: "nameTest1",
        description: "descriptionTest1",
        media: {
          url: "https://picsum.photos/30/30",
        },
      },
    ],
    medias: values.medias,
  };
};
