import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: baseURL
});

export const fetchCustomers = async (user) => {
    try {
        const response = await instance.post("/login", user);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const registerUser = async (newUser) => {
    try {
        const response = await instance.post("/register", newUser);
        console.log('res =>', response)
        return response.data;
    } catch (error) {
        return error;
    }
};