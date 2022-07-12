import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getCommit } from '../api';
import { GetCommit, GetCommits } from '../types/postType';

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
  const [commitData, setCommitData] = useState<GetCommit | null>(null);
  const [title, setTitle] = useState("");
  const [commitDate, setCommitDate] = useState("");
  const [commitMessage, setCommitMessage] = useState<string[]>([""]);

  const location = useLocation();

  const sha = location.pathname.split(/post|\//g);

  const commit = useQuery("commit", () => getCommit(sha[sha.length - 1]), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!commit.data) {
      return setCommitData(null);
    }
    setCommitData(commit.data);
  }, [commit])

  useEffect(() => {
    if (!commitData) {
      return;
    }
    const postTitle = commitData.message.split(/\n/g);
    setTitle(postTitle[0])
  }, [commitData])

  useEffect(() => {
    if (!commitData) {
      return;
    }
    const getCommitDate = new Date(commitData.committer.date);

    const year = getCommitDate.getFullYear();
    const month = ('0' + (getCommitDate.getMonth() + 1)).slice(-2);
    const day = ('0' + getCommitDate.getDate()).slice(-2);
    const hour = (getCommitDate.getHours());
    const minute = getCommitDate.getMinutes()

    setCommitDate(`${year}-${month}-${day} ${hour}:${minute}`)
  }, [title])

  useEffect(() => {
    if (!commitData) {
      return;
    }

    const message = commitData.message.split(/\n/g);
    if (message.length === 1) {
      return setCommitMessage(message)
    }
    setCommitMessage(message.slice(1));

  }, [commitDate])

  return (
    <section>
      <header className='post-title'>
        <h1>{title}</h1>
      </header>
      <address className='post-address'>
        <div>
          {`${commitData?.committer.name} / ${commitDate}`}
        </div>
      </address>
      <article className='post-content'>
        {commitMessage.map(message => {
          return <p key={message}>{message}</p>
        })}
      </article>
    </section>
  )
};

export default PostPage;