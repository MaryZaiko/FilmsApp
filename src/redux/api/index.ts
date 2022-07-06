import { create } from "apisauce";
// const API = create({
//   baseURL: "https://studapi.teachmeskills.by",
// });

// type UserType = {
//   username: string;
//   password: string;
//   email: string;
// };

// const getAllPostsApi = ({search = '', limit = 10, offset = 0, ordering = 'date'}) => {
//   return API.get("/blog/posts/",{search, limit, offset, ordering});
// };

// const getSinglePost = (id: string) => {
//   return API.get(`/blog/posts/${id}/`);
// };

// const registerUserApi = (userData: UserType) => {
//   return API.post("/auth/users/", userData);
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
// export {
//   getAllPostsApi,
//   getSinglePost,
//   registerUserApi,
//   userActivateApi,
//   loginUserApi,
//   getUserInfoApi,
//   verifyToken,
//   getNewAccessToken,
//   getMyPosts,
//   createPostApi
// };