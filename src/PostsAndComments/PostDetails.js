// Your Homework
import { useParams } from "react-router-dom";

// All comments should be loaded: https://jsonplaceholder.typicode.com/comments?postId=3

// How to pass userId from Home page to post details page?????
// One solution involves updating Route..
// Second solution involves using navigate. useNavigate()

// Load all user data: https://jsonplaceholder.typicode.com/users/1

const PostDetails = () => {
  const params = useParams();
  return <h1>Post Page with {params.id}</h1>;
};

export default PostDetails;
