import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../components/roomDetails/Header";
import RoomInfo from "../../components/roomDetails/RoomInfo";
import RoomReservation from "../../components/roomDetails/RoomReservation";

const RoomDetails = () => {
    const rooms = useLoaderData();

    return (
        <Container>
            {/* meta tags */}
            <Helmet>
                <title>StayVista | {rooms.title}</title>
            </Helmet>

            {/* room info main content here */}
            <div className=" max-w-screen-md mx-auto">
                <div className="flex flex-col gap-6">
                    <Header room={rooms} />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-7 gap-4 mt-12 mb-7">
                    {/* room info part */}
                    <RoomInfo roomInfo={rooms} />

                    {/* room reservation and calender part */}
                    <div className=" md:col-span-3 order-first md:order-last">
                        {/*room reservation  here */}
                        <RoomReservation
                            room={rooms}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;