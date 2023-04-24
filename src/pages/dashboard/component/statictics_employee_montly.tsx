import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';

const StaticticsEmployeeMontly: FC<any> = (props) => {
    return (
        <Card sx={{ m: "1rem", p: "0.5rem" }}>
            <CardContent>
                <Typography variant="h5" mb={3}>{props.title}</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Typography variant='h6'>{props.title1}</Typography>
                        <Typography variant='h4'>{props.details1}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h6'>{props.title2}</Typography>
                        <Typography variant='h4'>{props.details2}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h6'>{props.title3}</Typography>
                        <Typography variant='h4'>{props.details3}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default StaticticsEmployeeMontly;