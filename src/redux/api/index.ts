import { create } from "apisauce";
const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});

type UserType = {
  first_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
};
const accessToken = localStorage.getItem("jwtAccessToken")

const registerUserApi = (userData: UserType) => {
  return API.post("/auth/register", userData);
};

const loginUserApi = (data: {
  email: string;
  password: string;
  token_name: string;
}) => {
  return API.post("/auth/login", data);
};

const getAllFilmsApi = () => {
  return API.get("/titles", {},
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const getSingleFilmApi = (id:string) => {
  return API.get(`/titles/${id}`, {},
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { registerUserApi, loginUserApi,getAllFilmsApi,getSingleFilmApi };
