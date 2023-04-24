export interface IFilter {
  seachTiltle: string;
  onSearch?: (search: any) => void;
  onCreate?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  isSearchDate?: boolean;
}
export interface IFilterMultiField extends IFilter {
  onRefresh?: () => void;
  component: string;
}