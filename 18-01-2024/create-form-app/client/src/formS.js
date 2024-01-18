import { makeAutoObservable } from "mobx";

export default class FormS {
  constructor() {
    this._formData = {
      name: "",
      surname: "",
      education: "",
      work: "",
    };
    makeAutoObservable(this);
  }

  setFormData(key, value) {
    this._formData[key] = value;
  }

  get formData() {
    return this._formData;
  }
}
