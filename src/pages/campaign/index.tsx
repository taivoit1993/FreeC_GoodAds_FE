import {Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import WrapperTableComponent from '../../components/wrapper-table.component';
import {useQuery} from "react-query";
import {getCampaign} from "../../ApiService/campaign.api";
import {campaignColumn} from "./properties/properties";
import {IColumn} from "../../interfaces/wrapper-table.interface";

const columns: IColumn[] = campaignColumn;
const Campaigns = () => {
    document.title = "Google Ad Campaign Manager";
    const [campaign, setCampaign] = React.useState([]);

    const handleChangePage = (newPage: number) => {
        // setPage(newPage);
    }

    const handleChangeRowsPerPage = (value: number) => {
        // setRowsPerPage(value);
        // setPage(0);
    }

    const handleView = (id: number) => {

    }

    const openConfirmDelete = (id: number) => {

    }

    //API get list annual-leave
    const { isLoading, refetch } = useQuery({
        queryKey: ["getCampaign"],
        queryFn: () => getCampaign({ params: { } }),
        onSuccess: (data) => {
            setCampaign(data.data);
           console.log(data.data);
        },
    });
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ m: "1rem", p: "0.5rem" }}>
                        <CardContent>
                            <WrapperTableComponent
                                columns={columns}
                                rows={campaign}
                                loading={isLoading}
                                meta={null}
                                onChangePage={handleChangePage}
                                onChangeRowPerPage={handleChangeRowsPerPage}
                                onView={handleView}
                                onDelete={openConfirmDelete}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/*{open && (*/}
            {/*    <CreateSettingDayLeave*/}
            {/*        open={open}*/}
            {/*        onclose={() => setOpen(false)}*/}
            {/*        onCreate={onCreate}*/}
            {/*        loading={isLoading}*/}
            {/*        data={annualLeave}*/}
            {/*        isEdit={isEdit}*/}
            {/*    />*/}
            {/*)}*/}


            {/*<ConfirmDialogComponent*/}
            {/*    open={isConfirmDelete}*/}
            {/*    title={"Bạn chắc chắn muốn xóa?"}*/}
            {/*    onClose={() => setConfirmDelete(false)}*/}
            {/*    onConfirm={handleDelete}*/}
            {/*/>*/}
        </>
    );
};

export default Campaigns;