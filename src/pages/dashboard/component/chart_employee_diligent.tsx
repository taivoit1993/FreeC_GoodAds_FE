import { Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const ChartEmployeeDiligent : FC<any> = (props) => {
    return (
        <Card sx={{ m: "1rem", p: "0.5rem" }}>
            <CardContent>
                <Typography variant="h5" mb={3}>{props.title}</Typography>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false}/>
                        <Tooltip formatter={((value, name, props) => [value,"Nhân viên"])} />
                        {/*<Legend />*/}
                        <Bar dataKey="number" fill="#34ac92" />
                        {/*<Bar name={"Nghỉ Việc"} dataKey="absent" fill="#82ca9d" />*/}
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default ChartEmployeeDiligent;