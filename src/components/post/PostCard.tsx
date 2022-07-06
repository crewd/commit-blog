import { Post } from "../../types/postType";

const PostCard = ({ message, author, date }: Post) => {
  const dateParse = Date.parse(date.substring(0, 10));
  const newDate = new Date(dateParse);

  const year = newDate.getFullYear();
  const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
  const day = ('0' + newDate.getDate()).slice(-2);

  const commitDate = year + '-' + month + '-' + day;


  return (
    <li className="post-card">
      <p className="post-card__title">{message}</p>
      <p className="post-card__date">{commitDate.toString()}</p>
      <p className="post-card__author">{author}</p>
    </li>
  )
}

export default PostCard;