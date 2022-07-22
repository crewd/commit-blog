import axios from "axios";

const host = "https://api.github.com/repos/crewd/only-commit";

const instance = axios.create({
  baseURL: host,
  auth: {
    username: process.env.REACT_APP_USER,
    password: process.env.REACT_APP_TOKEN,
  },
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  }
  // error => {
  //   if (error.response && error.response.status === 500) {
  //     localStorage.removeItem("user");
  //     window.location.reload();
  //   }
  // },
);

export default instance;
