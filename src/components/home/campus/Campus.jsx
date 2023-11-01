import styles from "./campus.module.css";
function Campus() {
  return (
    <div className={styles.campus_container}>
      <div className={styles.campus_inner}>
        <span>our campus</span>
        <h2>
          Tour the Open International College of Naturopathic Medicine Campus
        </h2>
        <iframe
          width="720"
          height="375"
          style={{ marginTop: "30px", borderRadius: "10px" }}
          src="https://www.youtube.com/embed/OpE6p5cfct0?si=E9w_l8ms6Lfp5lpI&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Campus;
