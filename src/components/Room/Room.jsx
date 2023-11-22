import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";

const Room = () => {
    const [room, setRoom] = useState([]);
    const [params, setParams] = useSearchParams();
    const [loading, setLoading] = useState(true)
    const category = params.get('category');

    useEffect(() => {
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filter = data.filter(roomItem => roomItem.category == category);
                    setRoom(filter)
                }
                else setRoom(data);
                setLoading(false);
            })
    }, [category])

    if (loading) {
       return <Loader/>
    }

    return (
        <Container>
            {room && room.length > 0 ? <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {
                    room.map(roomData => <Card
                        key={roomData._id}
                        roomData={roomData}
                    />)
                }
            </div>
                : <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                    <Heading
                        center={true}
                        title={'No Rooms Available In This Category'}
                        subtitle={'Please selected other categories'}
                    /> 
                </div>
            
            }
            
        </Container>
    );
};

export default Room;