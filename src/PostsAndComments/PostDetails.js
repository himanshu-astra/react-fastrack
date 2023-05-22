// Your Homework
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// All comments should be loaded: https://jsonplaceholder.typicode.com/comments?postId=3

// How to pass userId from Home page to post details page?????
// One solution involves updating Route. (Route can take multiple parameter)

// Second solution involves using navigate.
// (navigate('route', {state: {fill_this_with_data}}))
// Access this data on other page using useLocation

// Load all user data: https://jsonplaceholder.typicode.com/users/1
const PostDetails = () => {
  const params = useParams();
  const postId = params?.postId; // if(params && params.postId) return postId
  const userId = params?.userId;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const jsonRes = await res.json();
      setUserData(jsonRes);
    };
    getUserData();
  }, [userId]);

  console.log(userData);
  return <h1>Post Page with {postId}</h1>;
};

export default PostDetails;
