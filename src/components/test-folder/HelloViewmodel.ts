import axios from "axios";

export class HelloViewmodel {
  constructor() {
    this.onExcution();
  }

  onExcution() {
    axios
      .get(
        `https://sahfhj3mdl.execute-api.ap-northeast-1.amazonaws.com/default/helloworld-staging`
      )
      .then((res) => {
        if (res) {
          console.log(res);

          //   this.loading = false;
          //   this.formExcution.reset();
          //   this.show = false;
          //   snackController.success("Successful");
        }
      })
      .catch((err) => {
        console.log(err);

        // this.show = true;
        // this.loading = false;
        // snackController.error("Data is incorrect, please check again!");
      });
  }
}
