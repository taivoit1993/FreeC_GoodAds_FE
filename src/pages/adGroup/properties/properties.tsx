import {IColumn} from "../../../interfaces/wrapper-table.interface";


export const addGroupColumn: IColumn[] = [
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
        id: "campaign_id",
        label: "Campaign Id",
        minWidth: 150,
    },
    {
        id: "name",
        label: "Name",
        minWidth: 150,
    },
    {
        id: "cpc_bid_micros",
        label: "CPC Bid Micros",
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