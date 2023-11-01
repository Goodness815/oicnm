import { CmailIcon, PhoneIcon } from "../../../assets/svgs";
import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_inner}>
        <span>Contact us</span>
        <h2>Get in Touch with Us Today!</h2>
        <div className={styles.contact_flex}>
          <div className={styles.contact_item}>
            <div className={styles.contact_icon_case}>
              <PhoneIcon />
            </div>
            <div className={styles.contact_text_case}>
              <h5>PHONE</h5>
              <span>(+234) 703 200 0000</span>
            </div>
          </div>
          <div className={styles.contact_item}>
            <div className={styles.contact_icon_case}>
              <CmailIcon />
            </div>
            <div className={styles.contact_text_case}>
              <h5>MAIL</h5>
              <span>info@theoicnm.com</span>
            </div>
          </div>
        </div>

        <form>
          <div className={styles.form_flex}>
            <input type="text" placeholder="First Name" name="" id="" />
            <input type="text" placeholder="Last Name" name="" id="" />
          </div>
          <div className={styles.form_flex}>
            <input type="number" placeholder="Phone Number" name="" id="" />
            <input type="email" placeholder="Email" name="" id="" />
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>SUBMIT NOW</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
