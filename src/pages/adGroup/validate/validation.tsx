import * as Yup from "yup";
export const CreateAdGroupValidation = Yup.object({
  name: Yup.string().required(),
  cpc_bid_micros: Yup.number().required(),
  status: Yup.string().required(),
  campaign_id: Yup.string().required(),
});
