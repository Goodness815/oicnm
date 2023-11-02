import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "../../assets/svgs";
import styles from "./footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_left}>
          <Logo />
          <p>
            We're a premier institution dedicated to excellence in medical
            education, emphasizing compassion and integrity. Our expert faculty
            provides a comprehensive, hands-on experience, nurturing both
            knowledge and empathy.{" "}
          </p>
          <div className={styles.socials}>
            <FacebookIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
            <TwitterIcon className={styles.icon} />
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About Us</li>
          <li>Programmes</li>
          <li>Faculty</li>
          <li>Contact Us</li>
          <li>Giving</li>
        </ul>
        <ul>
          <li>
            <Link to="/blog">Our Blog</Link>
          </li>
          <li>Policy</li>
          <li>Events</li>
          <li>Careers</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Refund Policy</li>
          <li>Plagarism Policy</li>
          <li>Support OICNM</li>
          <li>Study Guide</li>
        </ul>
      </div>
      <div className={styles.footer_bottom}>
        <span>
          Copyright © {currentYear} Open International College of Naturopathic
          Medicine. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
