export interface IImportValidateDialog{
    open: boolean,
    title: string,
    row: any,
    column: any,

    onClose: () => void
    onImport: (data:any) => void
}