import axios from 'axios';

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "87d43aae2e244508a78323e41ac5f294";
const redirectURI = "http://localhost:3000" ;
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoints = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join("&20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
   baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
   apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
   });
};

export default apiClient;