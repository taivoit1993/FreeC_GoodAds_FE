import {IColumn} from "../../../interfaces/wrapper-table.interface";


export const campaignColumn: IColumn[] = [
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
        id: "name",
        label: "Name",
        minWidth: 150,
    },
    {
        id: "amount_micros",
        label: "Amount Micros",
        minWidth: 150,

    },
    {
        id: "average_cpc",
        label: "Average CPC",
        minWidth: 150,

    },
    {
        id: "clicks",
        label: "Clicks",
        minWidth: 150,
    },
    {
        id: "cost_micros",
        label: "Cost Micros",
        minWidth: 150,
    },
    {
        id: "impressions",
        label: "Impressions",
        minWidth: 150,

    },
    {
        id: "start_date",
        label: "Start Date",
        minWidth: 150,
    },
    {
        id: "end_date",
        label: "End Date",
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