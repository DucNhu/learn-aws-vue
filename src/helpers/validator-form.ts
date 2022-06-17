export const rulesHelper = {
  required: (v: any) => !!v || "Vui lòng điền trường này",
  email: (v: string) => /.+@.+/.test(v) || "Email không được chấp nhận",
  min: (value: any, minLength: any) => {
    if (value.length < minLength)
      return `Vui lòng nhập hơn ${minLength - 1} kí tự`;
    else return true;
  },
};
