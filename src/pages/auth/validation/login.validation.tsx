import * as Yup from 'yup';
export const CreateUserValidation = Yup.object({
  // email: Yup.string()
  //       .email("Email không đúng format")
  //       .required("Email đăng nhập không được để trống"),
  // password: Yup.string()
  //       .min(3,"Mật khẩu ít nhất 3 ký tự")
  //       .required("Mật khẩu không được để trống"),
})