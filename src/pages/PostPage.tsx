import React from 'react';
import { useQuery } from 'react-query';
import { getCommit } from '../api';

const data = {
  "sha": "7638417db6d59f3c431d3e1f261cc637155684cd",
  "node_id": "MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==",
  "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd",
  "html_url": "https://github.com/octocat/Hello-World/commit/7638417db6d59f3c431d3e1f261cc637155684cd",
  "author": {
    "date": "2014-11-07T22:01:45Z",
    "name": "Monalisa Octocat",
    "email": "octocat@github.com"
  },
  "committer": {
    "date": "2014-11-07T22:01:45Z",
    "name": "Monalisa Octocat",
    "email": "octocat@github.com"
  },
  "message": "added readme, because im a good github citizen",
  "tree": {
    "url": "https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb",
    "sha": "691272480426f78a0138979dd3ce63b77f706feb"
  },
  "parents": [
    {
      "url": "https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5",
      "sha": "1acc419d4d6a9ce985db7be48c6349a0475975b5",
      "html_url": "https://github.com/octocat/Hello-World/commit/7638417db6d59f3c431d3e1f261cc637155684cd"
    }
  ],
  "verification": {
    "verified": false,
    "reason": "unsigned",
    "signature": null,
    "payload": null
  }
}

const PostPage: React.FC = () => {

  const commit = useQuery("commit", () => getCommit("c730c3af51e1cd912322ee321ea350018612434b"), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  console.log(commit.data)

  const getCommitDate = new Date(data.committer.date);

  const year = getCommitDate.getFullYear();
  const month = ('0' + (getCommitDate.getMonth() + 1)).slice(-2);
  const day = ('0' + (getCommitDate.getDate() - 1));
  const hour = ('0' + (getCommitDate.getHours()));
  const minute = ('0' + getCommitDate.getMinutes())

  const commitDate = `${year}-${month}-${day} ${hour}:${minute}`;
  return (
    <section>
      <header className='post-title'>
        <h1>{data.message}</h1>
      </header>
      <address className='post-address'>
        <div>
          {`${data.committer.name} / ${commitDate}`}
        </div>
      </address>
      <article className='post-content'>
        {data.message}
      </article>
    </section>
  )
};

export default PostPage;