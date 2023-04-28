import * as Yup from "yup";
export const CreateAdValidation = Yup.object({
  head_line_1: Yup.string().required(),
  head_line_2: Yup.string().required(),
  head_line_3: Yup.string().required(),
  description_1: Yup.string().required(),
  description_2: Yup.string().required(),
  status: Yup.string().required(),
});
