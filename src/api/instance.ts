import axios from "axios";

const host = "https://api.github.com/repos/crewd/only-commit";

const instance = axios.create({
  baseURL: host,
  auth: {
    username: "newspaper321@nate.com",
    password: "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",
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