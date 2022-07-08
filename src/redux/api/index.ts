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

const registerUserApi = (userData: UserType) => {
  return API.post("/auth/register", userData);
};

// const getAllPostsApi = ({search = '', limit = 10, offset = 0, ordering = 'date'}) => {
//   return API.get("/blog/posts/",{search, limit, offset, ordering});
// };

// const getSinglePost = (id: string) => {
//   return API.get(`/blog/posts/${id}/`);
// };

// const userActivateApi = (uid: string, token: string) => {
//   return API.post("/auth/users/activation/", { uid, token });
// };
// const loginUserApi = (data: { email: string; password: string }) => {
//   return API.post("/auth/jwt/create/", data);
// };

// const getUserInfoApi = (token: string) => {
//   return API.get(
//     "/auth/users/me/",
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };
// const verifyToken = (token: string) => {
//   return API.post("/auth/jwt/verify/", { token });
// };
// const getNewAccessToken = (refresh: string) => {
//   return API.post("/auth/jwt/refresh/", { refresh });
// };
// const getMyPosts = (token: string) => {
//   return API.get(
//     "/blog/posts/my_posts/",
//     {},
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };

// const createPostApi = (token: any, postData: any) => {
//   return API.post("/blog/posts/", postData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
export {
  //   getAllPostsApi,
  //   getSinglePost,
  registerUserApi,
  //   userActivateApi,
  //   loginUserApi,
  //   getUserInfoApi,
  //   verifyToken,
  //   getNewAccessToken,
  //   getMyPosts,
  //   createPostApi
};
