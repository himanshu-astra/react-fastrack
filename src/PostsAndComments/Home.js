import "./Home.css";

const staticData = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

// Step 1 of making UI
// Make the UI as per design
const Post = () => {
  return (
    <div className="post-container">
      <p className="post-title">
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </p>
      <div className="border" />
      <pre className="post-body">
        quia et suscipit\nsuscipit recusandae consequuntur expedita et
        cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </pre>
      <a href="/post">Read More...</a>
    </div>
  );
};

const Home = () => {
  return <Post />;
};

export default Home;
