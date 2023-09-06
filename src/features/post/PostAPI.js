import axios from "../../plugin/axios-http";

export const getPost = async (id) => {
    const response = await axios.get(`/blogs/${id}`);
    return response.data;
}