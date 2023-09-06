import axios from "../../plugin/axios-http";

export const getPosts = async () => {
    const response = await axios.get(`/blogs`);
    return response.data;
}