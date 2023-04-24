export interface IUploadDialog{
  id?: number
  files?:[]
  open: boolean,
  onUpload?: (file: any) => string
  onClose: () => void
  onSave: (id: number,data: any[]) => void
}