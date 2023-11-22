/* eslint-disable react/prop-types */
import Heading from "../Shared/Heading";

const Header = ({ room }) => {
    return (
        <div>
            {/* Header title */}
            <Heading title={room?.title} subtitle={room?.location} />

            {/* room details data */}
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl mt-5'>
                <img
                    className='object-cover w-full'
                    src={room?.image}
                    alt='header image'
                />
            </div>
        </div>
    );
};

export default Header;