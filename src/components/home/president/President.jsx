import styles from "./president.module.css";
import presidentimg from "../../../assets/president.png";
function President() {
  return (
    <div className={styles.president_container}>
      <div className={styles.president_inner}>
        <div className={styles.president_left}>
          <div className={styles.president_img_case}>
            <img src={presidentimg} alt="" />
          </div>
        </div>
        <div
          className={styles.president_right}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span>FROM OUR PRESIDENT</span>
          <h2>Welcome to </h2>
          <p>Welcome to [Medical School Name] </p>
          <p>
            As President, I'm excited for your journey in [Academic
            Year/Semester].
          </p>
          <p>We're a community of excellence, guided by dedicated faculty.</p>
          <p>
            Explore opportunities, support your peers, and embrace our values of
            compassion and integrity.
          </p>
          <p>
            Your impact in healthcare starts here. Let's excel together. With
            warm regards,
          </p>
          <h2>AbdulAzeez Ahmad</h2>
          <p>
            President, Open International College of Naturopathic Medicine
            (OICNM)
          </p>
        </div>
      </div>
    </div>
  );
}

export default President;
