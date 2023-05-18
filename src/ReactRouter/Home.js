import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/dog");
  };

  return (
    <div>
      <h1>I am home page</h1>
      <button onClick={goToAbout}>Go To About Page</button>
      <a href="/about" alt="Navigate to about page">
        Go TO About Page
      </a>
    </div>
  );
};

export default Home;
