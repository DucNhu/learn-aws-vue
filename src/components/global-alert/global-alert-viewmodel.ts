import { action, observable } from "mobx";

export class GlobalAlertViewmodel {
  @observable snackbar = false;
  @observable mess = "";

  @action onAlert(text: string) {
    this.snackbar = true;
    this.mess = text;
    setTimeout(() => {
      this.offAlert();
    }, 3000);
  }

  @action offAlert() {
    this.snackbar = false;
    this.mess = "";
  }
}

export const globalAlert = new GlobalAlertViewmodel();
