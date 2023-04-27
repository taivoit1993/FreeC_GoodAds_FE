import * as Yup from "yup";
export const CreateCampaignValidation = Yup.object({
  name: Yup.string().required(),
  amount_micros: Yup.number().required()
});
