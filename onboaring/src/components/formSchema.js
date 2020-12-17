import * as yup from "yup";
import "../App.css";
export default yup.object().shape({
  username: yup
    .string()
    .required("username is required")
    .min(6, "username must be 6 chars long"),
  email: yup.string().email("must be an email").required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "must be 6 chars long"),
  termsofservice: yup.boolean().oneOf([true], "Please accept terms of service"),
});
