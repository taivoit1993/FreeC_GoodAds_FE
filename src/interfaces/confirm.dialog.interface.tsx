export interface IConfirmDialog{
  open: boolean,
  title: string,
  onClose: () => void
  onConfirm: () => void
}