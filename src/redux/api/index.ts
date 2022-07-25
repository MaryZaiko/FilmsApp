import { create } from "apisauce";
import { BaseFromTo } from "../../common/types";
const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});

type UserType = {
  first_name: string;
  last_name:string;
  email: string;
  password: string;
  password_confirmation: string;
  token_name: string;
};

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

const getAllFilmsApi = (
  token: any,
  order: string,
  page: number,
  perPage: number
) => {
  return API.get(
    "/titles",
    { order, page, perPage },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const getSingleFilmApi = (token: any, id: string) => {
  return API.get(
    `/titles/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const getUserInfoApi = (token: any, id: string) => {
  return API.get(
    `/user-profile/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const getSearchedOfFilmsApi = (token: any, query: any) => {
  return API.get(
    `/search/${query}`,
    { limit: 10 },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const getRecommendationFilmsApi = (token: any, id: any) => {
  return API.get(
    `/titles/${id}/related`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
const getFilteredFilmsApi = (
  token: any,
  type: any,
  genre: any,
  released: any,
  score: any,
  country: any
) => {
  console.log(type,genre,released,score,country);
  
  return API.get(
    "/titles",
    {type,genre,released,score,country},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export {
  registerUserApi,
  loginUserApi,
  getAllFilmsApi,
  getSingleFilmApi,
  getUserInfoApi,
  getSearchedOfFilmsApi,
  getRecommendationFilmsApi,
  getFilteredFilmsApi,
};
