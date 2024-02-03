import axios from "axios";
import { storeVisit } from "../landingPages/home/helper";

export const requestPage = async (url) => {
    if (!url) url = "";

    try {
        const userId = storeVisit(url);

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, { params: { url, userId } });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMiddlePage = async (url) => {
    try {
        const userId = storeVisit(url);

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`, { params: { url, userId } });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestPoet = async (id) => {
    try {
        const userId = storeVisit(`poets/${id}`);

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/language/poet`, {
            params: {
                id : id,
                userId: userId
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestRecipe = async (id) => {
    try {
        const userId = storeVisit('cuisine/recipes');

        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/cuisine/recipes`, {
            params: {
                id : id,
                userId: userId
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMyth = async (id) => {
    try {
        const userId = storeVisit(`myths/${id}`);
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customs/myths`, {
            params: {
                id : id,
                userId: userId
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addVisit = async (page) => {
    try {
        const userId = storeVisit(page);
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/visit`, { userId, page });

        return response;
    } catch (error) {
        throw error;
    }
};

export const addEmail = async (info) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/email`, { info });

        return response;
    } catch (error) {
        throw error;
    }
};