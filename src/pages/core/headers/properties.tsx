import PersonIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import CategoryIcon from '@mui/icons-material/Category';

export const HeaderPage = [
    {
        url: "dashboard",
        label: "Dashboard",
        highlight: false,
    },
    {
        url: "item",
        label: "Quản lý mẫu",
        hightlight: false
    },
    {
        url: "category",
        label: "Kho lưu trữ",
        hightlight: false,
    },
    {
        url: "users",
        label: "Users",
        hightlight: false
    },
    {
        url: "unit",
        label: "Đơn vị tính",
        hightlight: false
    }
]

export const SideBar = [
    {
        url: "Dashboard",
        label: "Dashboard",
        icon: <DashboardIcon/>,
        hightlight: false
    },
    {
        url: "users",
        label: "Nhân viên",
        icon: <PersonIcon/>,
        hightlight: false
    },
    {
        label: "Chấm công",
        icon: <SyncAltIcon/>,
        hightlight: false,
        subMenu: [
            {
                url: "total-monthly-work",
                label: "Bảng tổng công",
                hightlight: false
            },
            {
                url: "time-keeping",
                label: "Chấm công",
                hightlight: false
            },
            {
                url: "leave-management",
                label: "Quản lý nghỉ phép",
                hightlight: false
            }
        ]
    },

    {
        label: "Bảng lương",
        icon: <AttachMoneyIcon/>,
        subMenu: [
            // {
            //     url: "payrun",
            //     label: "Tạo bảng lương",
            // }
            {
                url: "monthly-salary-sheet",
                label: "Bảng lương tháng",
                hightlight: false
            },
            {
                url: "advance-salary",
                label: "Lương tạm ứng",
                hightlight: false
            }
        ]
    },
    {
        url: "report",
        label: "Báo cáo",
        icon: <AssessmentIcon/>,
        hightlight: false

    },
    {
        url: "insurance",
        label: "Quản lý BHXH",
        icon: <ReceiptLongIcon/>,
        hightlight: false
    },
    {
        label: "Danh mục",
        icon: <CategoryIcon/>,
        hightlight: false,
        subMenu: [
            {
                url: "departments",
                label: "Phòng ban",
                hightlight: false
            },
            {
                url: "designations",
                label: "Chức vụ",
                hightlight: false
            },
            {
                url: "setting-day-leave",
                label: "Loại phép",
                hightlight: false
            },
            {
                url: "setting-salary-type",
                label: "Loại lương",
                hightlight: false
            },
            {
                url: "setting-contract-type",
                label: "Loại hợp đồng",
                hightlight: false
            },
            {
                url: "setting-labor-supplier",
                label: "Nhà cung ứng lao động",
                hightlight: false
            },
            {
                url: "setting-allowance",
                label: "Phụ cấp - trợ cấp",
                hightlight: false
            },
            {
                url: "setting-deduct",
                label: "Các khoản khấu trừ",
                hightlight: false
            }
        ]
    },
    {
        label: "Hệ thống",
        icon: <SettingsSuggestIcon/>,
        subMenu: [
            {
                url: "hour-interest",
                label: "Hệ số giờ công",
                hightlight: false
            }, {
                url: "working-shift",
                label: "Ca làm việc",
                hightlight: false
            },
            {
                url: "holiday",
                label: "Nghỉ lễ",
                hightlight: false
            }
        ]
    },
    {
        label: "Phân quyền",
        icon: <ColorLensIcon/>,
        hightlight: false,
        subMenu: [
            {
                url: "role",
                label: "Vai trò",
                hightlight: false
            },
            {
                url: "permission",
                label: "Cấp quyền",
                hightlight: false
            }
        ]
    }

]