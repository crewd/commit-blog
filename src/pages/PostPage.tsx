import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getCommit } from '../api';
import { GetCommit } from '../types/postType';

const PostPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
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
    setTimeout(() => setLoading(false), 300);
  }, [])

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

  if (loading || commit.isLoading) {
    return (
      <section>
        <header className='post-title'>
          <h2 className='post-title__skeleton'>loading</h2>
        </header>
        <address className='post-address'>
          <div className='post-address__skeleton'>loading</div>
        </address>
        <article className='post-content'>
          <div />
        </article>
      </section>
    )
  }

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