import axiosInstance from "../../api/api";

export class CommonAction {
  getCitiesData() {
    return axiosInstance
      .get("cities")
      .then(({data}) => {
        this.setCitiesList(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  setCitiesList(data) {
    this.citiesList = data;
  }

  getNetworksData() {
    return axiosInstance
      .get("networks")
      .then(({data}) => {
        this.setNetworksList(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  setNetworksList(data) {
    this.networksList = data;
  }

  getMetroData(city) {
    const params = {city: city};
    axiosInstance
      .get("metro-stations", {params})
      .then(({data}) => {
        this.setMetroList(data);
      })
      .catch((err) => {
        this.setMetroList([]);
        throw err;
      });
  }

  setMetroList(data) {
    this.metroList = data;
  }

  getAddressData(data) {
    const params = {address: data, pageSize: 15};
    axiosInstance
      .get("suggest", {params})
      .then(({data}) => {
        this.setAddressList(data);
      })
      .catch((err) => {
        this.setMetroList([]);
        throw err;
      });
  }

  setAddressList(data) {
    this.addressList = data;
  }
}
