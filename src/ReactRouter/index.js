import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dog" element={<h1>This is dog path</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouter;
