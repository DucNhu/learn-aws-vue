import { action, observable } from "mobx";

export class GlobalAlertViewmodel {
  @observable snackbar = false;
  @observable mess = "";

  @action onAlert(text: string) {
    this.snackbar = true;
    switch (text) {
      case "Invalid phone number format.":
        this.mess = "Số điện thoại nhập vào không chính xác";
        break;
      case "Incorrect username or password.":
        this.mess = "Tài khoản hoặc mật khẩu không chính xác";
        break;
      case "User does not exist.":
        this.mess = "Tài khoản không tồn tại";
        break;
      case "Invalid email address format.":
        this.mess = "Địa chỉ email không hợp lệ";
        break;

      default:
        this.mess = text;

        if (text.indexOf("validation error") > -1)
          this.mess = "Tên tài khoản không được phép có khoảng trắng";
        break;
    }
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
