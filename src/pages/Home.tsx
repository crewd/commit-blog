import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil";
import { getCommits } from "../api";
import PostCard from "../components/post/PostCard"
import { baseTreeState, LatestCommitState, newCommitState, newTreeState } from "../recoil/sha";
import { GetCommits } from "../types/postType";

const Home: React.FC = () => {

  const [latestCommit, setLatestCommit] = useRecoilState(LatestCommitState);
  const setBaseTree = useSetRecoilState(baseTreeState);

  const commits = useQuery<GetCommits[]>("commits", getCommits, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  // sha-latest-commit 저장
  useEffect(() => {
    if (!commits.data) {
      return;
    }
    const shaLatest = commits.data[0].sha;
    setLatestCommit(shaLatest);
  }, [commits.data]);

  // sha-base-tree 저장
  useEffect(() => {
    if (!commits.data) {
      return;
    }
    const shaBaseTree = commits.data[0].commit.tree.sha;
    setBaseTree(shaBaseTree);
  }, [latestCommit])

  useEffect(() => {
    commits.refetch();
  }, [])

  console.log(process.env.REACT_APP_TOKEN);


  return (
    <ul className="post-list">
      {commits.data && commits.data.map((commit, index) => {
        if (!commit.commit.message) {
          return;
        }
        return (
          <Link className="link" to={`/posts/${commit.sha}`} key={commit.committer.id + index}>
            <PostCard message={commit.commit.message} author={commit.committer.login} date={commit.commit.committer.date} avatar={commit.committer.avatar_url} />
          </Link>
        )
      })}
    </ul>
  )
}

export default Home;