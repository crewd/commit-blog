import axios from "axios";

const baseURL = "https://api.github.com/repos/crewd/only-commit";

export const getCommits = async () => {
  const { data } = await axios.get(`${baseURL}/commits`);
  console.log(data);
  return data;
};
