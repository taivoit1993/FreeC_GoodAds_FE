import {Button, Card, CardContent, Grid, TextField} from "@mui/material";
import {Box, Stack} from "@mui/system";
import React, {FC} from "react";
import {IFilter} from "../interfaces/filter.interface";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import dayjs, {Dayjs} from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import vi from "date-fns/locale/vi";
import DateFnsUtils from "@date-io/date-fns";
import {es, frCA, ru} from "date-fns/locale";
import MomentUtils from "@date-io/moment";

const FilterComponent: FC<IFilter> = (props) => {
    const [search, setSearch] = React.useState("");
    const [startDate, setStartDate] = React.useState(dayjs());
    const handChangeKey = (event: any) => {
        setSearch(event.target.value);
    };
    const handleSearch = () => {
        props.onSearch?.(search);
    };
    const handleEnterEvent = (e: any) => {
        // e.preventDefault()
        if (e.key === "Enter") {
            props.onSearch?.(search);
        }
    };
    const handleChangeDate = (date: Dayjs) => {
        setStartDate(date);
    };
    return (
        <Card sx={{m: "1rem", p: "0.5rem"}}>
            <CardContent>
                <Box sx={{flexGrow: 1}}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    name="search"
                                    onChange={handChangeKey}
                                    sx={{width: "80%"}}
                                    size="small"
                                    label={props.seachTiltle}
                                    onKeyDown={(e) => handleEnterEvent(e)}
                                />
                                {props.isSearchDate && (
                                    <LocalizationProvider adapterLocale={frCA} dateAdapter={AdapterDayjs}
                                                          utils={MomentUtils}>
                                        <DatePicker
                                            label="Chọn thời gian"
                                            views={['month', 'year']}
                                            inputFormat="MM-YYYY"
                                            value={startDate}
                                            onChange={(newValue: any) => handleChangeDate(newValue)}
                                            renderInput={(params: any) => (
                                                <TextField size="small" {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                )}
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack
                                direction="row-reverse"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                            >
                                {props.onImport && (
                                    <Button
                                        sx={{fontWeight: "600"}}
                                        variant="contained"
                                        onClick={props?.onImport}
                                    >
                                        <AttachFileIcon/>
                                        Tải lên
                                    </Button>
                                )}
                                {props.onExport && (
                                    <Button
                                        sx={{fontWeight: "600"}}
                                        variant="contained"
                                        onClick={props?.onExport}
                                    >
                                        <FileDownloadIcon/>
                                        Xuất Excel
                                    </Button>
                                )}
                                {props.onCreate && (
                                    <Button
                                        sx={{fontWeight: "600"}}
                                        variant="contained"
                                        onClick={props?.onCreate}
                                    >
                                        <AddIcon/>
                                        Add
                                    </Button>
                                )}
                                {props.onSearch && (
                                    <Button
                                        sx={{fontWeight: "600"}}
                                        variant="contained"
                                        onClick={handleSearch}
                                    >
                                        <SearchIcon/>
                                        Search
                                    </Button>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default FilterComponent;
