import { atom } from "recoil";

export const LatestCommitState = atom({
  key: "sha-latest-commit",
  default: "",
});

export const baseTreeState = atom({
  key: "sha-base-tree",
  default: "",
});

export const newTreeState = atom({
  key: "sha-new-tree",
  default: "",
});

export const newCommitState = atom({
  key: "sha-new-commit",
  default: "",
});
