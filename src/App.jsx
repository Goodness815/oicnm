import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import BlogView from "./components/blog/BlogView";
import ScrollToTop from "./ScrollToTop";

import "./App.css";
import Blog from "./pages/blog";
import Nav from "./components/nav";
import Footer from "./components/footer/Footer";
import About from "./pages/about";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";
// ..
AOS.init();

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={
            <>
              <Nav bg={true} />
              <div style={{ paddingTop: "80px" }}>
                <Blog />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/:blogTitle"
          element={
            <>
              <Nav bg={true} />
              <div style={{ paddingTop: "80px" }}>
                <BlogView />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
