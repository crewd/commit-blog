import PostCard from "../components/post/PostCard"

const data = [
  {
    "node_id": "MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==",
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
    "message": "added readme, because im a good github citizen"
  },
]

const Home: React.FC = () => {
  return (
    <ul>
      {data.map(commit => {
        return <PostCard message={commit.message} author={commit.author.name} date={commit.author.date} />
      })}
    </ul>
  )
}

export default Home;