const Home = ({ onClick }) => {
  return (
    <div>
      <h1>I am home page</h1>
      <button onClick={onClick}>Go To About Page</button>
    </div>
  );
};

export default Home;
