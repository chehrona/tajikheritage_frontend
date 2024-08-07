import axios from 'axios';
import { storeVisit } from '../landingPages/home/helper';

export const requestPage = async (url) => {
    if (!url) url = '';

    try {
        const userId = storeVisit(url);

        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/${url}`,
            { params: { url, userId } },
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMiddlePage = async (page) => {
    try {
        const userId = storeVisit(page);

        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/${page}`,
            { params: { userId } },
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestArticleInfo = async (id, page) => {
    try {
        const userId = storeVisit(`${page}/${id}`);

        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/${page}`,
            {
                params: {
                    id: id,
                    userId: userId,
                },
            },
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addVisit = async (page) => {
    try {
        const userId = storeVisit(page);
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/visit`,
            { userId, page },
        );

        return response;
    } catch (error) {
        throw error;
    }
};

export const addEmail = async (info) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/email`,
            { info },
        );

        return response;
    } catch (error) {
        throw error;
    }
};

export const sendLogin = async (info) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/admin/login`,
            { info },
        );

        return response;
    } catch (error) {
        throw error;
    }
};

export const getSections = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/${'admin/content'}`,
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const uploadSectionImage = async (formData) => {
    try {
        const response = await axios.put(
            `${process.env.REACT_APP_BASE_URL}/admin/section`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );

        return response;
    } catch (error) {
        throw error;
    }
};
