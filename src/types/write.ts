export type NewTree = {
  base_tree: string;
  tree: [
    {
      path: string;
      mode: string;
      type: string;
      content: string;
    }
  ];
};

export type ShaNewCommit = {
  parents: string[];
  tree: string;
  message: string;
};

export type PushCommit = {
  sha: string;
  force: boolean;
};
