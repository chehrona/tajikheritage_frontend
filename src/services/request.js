import axios from "axios";

export const requestPage = async (url) => {
    if (!url) url = "";
    
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/${url}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestPoet = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/language/poets`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestRecipe = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/cuisine/recipes`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMyth = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/customs/myths`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addVisit = async () => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/visit`);
        console.log(response, "res")
        return response;
    } catch (error) {
        throw error;
    }
};