import * as Yup from "yup";
export const CreateCampaignValidation = Yup.object({
  name: Yup.string().required(),
  status: Yup.string().required(),
  condition_paid: Yup.string().required("Điều kiện có lương không được để trống"),
  source_paid: Yup.string().required("Trả lương không được để trống"),
});
