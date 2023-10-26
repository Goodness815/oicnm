import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./blog.module.css";
function BlogItemSm({ img, tag, title }) {
  const navigate = useNavigate();
  return (
    <div className={styles.blog_container_sm}>
      <img src={img} alt="BlogImg" />
      <span>{tag}</span>
      <h3>{title}</h3>
      <button onClick={() => navigate(`/${title}`, { state: { img, title } })}>
        Read More
      </button>
    </div>
  );
}

export default BlogItemSm;
