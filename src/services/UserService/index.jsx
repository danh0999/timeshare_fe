import http from "../index";
import {
  apiGetAllUser,
  apiGetUserById,
  apiUpdateUser,
  apiDeleteUser,
} from "./urls";

const getAllUser = () => http.get(apiGetAllUser);
const getUserById = (id) => http.get(apiGetUserById + id);
const updateUser = (id) => http.get(apiUpdateUser + id);
const deleteUser = (id) => http.get(apiDeleteUser + id);

const UserService = {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};
export default UserService;
