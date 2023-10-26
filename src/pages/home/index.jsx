import React from "react";
import styles from "./home.module.css";
import BlogItem from "../../components/blog/BlogItem";
import BlogItemSm from "../../components/blog/BlogItemSm";

// blog images imports
import doctor from "../../assets/doctor.webp";
import heart from "../../assets/heart.webp";
import pills from "../../assets/pills.webp";

function Home() {
  const blogItems = [
    {
      tag: "ADMISSION",
      title: "Should you be tested post covid?",
      img: doctor,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Overeating? Mindfulness exercises can support",
      img: heart,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Can vitamin D supplements prevent health issues?",
      img: pills,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Can vitamin D supplements prevent health issues?",
      img: pills,
    },
    {
      tag: "ADMISSION",
      title: "Should you be tested post covid?",
      img: doctor,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Overeating? Mindfulness exercises can support",
      img: heart,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Can vitamin D supplements prevent health issues?",
      img: pills,
    },
    {
      tag: "PERSONAL WELLNESS",
      title: "Can vitamin D supplements prevent health issues?",
      img: pills,
    },
  ];
  return (
    <div className={styles.home_container}>
      <div className={styles.home_inner}>
        <div className={styles.home_hero}>
          <h4>OUR BLOG</h4>
          <h1>Our articles on health and personal wellness</h1>
        </div>
        <div className={styles.home_big_flex}>
          <BlogItem />
          <BlogItem />
        </div>
        <div className={styles.home_small_flex}>
          {blogItems.map((item, i) => {
            return (
              <BlogItemSm
                tag={item.tag}
                title={item.title}
                img={item.img}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
