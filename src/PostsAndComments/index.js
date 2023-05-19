import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<h1>Post Details</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
