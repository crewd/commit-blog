import { Post } from "../../types/postType";

const PostCard = ({ message, author, date }: Post) => {
  const getCommitDate = new Date(date);

  const year = getCommitDate.getFullYear();
  const month = ('0' + (getCommitDate.getMonth() + 1)).slice(-2);
  const day = ('0' + getCommitDate.getDate()).slice(-2);

  const commitDate = year + '-' + month + '-' + day;


  return (
    <li className="post-card">
      <div className="post-card__title">
        <p>{message}</p>
      </div>
      <div>
        <p className="post-card__date">{commitDate.toString()}</p>
        <p className="post-card__author">{author}</p>
      </div>
    </li>
  )
}

export default PostCard;