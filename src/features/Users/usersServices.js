import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getUsers = async () => {
  const response = await axios.get(`${base_url}user/all`, config);

  return response.data;
};
const getCreatorUsers = async () => {
  const response = await axios.get(`${base_url}user/all?role=creator`, config);

  return response.data;
};

const getUsersAggregate = async () => {
  const response = await axios.get(`${base_url}user/summary`, config);
  // console.log(response);
  return response.data.data;
};

const getAUser = async (id) => {
  const response = await axios.get(`${base_url}user/${id}`, config);

  return response.data?.data;
};
const changeUserRole = async (id) => {
  const response = await axios.post(
    `${base_url}user/role/${id}`,
    {
      userType: "creator",
    },
    config
  );
  console.log(response);
  return response.data?.data;
};

const usersService = {
  getUsers,
  getUsersAggregate,
  getAUser,
  getCreatorUsers,
  changeUserRole,
};

export default usersService;
