import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BlogView from "./components/blog/BlogView";
import ScrollToTop from "./ScrollToTop";

import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:blogTitle" element={<BlogView />} />
      </Routes>
    </>
  );
}

export default App;
