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

const getAllFilmsApi = (token: any, order:any) => {
  return API.get("/titles", {order},
  {
    headers: {
      Authorization: `Bearer ${token}`,
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
const getUserInfoApi = (token: any, id:string) => {
  return API.get(`/user-profile/${id}`, {},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const getSearchedOfFilmsApi = (token: any, query: any) =>{
  return API.get(`/search/${query}`, {limit: 10,},{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  
  }

  
  )
}




export { registerUserApi, loginUserApi,getAllFilmsApi,getSingleFilmApi,getUserInfoApi,getSearchedOfFilmsApi };
