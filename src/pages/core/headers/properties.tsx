import CampaignIcon from '@mui/icons-material/Campaign';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
export const SideBar = [
    {
        url: "campaigns",
        label: "campaign",
        icon: <CampaignIcon/>,
        hightlight: false
    },
    {
        url: "ad-groups",
        label: "AdGroup",
        icon: <GroupWorkIcon/>,
        hightlight: false
    },
    {
        url: "ads",
        label: "Ads",
        icon: <AdsClickIcon/>,
        hightlight: false,
    }
]