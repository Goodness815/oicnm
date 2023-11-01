import styles from "./abouthero.module.css";
import about1 from "../../../assets/aboutpage1.png";
import about2 from "../../../assets/aboutpage2.png";

function AboutHero() {
  return (
    <div className={styles.about_container}>
      <span data-aos="fade-up" data-aos-duration="1000">
        About us
      </span>
      <h2 data-aos="fade-up" data-aos-duration="2000">
        Learn about our story, mission and values to excellence in medical
        education .
      </h2>
      <div className={styles.about_top}>
        <div
          className={styles.about_left}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span>OUR STORY</span>
          <h2>We’ve been in business since 2006.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et .
          </p>
        </div>
        <div className={styles.about_right}>
          <div className={styles.about_img_case}>
            <img src={about1} alt="" />
          </div>
        </div>
      </div>
      <div className={`${styles.about_top} ${styles.about_bottom}`}>
        <div className={styles.about_right}>
          <div className={styles.about_img_case}>
            <img src={about2} alt="" />
          </div>
        </div>
        <div
          className={styles.about_left}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span>OUR mıssıon and vision</span>
          <h2>Shaping Healthcare Excellence for Tomorrow.</h2>
          <strong>Mission</strong>
          <p>
            At OICNM, our mission is to inspire, educate, and empower the next
            generation of healthcare leaders. We are dedicated to providing
            exceptional medical education, fostering a culture of compassion and
            integrity, and conducting groundbreaking research to advance the
            field of medicine.
          </p>
          <strong>Vision</strong>
          <p>
            Our vision is to be a global leader in medical education and
            research, shaping the future of healthcare through innovation,
            integration, and a commitment to the well-being of patients and
            communities. We strive to graduate compassionate and skilled
            healthcare professionals who will make a positive impact on the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
