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
// fetch all room for host
export const getHostRoom = async (email) => {
    const {
        data
    } = await axiosSecure.get(`/rooms/${email}`)
    return data;
}

// get single room api here
export const getRoom = async (id) => {
    const {
        data
    } = await axiosSecure.get(`/room/${id}`)
    return data;
}

// add room data save in database
export const addRoom = async (roomData) => {
    const {
        data
    } = await axiosSecure.post('/rooms', roomData);
    return data;
}