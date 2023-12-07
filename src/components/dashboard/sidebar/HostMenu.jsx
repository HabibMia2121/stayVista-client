import MenuItem from "./MenuItem";
import { BsFillHouseAddFill } from "react-icons/bs";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { MdManageHistory } from "react-icons/md";


const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsFillHouseAddFill}
                label='Add Room'
                address='/dashboard/addRoom'
            />
            <MenuItem
                icon={BiSolidBuildingHouse}
                label='My Listings'
                address='/dashboard/myListings'
            />
            <MenuItem
                icon={MdManageHistory}
                label='Manage Bookings'
                address='/dashboard/manageBookings'
            />
        </>
    );
};

export default HostMenu;