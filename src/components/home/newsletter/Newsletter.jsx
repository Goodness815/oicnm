import styles from "./newsletter.module.css";
import book from "../../../assets/book.png";
import hat from "../../../assets/hat.png";
import student from "../../../assets/student.png";
import building from "../../../assets/building.png";

function Newsletter() {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.newsletter_left}>
        <div className={styles.newsletter_item}>
          <img src={hat} className={styles.img1} alt="" />
          90%{" "}
          <span>
            Graduation <br /> employable
          </span>
        </div>
        <div className={styles.newsletter_item}>
          <img src={book} className={styles.img2} alt="" />
          15 <span> majors</span>
        </div>
        <div className={styles.newsletter_item}>
          <img src={building} className={styles.img3} alt="" />
          68 <span>class rooms</span>
        </div>
        <div className={styles.newsletter_item}>
          <img src={student} className={styles.img4} alt="" />
          3k <span>students</span>
        </div>
      </div>
      <div className={styles.newsletter_right}>
        <div className={styles.newsletter_right_inner}>
          <h3>Subscribe to our newsletter</h3>
          <form>
            <input type="text" placeholder="Your email" name="" id="" />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
