import axios from 'axios';

// Helper
import { storeVisit } from '../components/home/homeStepper/helper';

// API URL
const apiUrl = process.env.REACT_APP_BASE_URL;

export const requestPage = async (url) => {
    if (!url) url = '';

    try {
        const userId = storeVisit(url);

        const response = await axios.get(`${apiUrl}/${url}`, {
            params: { url, userId },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMiddlePage = async (page) => {
    try {
        const userId = storeVisit(page);

        const response = await axios.get(`${apiUrl}/${page}`, {
            params: { userId },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestArticleInfo = async (id, page) => {
    try {
        const userId = storeVisit(`${page}/${id}`);

        const response = await axios.get(`${apiUrl}/${page}`, {
            params: {
                id: id,
                userId: userId,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addVisit = async (page) => {
    try {
        const userId = storeVisit(page);
        const response = await axios.post(`${apiUrl}/visit`, { userId, page });

        return response;
    } catch (error) {
        throw error;
    }
};

export const addEmail = async (info) => {
    try {
        const response = await axios.post(`${apiUrl}/email`, { info });

        return response;
    } catch (error) {
        throw error;
    }
};

export const sendLogin = async (info) => {
    try {
        const response = await axios.post(`${apiUrl}/admin/login`, { info });

        return response;
    } catch (error) {
        throw error;
    }
};

export const getSections = async () => {
    try {
        const response = await axios.get(`${apiUrl}/${'admin/content'}`);

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const uploadSectionImage = async (formData) => {
    try {
        const response = await axios.put(`${apiUrl}/admin/section`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response;
    } catch (error) {
        throw error;
    }
};

export const requestAllWordForLetter = async (letter, lang) => {
    try {
        const response = await axios.get(`${apiUrl}/language/all_letter`, {
            params: { letter, lang },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
