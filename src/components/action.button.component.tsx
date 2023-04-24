import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AddCardIcon from '@mui/icons-material/AddCard';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
interface IActionButtonProps {
    component: string
    onSearch?: () => void;
    onCreate?: () => void;
    onExport?: () => void;
    onImport?: () => void;
    onRefresh?: () => void;
}

const ActionButton: React.FC<IActionButtonProps> = (props) => {
    return (
        <>
            {
                props.component === "TotalMonthlyWork" && (
                    <>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onSearch}
                            >
                                <SearchIcon />
                                Tìm kiếm
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onRefresh}
                            >
                                <AutorenewIcon />
                                Làm mới
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            mt={2}
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onExport}
                            >
                                <FileDownloadIcon />
                                Xuất Excel
                            </Button>
                        </Stack>
                    </>
                )
            }
            {
                props.component === "TimeKeeping" && (
                    <>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onSearch}
                            >
                                <SearchIcon />
                                Tìm kiếm
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onRefresh}
                            >
                                <AutorenewIcon />
                                Làm mới
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            mt={2}
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onImport}
                            >
                                <AttachFileIcon />
                                Import
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onExport}
                            >
                                <FileDownloadIcon />
                                Xuất Excel
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                            mt={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onCreate}
                            >
                                <DriveFileRenameOutlineIcon />
                                Chấm công tay
                            </Button>
                        </Stack>
                    </>
                )
            }
            {
                props.component === "LeaveManagement" && (
                    <>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onSearch}
                            >
                                <SearchIcon />
                                Tìm kiếm
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onCreate}
                            >
                                <AddIcon />
                                Thêm đơn nghỉ
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            mt={2}
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onImport}
                            >
                                <AttachFileIcon />
                                Import
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onExport}
                            >
                                <FileDownloadIcon />
                                Xuất Excel
                            </Button>
                        </Stack>
                    </>
                )
            }
            {
                props.component === "AdvanceSalary" && (
                    <>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onSearch}
                            >
                                <SearchIcon />
                                Tìm kiếm
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onCreate}
                            >
                                <AddIcon />
                                Thêm mới
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            mt={2}
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onExport}
                            >
                                <FileDownloadIcon />
                                Xuất dữ liệu
                            </Button>
                        </Stack>
                    </>
                )
            }
            {
                props.component === "MonthlySalarySheet" && (
                    <>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onSearch}
                            >
                                <SearchIcon />
                                Tìm kiếm
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onRefresh}
                            >
                                <AutorenewIcon />
                                Làm mới
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onCreate}
                            >
                                <AddIcon />
                                Tạo bảng lương
                            </Button>
                        </Stack>
                    </>
                )
            }
            {
                props.component === "Payrun" && (
                    <>
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                            // onClick={props?.handleSearch}
                            >
                                <SearchIcon />
                                Tìm kiếm
                            </Button>
                            <Button
                                sx={{ fontWeight: "600" }}
                                variant="contained"
                                onClick={props?.onCreate}
                            >
                                <AddCardIcon />
                                Thẻ lương
                            </Button>
                        </Stack>
                    </>
                )
            }
        </>
    )
};

export default ActionButton;
