import {Stack, Tab, Tabs} from "@mui/material";
import {Box} from "@mui/system";
import React, {FC} from "react";
import {ITabs, IWrapperTabs} from "../interfaces/wrapper-tabs.interface";
import WrapperTableComponent from "./wrapper-table.component";
import * as _ from "lodash";
import {grey} from "@mui/material/colors";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{width: "100%"}}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const WrapperTabsComponent: FC<IWrapperTabs> = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        let temp = _.find(props.tabs, function (o: ITabs) {
            return o.index === newValue;
        });
        props.onChangeIndex(temp?.code || '');
    };
    return (
        <Box sx={{width: "100%"}}>
            <Tabs
                sx={{background: grey[200]}}
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
            >
                {props.tabs?.map((tab) => (
                    <Tab sx={{fontWeight: 600}} key={tab.index} label={tab.label} {...a11yProps(tab.index)} />
                ))}
            </Tabs>
            {props.tabs?.map((tab) => (
                <TabPanel key={tab.index} value={value} index={tab.index}>
                    <Stack direction="row">
                        <WrapperTableComponent
                            columns={props.tables.columns}
                            rows={props.tables.rows}
                            loading={props.tables.loading}
                            meta={props.tables.meta}
                            onChangePage={props.tables.onChangePage}
                            onChangeRowPerPage={props.tables.onChangeRowPerPage}
                            onPrint={props.tables.onPrint}
                            onView={props.tables.onView}
                            onChangeStatus={props.tables.onChangeStatus}
                            onUploadImage={props.tables.onUploadImage}
                            onAttendance={props.tables.onAttendance}
                            onDelete={props.tables.onDelete}
                        />
                    </Stack>
                </TabPanel>
            ))}
        </Box>
    );
};

export default WrapperTabsComponent;
