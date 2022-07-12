import axios from "axios";

const baseURL = "https://api.github.com/repos/crewd/only-commit";

export const getCommits = async () => {
  const { data } = await axios.get(`${baseURL}/commits`);
  return data;
};

export const getCommit = async (sha: string) => {
  const { data } = await axios.get(`${baseURL}/git/commits/${sha}`);
  return data;
};
