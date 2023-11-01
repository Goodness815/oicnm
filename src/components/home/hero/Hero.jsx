import React from "react";
import styles from "./hero.module.css";
import { TimerIcon } from "../../../assets/svgs";
import heroimg from "../../../assets/heroimg.png";

function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
        <div
          className={styles.hero_inner}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <span>WELCOME TO OICNM</span>
          <h1>Excellence in Medical Learning</h1>
          <p>
            Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod.
          </p>
          <button>Apply to a Program</button>
        </div>
      </div>

      <div className={styles.timer_container}>
        <div className={styles.timer_inner}>
          <div className={styles.timer_item}>
            <div className={styles.timer_icon_case}>
              <TimerIcon />
            </div>
            <div className={styles.timer_text_case}>
              <h1>Integrative Curriculum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum
                dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
          <div className={styles.timer_item}>
            <div className={styles.timer_icon_case}>
              <TimerIcon />
            </div>
            <div className={styles.timer_text_case}>
              <h1>
                Expert <br /> Faculty
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum
                dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
          <div className={styles.timer_item}>
            <div className={styles.timer_icon_case}>
              <TimerIcon />
            </div>
            <div className={styles.timer_text_case}>
              <h1>
                Clinical <br /> Immersion
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum
                dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
          <div className={styles.timer_item}>
            <div className={styles.timer_icon_case}>
              <TimerIcon />
            </div>
            <div className={styles.timer_text_case}>
              <h1>Research and Innovation Hub</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum
                dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
          <div className={styles.timer_item}>
            <div className={styles.timer_icon_case}>
              <TimerIcon />
            </div>
            <div className={styles.timer_text_case}>
              <h1>Community Engagement</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum
                dolor sit amet, consectetur adipiscing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hero_flex_container}>
        <div className={styles.hero_flex_inner}>
          <div className={styles.hero_flex_left}  data-aos="fade-up"
          data-aos-duration="2000">
            <h1>Open International College Of Naturopathic Medicine</h1>
            <p>
              Founded to provide up-to-date naturopathic medicine education for
              beginners and professionals.{" "}
            </p>
            <p>
              The Open International College of Naturopathic Medicine (OICNM) is
              a world-class institution for the training of naturopathic
              medicine practitioners
            </p>
            <p>
              Our mission is to train the next generation of naturopathic
              medicine physicians and practitioners that will demonstrate the
              ideals of Naturopathic Medicine in patient care delivery
            </p>
            <p>
              Our vision is to be the front-line institution for naturopathic
              medicine education patient care, research, and community services
            </p>
            <button>Read More</button>
          </div>
          <div className={styles.hero_flex_right}>
            <div className={styles.hero_img_case}>
              <img src={heroimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
