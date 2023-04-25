import {Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import WrapperTableComponent from '../../components/wrapper-table.component';
import {useQuery} from "react-query";
import {getCampaign} from "../../ApiService/campaign.api";

const Campaigns = () => {
    document.title = "Google Ad Campaign Manager";

    //API get list annual-leave
    const { isLoading, refetch } = useQuery({
        queryKey: ["getAllAnnualLeaves"],
        queryFn: () => getCampaign({ params: { } }),
        onSuccess: (data) => {
           console.log(data);
        },
    });
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card sx={{ m: "1rem", p: "0.5rem" }}>
                        <CardContent>
                            {/*<WrapperTableComponent*/}
                            {/*    columns={columns}*/}
                            {/*    rows={annualLeaves}*/}
                            {/*    loading={isLoading}*/}
                            {/*    meta={meta}*/}
                            {/*    onChangePage={handleChangePage}*/}
                            {/*    onChangeRowPerPage={handleChangeRowsPerPage}*/}
                            {/*    onView={handleView}*/}
                            {/*    onDelete={openConfirmDelete}*/}
                            {/*/>*/}
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