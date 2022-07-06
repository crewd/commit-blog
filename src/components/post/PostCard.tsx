import { Post } from "../../types/postType";

const PostCard = ({ message, author, date }: Post) => {
  return (
    <li>
      {message} {author} {date}
    </li>
  )
}

export default PostCard;