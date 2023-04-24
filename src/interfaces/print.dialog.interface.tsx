export interface IPrintDialog{
  open: boolean,
  barCode: any,
  count: number,
  onclose: () => void
  onPrint?:() => void
}