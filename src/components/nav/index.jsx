import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import {
  BlackLogo,
  CloseIcon,
  HamburgerIcon,
  Logo,
  MailIcon,
  SearchIcon,
} from "../../assets/svgs";
import { Link } from "react-router-dom";

function Nav({ bg, about }) {
  const [scrolling, setScrolling] = useState(false);
  const [navState, setNavState] = useState(false);

  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
    setNavState(!navState);
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setNavState(!navState);
  }

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
        } ${about ? `${styles.black}` : ""}`}
        style={bg ? { backgroundColor: "rgb(0, 104, 55)" } : {}}
      >
        <div className={styles.top_bar}>
          <MailIcon />{" "}
          <span>For enquiries, contact us at info@theoicnm.com</span>
        </div>
        <div className={styles.nav_inner}>
          <div className={styles.nav_inner_right}>
            {about ? <BlackLogo /> : <Logo />}
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
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
            <SearchIcon className={styles.searchIcon} />
            <input type="text" placeholder="Search" />

            {navState ? (
              <CloseIcon
                className={styles.closebtn}
                onClick={() => closeNav()}
                style={about && { color: "black" }}
              />
            ) : (
              <HamburgerIcon
                className={styles.hamburger}
                onClick={() => openNav()}
                style={about && { color: "black" }}
              />
            )}
          </div>
        </div>
        <div className={styles.bottom_bar}></div>
      </div>

      <div id="mySidenav" class={styles.sidenav}>
        <div style={{ marginLeft: "10px" }}>
          <Logo />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
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
        <div className={styles.sidenav_inner}>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
      </div>
    </>
  );
}

export default Nav;
