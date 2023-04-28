import {IColumn} from "../../../interfaces/wrapper-table.interface";


export const addColumn: IColumn[] = [
    {
        id: "stt",
        label: "#",
        minWidth: 30,
        increase: true,
    },
    {
        id: "id",
        label: "Id",
        minWidth: 150,
    },
    {
        id: "ad_group_id",
        label: "Ad Group Id",
        minWidth: 150,
    },
    {
        id: "head_line_1",
        label: "Healine 1",
        minWidth: 150,
    },
    {
        id: "head_line_2",
        label: "HeadLine 2",
        minWidth: 150,
    },
    {
        id: "head_line_3",
        label: "HeadLine 3",
        minWidth: 150,
    },
    {
        id: "description_1",
        label: "Description 1",
        minWidth: 150,
    },
    {
        id: "description_2",
        label: "Description 2",
        minWidth: 150,
    },
    {
        id: "status",
        label: "Status",
        minWidth: 150,
        highlight: (value: string) => {
            if (value === "UNSPECIFIED") {
                return `<span class='campaign-container__unspecified'>` + value + `</span>`;
            } else if (value === "UNKNOWN") {
                return (
                    `<span class='campaign-container__unknown'>` + value + `</span>`
                );
            } else if (value === "ENABLED") {
                return (
                    `<span class='campaign-container__enabled'>` + value + `</span>`
                );
            } else if (value === "PAUSED") {
                return (
                    `<span class='campaign-container__paused'>` + value + `</span>`
                );
            } else if (value === "REMOVED") {
                return (
                    `<span class='campaign-container__removed'>` + value + `</span>`
                );
            }
            return value;
        }
    },
    {
        id: "action",
        label: "",
        minWidth: 150
    }
]