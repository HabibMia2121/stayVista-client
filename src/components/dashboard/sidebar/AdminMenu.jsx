import { FaUserCog } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={FaUserCog}
                label='Manage user'
                address='/dashboard/manageUser'
            />
        </>
    );
};

export default AdminMenu;