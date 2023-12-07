import { MdFingerprint } from "react-icons/md";
import MenuItem from "./MenuItem";

const GuestMenu = () => {
    return (
        <>
            <MenuItem
                icon={MdFingerprint}
                label='My Bookings'
                address='/dashboard/myBookings'
            />
        </>
    );
};

export default GuestMenu;