import { Post } from "../../types/postType";

const PostCard = ({ message, author, date }: Post) => {
  return (
    <li className="post-card">
      {message} {author} {date}
    </li>
  )
}

export default PostCard;