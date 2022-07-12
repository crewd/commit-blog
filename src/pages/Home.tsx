import { useQuery } from "react-query";
import { Link } from "react-router-dom"
import { getCommits } from "../api";
import PostCard from "../components/post/PostCard"
import { GetCommits } from "../types/postType";

const Home: React.FC = () => {

  const commits = useQuery<GetCommits[]>("commits", getCommits, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <ul className="post-list">
      {commits.data && commits.data.map((commit, index) => {
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