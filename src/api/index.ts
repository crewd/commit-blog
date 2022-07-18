import instance from "./instance";

export const getCommits = async () => {
  const { data } = await instance.get(`/commits`);
  return data;
};

export const getCommit = async (sha: string) => {
  const { data } = await instance.get(`/git/commits/${sha}`);
  return data;
};

// export const newCommit = async (message: string) => {
//   const data = await
// };
