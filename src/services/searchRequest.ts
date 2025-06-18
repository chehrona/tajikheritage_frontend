import axios from 'axios';

// API URL
const apiUrl = process.env.REACT_APP_BASE_URL;

export const searchEntry = async (value: string, page: string) => {
    try {
        const response = await axios.get(`${apiUrl}/${page}/search/`, {
            params: { q: encodeURIComponent(value) },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
