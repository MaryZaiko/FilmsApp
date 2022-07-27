import { create } from "apisauce";
import { UserType } from "../../common/types";

const API = create({
  baseURL: "https://unelmamovie.com/api/v1",
});

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
  token: string,
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
const getSingleFilmApi = (token: string, id: string) => {
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
const getUserInfoApi = (token: string, id: string) => {
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
const getSearchedOfFilmsApi = (token: string, query: string) => {
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
const getRecommendationFilmsApi = (token: string, id: string) => {
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
  token: string,
  type: string,
  genre: string[],
  released: number[],
  score: string,
  country: string
) => {
  return API.get(
    "/titles",
    { type, genre, released, score, country },
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
