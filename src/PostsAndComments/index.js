import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:userId/:postId" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
