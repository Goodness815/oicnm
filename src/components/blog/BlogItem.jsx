import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./blog.module.css";
import img from "../../assets/lab.webp";
function BlogItem() {
  const navigate = useNavigate();
  return (
    <div className={styles.blog_item_container}>
      <div className={styles.blog_item_top}>28 SEPTEMBER 2023</div>
      <div className={styles.blog_item_bottom}>
        <span>ADMISSION</span>
        <h3>Should you be tested post covid?</h3>
        <button
          onClick={() =>
            navigate(`/Should you be tested post covid?`, {
              state: { img, title: "Should you be tested post covid?" },
            })
          }
        >
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default BlogItem;
