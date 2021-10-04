import axiosInstance from "../../api/api";

export class ReservesAction {
  getReservesData(lastDigitsOfNumber) {
    const params = {digits: lastDigitsOfNumber};
    return axiosInstance
      .get("admin/reservations/by-phone-number", {params})
      .then(({data}) => {
        console.log(data, "reserves");
        this.setReservesList(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  reserveById(reservationId) {
    return axiosInstance
      .post(`admin/reservations/${reservationId}/confirm`)
      .then(({data}) => {
        console.log(data, "reserveById");
        this.reservesList = this.reservesList.filter((item) => item.id !== reservationId);
      })
      .catch((err) => {
        throw err;
      });
  }

  testReserveById(reservationId) {
    return new Promise((resolve, reject) => {
      this.reservesList = this.reservesList.filter((item) => item.id !== reservationId);
      resolve();
    });
  }

  setReservesList(data) {
    console.log("setReservesList", data);
    this.reservesList = data;
  }

  setLastDigitsOfNumber(data) {
    this.lastDigitsOfNumber = data;
  }
}
