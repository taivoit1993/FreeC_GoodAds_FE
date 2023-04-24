import { IKit } from "./kit.interface"

export interface ICreateDialog{
  open: boolean
  data?: any
  isEdit: boolean
  onclose: () => void
  onCreate: (data: any) => void
  loading: boolean

  isAllowance? : boolean
}