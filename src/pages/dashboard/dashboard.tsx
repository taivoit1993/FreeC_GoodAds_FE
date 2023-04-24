import {Box, Button, Card, CardContent, Grid, Stack, TextField, Typography} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";

import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import React from "react";
import ChartEmployeeDiligent from "./component/chart_employee_diligent";
import StaticticsEmployeeMontly from "./component/statictics_employee_montly";
import {useQuery} from "react-query";


const Dashboard = () => {

    const [day, setDay] = React.useState(dayjs() as (Dayjs | null));
    const [dashboard, setDashboard] = React.useState({} as any);
    // const {refetch, isLoading} = useQuery({
    //     queryKey: ["getDashboard", day],
    //     queryFn: () => getDashboard({
    //         params: {
    //             date: day?.toISOString(),
    //         }
    //     }),
    //     onSuccess: (data) => {
    //         console.log(data);
    //         setDashboard(data.data);
    //     },
    // });
    return (
        <>
            {/* Begin Dashboard filter */}
            <Card sx={{m: "1rem", p: "0.5rem"}}>
                <CardContent>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack direction="row" spacing={2}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label=""
                                            inputFormat="DD/MM/YYYY"
                                            value={day}
                                            onChange={(newValue) => {
                                                setDay(newValue)
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    {/*<Button variant="contained">*/}
                                    {/*    Xem*/}
                                    {/*</Button>*/}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
            {/* End dashboard filter */}

            {/* Begin Statictics Employee */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <StaticticsEmployeeMontly
                        title={"Thông kê nhân viên tháng " + (day?.toDate().getMonth() ?  day?.toDate().getMonth() + 1 : '')}
                        title1={"Tổng số nhân viên"}
                        details1={dashboard?.statistic_users?.Total | 0}
                        title2={"Nhân viên công ty"}
                        details2={dashboard?.statistic_users?.Working | 0}
                        title3={"Nhân viên thời vụ"}
                        details3={dashboard?.statistic_users?.Probation | 0}
                    >
                    </StaticticsEmployeeMontly>
                </Grid>
                <Grid item xs={6}>
                    <StaticticsEmployeeMontly
                        title={"Tình trạng chấm công trong ngày " + day?.format('DD/MM/YYYY')}
                        title1={"Bình thường"}
                        details1={dashboard?.statistics_attendance?.Normal | 0}
                        title2={"Đi trễ"}
                        details2={dashboard?.statistics_attendance?.Late | 0}
                        title3={"Về sớm"}
                        details3={dashboard?.statistics_attendance?.Early | 0}
                    >
                    </StaticticsEmployeeMontly>
                </Grid>
            </Grid>
            {/* End Statictics Employee */}


            {/* Begin Chart */}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ChartEmployeeDiligent
                        title={"Biểu đồ biến động nhân sự tháng " + (day?.toDate().getMonth() ?  day?.toDate().getMonth() + 1 : '')}
                        data={dashboard.chart_users}
                    ></ChartEmployeeDiligent>
                </Grid>
                {/*<Grid item xs={6}>*/}
                {/*    <ChartEmployeeDiligent*/}
                {/*        title="Tình trạng chuyên cần theo phòng ban ngày 12/9/2022"*/}
                {/*        data={dashboard.chart_users}*/}
                {/*    ></ChartEmployeeDiligent>*/}
                {/*</Grid>*/}
            </Grid>
            {/* End Chart */}
            {/* Begin List employee absent */}
            <Card sx={{m: "1rem", p: "0.5rem"}}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{mt: 3}}>{"Danh sách nhân viên vắng mặt trong ngày " +  day?.format('DD/MM/YYYY')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <table className="table-custom">
                                <tbody>
                                <tr>
                                    <th rowSpan={2}>STT</th>
                                    <th rowSpan={2} scope="col">Mã BP</th>
                                    <th rowSpan={2} scope="col">Họ tên</th>
                                    <th rowSpan={2} scope="col">MSNV</th>
                                    <th rowSpan={2} scope="col">Lý do</th>
                                    <th colSpan={2} scope="col">Có phép</th>
                                    <th colSpan={2} scope="col">Ko phép</th>
                                    <th colSpan={2} scope="col">Tổng cộng</th>
                                    <th colSpan={3} rowSpan={2} scope="col">Ghi chú</th>
                                </tr>

                                <tr>
                                    <th>cty</th>
                                    <th>TV</th>
                                    <th>cty</th>
                                    <th>TV</th>
                                    <th>Cộng</th>
                                    <th>Sn lũy tiến</th>
                                </tr>
                                <tr style={{background: "#eee"}}>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td colSpan={3}>12</td>
                                </tr>
                                {
                                    dashboard.absentee_list?.map((item: any, index: number) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td>{item.department.code}</td>
                                                <td>{item.name}</td>
                                                <td>{item.msnv}</td>
                                                <td>{item.leave_manager.length > 0 ? item.leave_manager[0].reason : ''}</td>
                                                <td>{item.leave_manager.length > 0 ? 1 : ''}</td>
                                                <td>0</td>
                                                <td>{item.leave_manager.length > 0 ? '' : 1}</td>
                                                <td>0</td>
                                                <td></td>
                                                <td></td>
                                                <td>{item.leave_manager.length > 0 ? item.leave_manager[0].note : ''}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
            {/* End List employee absent */}

        </>

    );
}
    ;

    export default Dashboard;
