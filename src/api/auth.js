/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosSecure from "../hooks/useAxiosSecure"
const axiosSecure = useAxiosSecure();

// save user data in database
export const saveUser = async (user) => {
    const currentUser = {
        email: user?.email,
        role: 'guest',
        status: 'verified'
    }
    const res = await axiosSecure.put(`/users/${user?.email}`, currentUser);
    return res?.data;

}

// get token from server
export const getToken = async (email) => {
    const {data} = await axiosSecure.post('/jwt', email);
    return data;
}

// clear token from browser
export const clearCookie = async() => {
    const { data } = await axiosSecure.get('/logout');
    return data;
}