import {IKit} from "./kit.interface";

export interface IColumn {
    id: string;
    label: string;
    properties?: string;
    minWidth?: number;
    align?: 'right';
    increase?: boolean;
    format?: (value: number) => string;
    highlight?: (value: string) => string;
    convertDateTime?: (value: string) => string
    formatBeneficiary?: (value: number, is_percentage: boolean) => string
}

export interface IPagination {
    total: number,
    count: number,
    per_page: number,
    current_page: number,
    total_pages: number,
    links: {
        previous?: string,
        next?: string
    }
}

export interface IWrapperTable {
    columns: IColumn[],
    rows: IKit[],
    meta: {
        current_page?: number,
        from?: number,
        to?: number,
        last_page?: number,
        per_page?: number,
        total?: number,
        pagination?: IPagination
    } | null
    loading: boolean,
    onChangePage?: (page: number) => void
    onChangeRowPerPage?: (rowPerPage: number) => void
    onPrint?: (index: number) => void
    onView?: (index: number) => void
    onDetails?: (index: number) => void
    onEdit?: (index: number) => void
    onDelete?: (index: number, optional?: number) => void
    onChangeStatus?: (index: number, status: string) => void
    onUploadImage?: (row: IKit) => void
    onAttendance?: (index: number) => void
    onExport?: (index: number) => void
    onBenefit?: (index: number) => void
    onDeleteBenefit?: (index: number) => void
}