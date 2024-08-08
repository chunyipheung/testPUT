import axios from 'axios';

export const postAPI = async (api, data) => {
    try {
        const response = await axios.post(api, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

export const getAPI = async (api) => {
    try {
        const response = await axios.get(api);
        return response.data;
    } catch (error) {
        console.error('Error getting data:', error);
        throw error;
    }
};

export const putAPI = async (api, data) => {
    try {
        const response = await axios.put(api, data);
        return response.data;
    } catch (error) {
        console.error('Error putting data:', error);
        throw error;
    }
};