import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import {
  ArrowDown,
  BlackArrowDown,
  BlackLogo,
  BlackSearchIcon,
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
  const [showAdmissionMenu, setShowAdmissionMenu] = useState(false);

  function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
    setNavState(!navState);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setNavState(!navState);
  }

  function toggleAdmissionMenu() {
    setShowAdmissionMenu(!showAdmissionMenu);
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
              <li
                onMouseEnter={toggleAdmissionMenu}
                onMouseLeave={toggleAdmissionMenu}
                className={styles.admissionMenu_main}
              >
                <Link to="">
                  Admission{" "}
                  {about ? (
                    <BlackArrowDown className={styles.arrowDown} />
                  ) : (
                    <ArrowDown className={styles.arrowDown} />
                  )}
                </Link>
                {showAdmissionMenu && (
                  <ul className={styles.admissionSubMenu}>
                    <li>Application Procedure</li>
                    <li>Scholarship and Financial Aids</li>
                  </ul>
                )}
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
            {about ? (
              <BlackSearchIcon className={styles.searchIcon} />
            ) : (
              <SearchIcon className={styles.searchIcon} />
            )}
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
