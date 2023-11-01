import styles from "./blog.module.css";
import BlogItem from "../../components/blog/BlogItem";
import BlogItemSm from "../../components/blog/BlogItemSm";

// blog images imports
import doctor from "../../assets/doctor.webp";
import heart from "../../assets/heart.webp";
import pills from "../../assets/pills.webp";

function Blog({ home }) {
  const blogItems = home
    ? [
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
      ]
    : [
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
    <div className={styles.blog_container}>
      <div className={styles.blog_inner}>
        <div className={styles.blog_hero} style={home && { maxWidth: "400px" }}>
          <h4>OUR BLOG</h4>
          <h1 style={home && { fontSize: "30px", lineHeight: "35px" }}>
            Our articles on health and personal wellness
          </h1>
        </div>
        {!home && (
          <div className={styles.blog_big_flex}>
            <BlogItem />
            <BlogItem />
          </div>
        )}
        <div
          style={
            home && {
              width: "80%",
              justifyContent: "space-evenly",
              margin: "10px 0px",
            }
          }
          className={styles.blog_small_flex}
        >
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

export default Blog;
