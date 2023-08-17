import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getPosts = async () => {
  const response = await axios.get(`${base_url}post/admin`, config);
  // console.log(response);
  return response.data?.data;
};
const getApprovedPosts = async () => {
  const response = await axios.get(
    `${base_url}post/admin?status=true&deleted=false`,
    config
  );
  // console.log(response);
  return response.data?.data;
};

const getAPost = async (id) => {
  const response = await axios.get(`${base_url}post/${id}/admin`, config);
  // console.log(response);
  return response.data?.data;
};

const approvePost = async (id) => {
  const response = await axios.patch(
    `${base_url}post/approve`,
    {
      id: id,
    },
    config
  );
  // console.log(response);
  return response.data;
};

const deletePost = async (id) => {
  const response = await axios.delete(`${base_url}post/${id}`, config);
  // console.log(response);
  return response.data;
};

const postService = {
  getAPost,
  getPosts,
  getApprovedPosts,
  approvePost,
  deletePost,
  deletePost,
};

export default postService;
