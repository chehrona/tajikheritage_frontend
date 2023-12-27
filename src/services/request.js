import axios from "axios";

let envUrl = process.env.PUBLIC_URL === "" && `http://localhost:8000`;

console.log(envUrl, "url")

export const requestPage = async (url) => {
    if (!url) url = "";
    
    try {
        const response = await axios.get(`${envUrl}/api/${url}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestPoet = async (id) => {
    try {
        const response = await axios.get(`${envUrl}/api/language/poets`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestRecipe = async (id) => {
    try {
        const response = await axios.get(`${envUrl}/api/cuisine/recipes`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMyth = async (id) => {
    try {
        const response = await axios.get(`${envUrl}/api/customs/myths`, {
            params: {id : id}
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};