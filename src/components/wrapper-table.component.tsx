import {
    Button,
    Fade,
    LinearProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Tooltip,
} from "@mui/material";
import React, {FC} from "react";
import {IKit} from "../interfaces/kit.interface";
import {IWrapperTable} from "../interfaces/wrapper-table.interface";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import UploadIcon from '@mui/icons-material/Upload';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Add from "@mui/icons-material/Add";

const WrapperTableComponent: FC<IWrapperTable> = (props) => {
    const handleChangePage = (event: unknown, newPage: number) => {
        props.onChangePage?.(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        props.onChangeRowPerPage?.(+event.target.value);
    };

    const handlePrint = (row: IKit) => {
        props.onPrint?.(row.id || 0);
    };

    const handleView = (row: IKit) => {
        props.onView?.(row.id || 0);
    };

    const handleDetails = (row: IKit) => {
        props.onDetails?.(row.id || 0);
    }

    const handleChangeStatus = (row: IKit) => {
        props.onChangeStatus?.(row.id || 0, "COMPLETED");
    };

    const handleUploadImage = (row: IKit) => {
        props.onUploadImage?.(row);
    }

    const handleAttendance = (row: IKit) => {
        props.onAttendance?.(row.id || 0);
    }

    const handleExport = (row: IKit) => {
        props.onExport?.(row.id || 0);
    }

    const handleDelete = (row: IKit) => {
        props.onDelete?.(row.id || 0, row.ad_group_id || 0);
    }
    const handleBenefit = (row: any) => {
        props.onBenefit?.(row);
    }
    const handleDeleteBenefit = (row: any) => {
        props.onDeleteBenefit?.(row.benefit_id);
    }
    const getValue = (array: Array<any>, obj: any) => {
        let desired = obj;
        while (array.length > 0) {
            desired = desired[array[0]];
            array.shift();
        }
        return desired;
    }
    return (
        <Paper sx={{width: "100%"}}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow sx={{backgroundColor: "#34ac92"}}>
                            {props.columns?.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{
                                        fontWeight: "600",
                                        minWidth: column.minWidth,
                                        backgroundColor: "#34ac92",
                                        color: "white"
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows?.map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{color: "red !important" }}>
                                    {props.columns?.map((column) => {
                                        {
                                            if (column.id === 'action') {
                                                return (
                                                    <TableCell key={column.id}>
                                                        {props.onPrint && (
                                                            <Button sx={{minWidth: "auto"}}
                                                                    onClick={(e) => handlePrint(row)}>
                                                                <PrintIcon/>
                                                            </Button>
                                                        )}
                                                        {props.onView && (
                                                            <Tooltip title="Chỉnh sửa">
                                                                <Button sx={{minWidth: "auto"}}
                                                                        onClick={(e) => handleView(row)}>
                                                                    <EditIcon
                                                                        color="secondary"
                                                                    />
                                                                </Button>
                                                            </Tooltip>
                                                        )}
                                                        {props.onDetails && (
                                                            <Tooltip title="Chi tiết">
                                                                <Button sx={{minWidth: "auto"}}
                                                                        onClick={(e) => handleDetails(row)}>
                                                                    <VisibilityIcon
                                                                        color="secondary"
                                                                    />
                                                                </Button>
                                                            </Tooltip>
                                                        )}
                                                        {props.onChangeStatus && (
                                                            <Button
                                                                onClick={(e) => handleChangeStatus(row)}
                                                                sx={{minWidth: "auto"}}
                                                                disabled={row["status"] === "REMOVED" ? true : false}
                                                            >
                                                                <CheckIcon color="success"/>
                                                            </Button>
                                                        )}
                                                        {props.onUploadImage && (
                                                            <Button
                                                                onClick={(e) => handleUploadImage(row)}
                                                                sx={{minWidth: "auto"}}
                                                            >
                                                                <UploadIcon color="success"/>
                                                            </Button>
                                                        )}
                                                        {props.onAttendance && (
                                                            <Tooltip title="CheckIn / CheckOut">
                                                                <Button
                                                                    onClick={(e) => handleAttendance(row)}
                                                                    sx={{minWidth: "auto"}}>
                                                                    <AddAlarmIcon/>
                                                                </Button>
                                                            </Tooltip>
                                                        )}
                                                        {props.onExport && (
                                                            <Tooltip title="Xuất bảng lương">
                                                                <Button
                                                                    onClick={(e) => handleExport(row)}
                                                                    sx={{minWidth: "auto"}}
                                                                    disabled={row["status"] === "INIT" ? false : true}>
                                                                    <DownloadIcon/>
                                                                </Button>
                                                            </Tooltip>
                                                        )}
                                                        {
                                                            props.onDelete && (
                                                                <Tooltip title="Xóa">
                                                                    <Button
                                                                        onClick={(e) => handleDelete(row)}
                                                                        sx={{minWidth: "auto"}}
                                                                        disabled={row["status"] === "REMOVED" ? true : false}>
                                                                        <DeleteIcon color="error"/>
                                                                    </Button>
                                                                </Tooltip>
                                                            )
                                                        }
                                                        {
                                                            props.onDeleteBenefit && (
                                                                <Tooltip title="Xóa">
                                                                    <Button
                                                                        onClick={(e) => handleDeleteBenefit(row)}
                                                                        sx={{minWidth: "auto"}}>
                                                                        <DeleteIcon color="error"/>
                                                                    </Button>
                                                                </Tooltip>
                                                            )
                                                        }
                                                        {
                                                            props.onBenefit && (
                                                                <Tooltip title="Thêm phụ cấp, trợ cấp">
                                                                    <Button
                                                                        onClick={(e) => handleBenefit(row)}
                                                                        sx={{minWidth: "auto"}}>
                                                                        <Add color="primary"/>
                                                                    </Button>
                                                                </Tooltip>
                                                            )
                                                        }
                                                    </TableCell>
                                                )
                                            } else {
                                                let array = column.id.split(".");
                                                const value = getValue(array, row);

                                                return (
                                                    <TableCell key={column.id} align={column.align} sx={{textOverflow: "ellipsis", whiteSpace: "nowrap",
                                                        color: (row["error"] && row["error"].length > 0) ? "red": "black"}}>
                                                        {
                                                            column.highlight && typeof value === "string" ? (
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: column.highlight(value),
                                                                    }}
                                                                ></div>
                                                            ) : column.convertDateTime &&
                                                            typeof value === "string" ? (
                                                                column.convertDateTime(value)
                                                            ) : column.format &&
                                                            typeof value === "number" ? (
                                                                column.format(value)
                                                            ) : column.formatBeneficiary && typeof value === "number" ? (
                                                                    column.formatBeneficiary(value, row['is_percentage'])
                                                                )
                                                                : column.increase ? (
                                                                    index + 1
                                                                ) : (
                                                                    value
                                                                )}
                                                    </TableCell>
                                                );
                                            }
                                        }
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <Fade
                    in={props.loading}
                    style={{
                        transitionDelay: props.loading ? "100ms" : "0ms",
                    }}
                    unmountOnExit
                >
                    <LinearProgress/>
                </Fade>
            </TableContainer>
            {props.meta && (
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={props.meta?.pagination?.total || 0}
                    rowsPerPage={props.meta?.pagination?.per_page || 10}
                    labelRowsPerPage={"Số dòng mỗi trang"}
                    page={
                        props.meta?.pagination?.current_page
                            ? props.meta?.pagination?.current_page - 1
                            : 0
                    }
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}

        </Paper>
    );
};

export default WrapperTableComponent;
