import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://garden-hub-server-xi.vercel.app/`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;