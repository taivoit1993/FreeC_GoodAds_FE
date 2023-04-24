import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const NotificationSwal = withReactContent(Swal)
export const showSuccessNotification = (value: string) => {
    return (
        NotificationSwal.fire({
            icon: "success",
            title: 'Thông báo',
            text: `${value}`,
            confirmButtonColor: "#34AC92"
        })
    )
};
export const showErrorNotification = (value: string) => {
    return (
        NotificationSwal.fire({
            icon: "error",
            title: 'Thông báo',
            text: `${value}`,
            confirmButtonColor: "#34AC92"
        })
    )
};


