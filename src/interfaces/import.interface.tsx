export interface IImportDialog{
  open: boolean,
  title: string,
  onDownload: () => void
  onClose: () => void
  onConfirm: (file:any) => void
}