export interface IConfirmUploadDialog{
  open: boolean,
  title: string,
  data?: any,
  onClose: () => void
  onConfirm: () => void
}