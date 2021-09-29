import axiosInstance from "../../api/api";
import {toast} from "react-toastify";

import {coworkingReservesType} from "../../consts/coworking.const";

export class CoworkingAction {
  getCoworkingsData() {
    axiosInstance
      .get("coworkings")
      .then(({data}) => {
        this.setCoworkingsList(data.coworkings);
      })
      .catch((err) => {
        console.log("err", err);
        throw err;
      });
  }

  setCoworkingsList(data) {
    this.coworkingsList = data;
  }

  createCoworking(values) {
    return axiosInstance
      .post("coworkings", values)
      .then(({data}) => {
        toast.success("Коворкинг добавлен!");
      })
      .catch((err) => {
        err.data.errors.map((item) => toast.warning(item));
        throw err;
      });
  }

  updateCoworking(values, coworkingId) {
    console.log("updateCoworking", values);
    axiosInstance
      .put(`coworkings/${coworkingId}`, values)
      .then(() => {
        toast.success("Коворкинг обновлён!");
      })
      .catch((err) => {
        if (err.data.errors) {
          err.data.errors.map((item) => toast.warning(item));
        } else if (err.statusText) {
          toast.warning(err.statusText);
        } else toast.warning("Ошибка обновления");
        throw err;
      });
  }

  getCoworkingDetails(coworkingId) {
    return axiosInstance
      .get(`coworkings/${coworkingId}`)
      .then(({data}) => {
        this.setCoworkingDetails(data);
      })
      .catch((err) => {
        toast.error(err);
        throw err;
      });
  }

  setCoworkingDetails(data) {
    this.coworkingDetails = data;
  }

  getReservesPlace(coworkingId, reservesType) {
    axiosInstance
      .get(`coworkings/${coworkingId}/reservables/${reservesType}`)
      .then(({data}) => {
        this.setReservesPlace(data, reservesType);
      })
      .catch((err) => {
        toast.error(err);
        throw err;
      });
  }

  setReservesPlace(data, reservesType) {
    if (reservesType === coworkingReservesType.tables) {
      this.reservesTables = data;
    } else if (reservesType === coworkingReservesType.meetingRooms) {
      this.reservesMeetingRooms = data;
    } else if (reservesType === coworkingReservesType.halls) {
      this.reservesHall = data;
    }
  }

  createReservesPlace(values, coworkingId, reservesType) {
    axiosInstance
      .post(`coworkings/${coworkingId}/reservables/${reservesType}`, values)
      .then(({data}) => {
        this.setReservesPlace(data, reservesType);
        toast.success(`${reservesType} успешно обновлены`);
      })
      .catch((err) => {
        if (err.data.errors) {
          err.data.errors.map((item) => toast.warning(item));
        } else if (err.statusText) {
          toast.warning(err.statusText);
        } else toast.warning(`Ошибка при создании/обновлении ${reservesType}`);
        throw err;
      });
  }

  uploadFiles(file) {
    const promiseData = Object.values(file).map((item) => {
      const formData = new FormData();
      formData.append("files", item);
      return axiosInstance.post("files", formData);
    });

    Promise.all(promiseData)
      .then((res) => {
        this.setCoworkingFiles(res, true);
      })
      .catch((err) => toast.error(err));
  }

  deleteUploadedFile(files) {
    axiosInstance
      .delete("files", files)
      .then(() => {
        this.setCoworkingFiles(files, false);
        toast.success("Файл удалён");
      })
      .catch((err) => {
        toast.error(err);
        throw err;
      });
  }

  setCoworkingFiles(data, isAdd) {
    if (isAdd) {
      if (this.coworkingFiles) {
        this.coworkingFiles = this.coworkingFiles.concat(data);
        return;
      }
      this.coworkingFiles = data;
    } else {
      if (this.coworkingFiles) {
        this.coworkingFiles = this.coworkingFiles.filter((item) => {
          return item.data[0] !== data.data[0];
        });
      }
    }
  }

  deleteCoworking(coworkingId) {
    return axiosInstance
      .delete(`coworkings/${coworkingId}`)
      .then(() => {
        toast.success(`Коворкинг успешно удалён`);
        this.resetCoworkingState();
      })
      .catch((err) => {
        if (err.data.errors) {
          err.data.errors.map((item) => toast.warning(item));
        } else if (err.statusText) {
          toast.warning(err.statusText);
        } else toast.warning(`Ошибка при удалении коворкинга`);
      });
  }

  resetCoworkingState() {
    this.setCoworkingDetails({});
    this.setReservesPlace({}, coworkingReservesType.tables);
    this.setReservesPlace({}, coworkingReservesType.meetingRooms);
    this.setReservesPlace({}, coworkingReservesType.halls);
  }
}
