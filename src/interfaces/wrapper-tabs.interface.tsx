import { IWrapperTable } from "./wrapper-table.interface";

export interface ITabs{
  label: string,
  index: number,
  code: string | null
}

export interface IWrapperTabs{
  tables: IWrapperTable,
  tabs: ITabs[],
  index: string | null,
  onChangeIndex: (value: string) => void 
}