import { NewTree, PushCommit, ShaNewCommit } from "../types/write";
import instance from "./instance";

export const getCommits = async () => {
  const { data } = await instance.get(`/commits`);
  return data;
};

export const getCommit = async (sha: string) => {
  const { data } = await instance.get(`/git/commits/${sha}`);
  return data;
};

export const createFile = async (newFile: NewTree) => {
  const data = await instance.post(`/git/trees`, newFile);
  return data;
};

export const getShaNewCommit = async (commits: ShaNewCommit) => {
  const data = await instance.post(`/git/commits`, commits);
  return data;
};

export const pushCommit = async (newCommit: PushCommit) => {
  const data = await instance.post(`/git/refs/heads/main`, newCommit);
  return data;
};
