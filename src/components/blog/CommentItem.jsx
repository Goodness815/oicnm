import React from "react";
import styles from "./blog.module.css";
import profile from "../../assets/avatar.webp";
function CommentItem() {
  return (
    <div className={styles.comment_item}>
      <div className={styles.comment_item_top}>
        <img src={profile} alt="" /> Seyi Samuel
      </div>
      <p>
        The Admissions Committee carefully reviews international student
        applications, assessing academic achievements, language proficiency, and
        overall suitability for the chosen programme. Successful applicants will
        receive an official admission letter and information on visa
        requirements
      </p>
    </div>
  );
}

export default CommentItem;
