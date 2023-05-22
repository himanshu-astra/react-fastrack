import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const goToAbout = () => {
    navigate("/dog", {
      state: {
        userId: 1,
      },
    });
  };

  return (
    <div>
      <h1>I am home page</h1>
      <button onClick={goToAbout}>Go To About Page</button>
      <Link to="/about" alt="Navigate to about page">
        Go TO About Page
      </Link>
    </div>
  );
};

export default Home;
