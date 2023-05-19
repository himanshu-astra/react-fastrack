import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const staticData = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 1,
    title: "Title 2",
    body: "Body 2",
  },
];

// Step 2 of making UI
// Make the components extensible
const Post = (props) => {
  return (
    <div className="post-container">
      <div>
        <p className="post-title">{props.title}</p>
        <div className="border" />
      </div>
      <pre className="post-body">{props.body}</pre>
      <Link to={`/post/${props.id}`}>Read More...</Link>
    </div>
  );
};

const Home = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonRes = await res.json();
      setPostData(jsonRes);
    };

    fetchData();
  }, []);

  let posts = [];

  for (let i = 0; i < postData.length; i++) {
    const postUI = (
      <Post
        title={postData[i].title}
        body={postData[i].body}
        id={postData[i].id}
      />
    );
    posts.push(postUI);
  }

  return <div className="posts">{posts}</div>;
};

export default Home;
