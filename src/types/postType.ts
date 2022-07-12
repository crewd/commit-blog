export type Post = {
  message: string;
  author: string;
  date: string;
  avatar: string;
};

type Author = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

type Commit = {
  author: {
    date: string;
    email: string;
    name: string;
  };
  comment_count: number;
  committer: {
    date: string;
    email: string;
    name: string;
  };
  message: string;
  tree: {
    sha: string;
    url: string;
  };
  url: string;
  verification: {
    payload: null;
    reason: string;
    signature: null;
    verified: boolean;
  };
};

type Parent = {
  html_url: string;
  sha: string;
  url: string;
};

export type GetCommits = {
  author: Author;
  comments_url: string;
  commit: Commit;
  committer: Author;
  html_url: string;
  node_id: string;
  parents: Parent[];
  sha: string;
  url: string;
};

export type GetCommit = {
  author: {
    date: string;
    email: string;
    name: string;
  };
  committer: {
    date: string;
    email: string;
    name: string;
  };
  html_url: string;
  message: string;
  node_id: string;
  parents: Parent[];
  sha: string;
  tree: {
    sha: string;
    url: string;
  };
  verification: {
    payload: null;
    reason: string;
    signature: null;
    verified: boolean;
  };
};
