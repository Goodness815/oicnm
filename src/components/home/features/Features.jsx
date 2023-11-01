import styles from "./features.module.css";
import featuresimg from "../../../assets/featuresimg.png";
import bottomleft from "../../../assets/bottomleft.png";
import bottomright from "../../../assets/bottomright.png";
import { TickIcon } from "../../../assets/svgs";
function Features() {
  return (
    <div className={styles.features_container}>
      <div className={styles.features_top}>
        <div className={styles.features_left}>
          <img src={featuresimg} alt="features" />
        </div>
        <div className={styles.features_right}>
          <span>our features</span>
          <h2>Why Choose OICNM?</h2>
          <div className={styles.features_right_flex}>
            <TickIcon />
            <p>
              It's the only natural medicine college of international
              recognition in Nigeria.{" "}
            </p>
          </div>
          <div className={styles.features_right_flex}>
            <TickIcon />
            <p>Synchronous mode of learning</p>
          </div>
          <div className={styles.features_right_flex}>
            <TickIcon />
            <p>Affordable tuition</p>
          </div>
          <div className={styles.features_right_flex}>
            <TickIcon />
            <p>Course Material Delivery</p>
          </div>
          <div className={styles.features_right_flex}>
            <TickIcon />
            <p>Payment flexibility</p>
          </div>
          <div className={styles.features_right_flex}>
            <TickIcon />
            <p>Mentorship and guidance community after graduation</p>
          </div>
        </div>
      </div>
      <div className={styles.features_bottom}>
        <div
          className={styles.features_bottom_left}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2>We Have the Most Flexible Learning Experience on the Planet</h2>
          <ul>
            <li>
              Learn Naturopathic Medicine without disrupting your work or family
              life.
            </li>
            <li>Affordable tuition</li>
            <li>
              Payment plan up to 18 months for Diploma Courses and 4 instalments
              per session (annum) for Doctorate degrees.
            </li>
            <li>
              Teachers of international repute with diverse experience who have
              travelled far and wide.
            </li>
            <li>
              Students from different parts of the world such as UK, China,
              Qatar, Cameroon, Ghana and other African countries.
            </li>
          </ul>
          <button>Apply to a Program</button>
        </div>
        <div className={styles.features_bottom_right}>
          <img
            className={styles.features_bottom_left_img}
            src={bottomleft}
            alt=""
          />
          <img
            className={styles.features_bottom_right_img}
            src={bottomright}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
