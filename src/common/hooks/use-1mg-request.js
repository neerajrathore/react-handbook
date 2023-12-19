import axios from "axios";
import { baseURL, xApiKey } from '../constants/1mg-api'

const axiosClient = (extrHeaders = {}) => {
    const headers = {
        'x-api-key': xApiKey,
        'X-Access-Key': xApiKey,
        ...extrHeaders

    }
    return axios.create({ baseURL, headers });
};
export default () => {

    const makeRequest = async ({ url, method, onSuccess, onFailure, headers }) => {

        method = method.toLowerCase();
        try {
            const response = await axiosClient(headers)[method](url)
            if (onSuccess) {
                onSuccess(response.data)
            }
            return response.data
        } catch (err) {
            if (onFailure) {
                onFailure(err)
            }
        }
    }
    return { makeRequest }
}
