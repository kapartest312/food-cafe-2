import axiosInstance from "../../api/api";

export class ReservesAction {
  getReservesData() {
    const params = {digits: "0465"};
    axiosInstance
      .get("admin/reservations/by-phone-number", {params})
      .then(({data}) => {
        console.log(data, "reserves");
        this.setReservesList(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  setReservesList(data) {
    this.reservesList = data;
  }
}
