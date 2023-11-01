import styles from "./newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles.newsletter_container}>
      <div className={styles.newsletter_left}>
        <div className={styles.newsletter_item}>
          90%{" "}
          <span>
            Graduation <br /> employable
          </span>
        </div>
        <div className={styles.newsletter_item}>
          15 <span> majors</span>
        </div>
        <div className={styles.newsletter_item}>
          68 <span>class rooms</span>
        </div>
        <div className={styles.newsletter_item}>
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
