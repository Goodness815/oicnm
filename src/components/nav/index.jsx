import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import { Logo, MailIcon, SearchIcon } from "../../assets/svgs";
import { Link } from "react-router-dom";

function Nav() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${scrolling ? `${styles.nav_scrolled}` : ""} ${
          styles.nav_container
        }`}
      >
        <div className={styles.top_bar}>
          <MailIcon />{" "}
          <span>For enquiries, contact us at info@theoicnm.com</span>
        </div>
        <div className={styles.nav_inner}>
          <div className={styles.nav_inner_right}>
            <Logo />
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Programmes</Link>
              </li>
              <li>
                <Link to="">Alumni</Link>
              </li>
              <li>
                <Link to="">Admission</Link>
              </li>
              <li>
                <Link to="">Career</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.nav_inner_left}>
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
