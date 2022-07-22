import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom"
import { useRecoilState, useSetRecoilState } from "recoil";
import { getCommits } from "../api";
import PostCard from "../components/post/PostCard"
import { searchIsOpened } from "../recoil/search";
import { baseTreeState, LatestCommitState, newCommitState, newTreeState } from "../recoil/sha";
import { GetCommits } from "../types/postType";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<GetCommits[]>();

  const [isOpened, setIsOpened] = useRecoilState(searchIsOpened);
  const [latestCommit, setLatestCommit] = useRecoilState(LatestCommitState);
  const setBaseTree = useSetRecoilState(baseTreeState);

  const commits = useQuery<GetCommits[]>("commits", getCommits, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });


  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (!commits.data) {
      return;
    }

    const result = searchValue
      ? commits.data.filter(commit => commit.commit.message.includes(searchValue))
      : commits.data;

    setSearchResult(result);
  }, [commits.data, searchValue]);

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

  return (
    <div>
      {isOpened &&
        <div className="searchForm-wrapper">
          <input className="searchForm-input" type="search" onChange={searchHandler} placeholder="검색어를 입력해주세요" />
        </div>
      }

      <ul className="post-list">
        {searchResult && searchResult.map((commit, index) => {
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
    </div>
  )
}

export default Home;