import axiosInstance from "../../helpers/axios";

export const register = () => {
  axiosInstance.post("/auth/register")
    .then((res) => console.log("res", res))
    .catch(arr => console.log("error", arr))
}