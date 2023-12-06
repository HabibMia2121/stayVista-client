import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../../components/form/AddRoomForm";
import { useState } from "react";
import { ImageUpload } from "../../../../api/utils";
import useAuth from "../../../../hooks/useAuth";
import { addRoom } from "../../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image ')
    const navigate = useNavigate();


    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key:'selection'
    })

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const total_guest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const image = form.image.files[0];

        // host data
        const host = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL
        }
        // image upload here
        const imageUrl = await ImageUpload(image);

        // roomData store in database
        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            total_guest,
            bedrooms,
            bathrooms,
            description,
            host,
            image: imageUrl?.data?.display_url
        }

        try {
            const data = await addRoom(roomData);
            console.log(data);
            setUploadButtonText('Uploaded!');
            toast.success('Room added successfully!');
            navigate('/dashboard/myListings');

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
        finally {
            setLoading(false);
        }
        // console.table(roomData);
    }



    // handleDates here
    const handleDates = ranges => {
        setDates(ranges.selection)
    }
    // handle image button text change
    const handleImageChange = (image) => {
        setUploadButtonText(image?.name)
    }

    return (
        <div>
            {/* website name title */}
            <Helmet>
                <title>Dashboard | Add Room </title>
            </Helmet>

            {/* add room here */}
            <AddRoomForm
                handleSubmit={handleSubmit}
                handleDates={handleDates}
                dates={dates}
                handleImageChange={handleImageChange}
                loading={loading}
                uploadButtonText={uploadButtonText}
            />
        </div>
    );
};

export default AddRoom;