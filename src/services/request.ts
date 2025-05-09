import axios from 'axios';

// Helper
import { storeVisit } from './storeVisit';
import { ValidEmailType } from '../components/poet/bookDialog/types/componentTypes';

// API URL
const apiUrl = process.env.REACT_APP_BASE_URL;

export const requestPage = async (page: string) => {
    if (!page) page = '';

    try {
        const userId = storeVisit(page);

        const response = await axios.get(`${apiUrl}/${page}`, {
            params: { page, userId },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestMiddlePage = async (page: string) => {
    try {
        const userId = storeVisit(page);

        const response = await axios.get(`${apiUrl}/${page}`, {
            params: { userId, page },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestAllWords = async (page: string, value: string) => {
    try {
        const userId = storeVisit(page);

        const response = await axios.get(`${apiUrl}/${page}`, {
            params: { userId, page, value },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestArticleInfo = async (id: string, page: string) => {
    try {
        const userId = storeVisit(`${page}${id}`);

        const response = await axios.get(`${apiUrl}/${page}`, {
            params: {
                id: id,
                page: `${page}/${id}`,
                userId: userId,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const requestPdf = async (source: string) => {
    try {
        const response = await axios.get(`${apiUrl + source}`, {
            responseType: 'arraybuffer',
        });
        const blob = new Blob([response.data], {
            type: 'application/pdf',
        });
        const pdfBlobUrl = URL.createObjectURL(blob);
        return pdfBlobUrl;
    } catch (error) {
        throw error;
    }
};

export const addEmail = async (info: ValidEmailType) => {
    try {
        const response = await axios.post(`${apiUrl}/email`, { info });

        return response;
    } catch (error) {
        throw error;
    }
};

// export const sendLogin = async (info) => {
//     try {
//         const response = await axios.post(`${apiUrl}/admin/login`, { info });

//         return response;
//     } catch (error) {
//         throw error;
//     }
// };

export const getSections = async () => {
    try {
        const response = await axios.get(`${apiUrl}/${'admin/content'}`);

        return response.data;
    } catch (error) {
        throw error;
    }
};

// export const uploadSectionImage = async (formData) => {
//     try {
//         const response = await axios.put(`${apiUrl}/admin/section`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });

//         return response;
//     } catch (error) {
//         throw error;
//     }
// };
