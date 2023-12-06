/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosSecure from "../hooks/useAxiosSecure";

const axiosSecure = useAxiosSecure();

// get all rooms api here
export const getAllRooms = async () => {
    const {
        data
    } = await axiosSecure.get('/rooms')
    return data;
}

// get single room api here
export const getRoom = async (id) => {
    const { data } = await axiosSecure.get(`/rooms/${id}`)
    return data;
}

// add room data save in database
export const addRoom = async (roomData) => {
    const { data } = await axiosSecure.post('/rooms', roomData);
    return data;
}