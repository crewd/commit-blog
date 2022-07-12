import { useQuery } from "react-query";
import { getCommits } from "../../api";
import { Post } from "../../types/postType";

const PostCard = ({ message, author, date, avatar }: Post) => {
  const getCommitDate = new Date(date);

  const year = getCommitDate.getFullYear();
  const month = ('0' + (getCommitDate.getMonth() + 1)).slice(-2);
  const day = ('0' + getCommitDate.getDate()).slice(-2);

  const commitDate = `${year}-${month}-${day}`;

  const regexMessage = message.split(/\n/g)

  return (
    <li className="post-card">
      <div className="post-card__title">
        <p>{regexMessage[0]}</p>
      </div>
      <div>
        <p className="post-card__date">{commitDate.toString()}</p>
        <div className="post-card__avatar">
          <img src={avatar} />
          <p className="post-card__author">{author}</p>
        </div>
      </div>
    </li>
  )
}

export default PostCard;