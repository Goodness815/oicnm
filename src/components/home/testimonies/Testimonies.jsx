import { useState } from "react";
import { QuoteIcon } from "../../../assets/svgs";
import testimage from "../../../assets/testimonial.png";
import styles from "./testimonies.module.css";

function Testimonies() {
  const [state, setState] = useState(1);

  const handleNext = () => {
    if (state === 3) {
      setState(1);
    } else {
      setState((prv) => prv + 1);
    }
  };
  const handlePrv = () => {
    if (state === 1) {
      setState(3);
    } else {
      setState((prv) => prv - 1);
    }
  };

  return (
    <div className={styles.testimonies_container}>
      <div className={styles.testimonies_inner}>
        <span>testimonials</span>
        <h2>
          Study Experience at Open International College of Naturopathic
          Medicine
        </h2>
        {state === 1 && (
          <div className={styles.reviews_main}>
            <div className={styles.reviews_left}>
              <div className={styles.reviews_img_container}>
                <img src={testimage} alt="image of a girl" />
              </div>
            </div>
            <div
              className={styles.reviews_right}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <QuoteIcon />
              <p>
                My experience while studying at OICNM was an amazing one. It was
                a different experience from when I spent 4 years in the tertiary
                institution. Very tasking and intriguing, one couldn’t predict
                what to wake up to, every lesson day, it’s different from the
                read-and-pass methods employed in most schools. So dynamic and
                impactful. Thank God, in the end.
              </p>
              <QuoteIcon />
              <div className={styles.review_author}>
                <h3>HAJARAT MOTUNRAYO MUHAMMAD</h3>
                <span>South Yorkshire, United Kingdom</span>
              </div>

              <div className={styles.review_button_flex}>
                <button onClick={handlePrv}>{"<"}</button>
                <button onClick={handleNext}>{">"}</button>
              </div>
            </div>
          </div>
        )}
        {state === 2 && (
          <div className={styles.reviews_main}>
            <div className={styles.reviews_left}>
              <div className={styles.reviews_img_container}>
                <img src={testimage} alt="image of a girl" />
              </div>
            </div>
            <div
              className={styles.reviews_right}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <QuoteIcon />
              <p>
                My experience while studying at OICNM was an amazing one. It was
                a different experience from when I spent 4 years in the tertiary
                institution. Very tasking and intriguing, one couldn’t predict
                what to wake up to, every lesson day, it’s different from the
                read-and-pass methods employed in most schools. So dynamic and
                impactful. Thank God, in the end.
              </p>
              <QuoteIcon />
              <div className={styles.review_author}>
                <h3>SEWO GOODNESS</h3>
                <span>South Yorkshire, Nigeria</span>
              </div>

              <div className={styles.review_button_flex}>
                <button onClick={handlePrv}>{"<"}</button>
                <button onClick={handleNext}>{">"}</button>
              </div>
            </div>
          </div>
        )}
        {state === 3 && (
          <div className={styles.reviews_main}>
            <div className={styles.reviews_left}>
              <div className={styles.reviews_img_container}>
                <img src={testimage} alt="image of a girl" />
              </div>
            </div>
            <div
              className={styles.reviews_right}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <QuoteIcon />
              <p>
                My experience while studying at OICNM was an amazing one. It was
                a different experience from when I spent 4 years in the tertiary
                institution. Very tasking and intriguing, one couldn’t predict
                what to wake up to, every lesson day, it’s different from the
                read-and-pass methods employed in most schools. So dynamic and
                impactful. Thank God, in the end.
              </p>
              <QuoteIcon />
              <div className={styles.review_author}>
                <h3>DANIEL UMOREN</h3>
                <span>South Yorkshire, United Ekiti</span>
              </div>

              <div className={styles.review_button_flex}>
                <button onClick={handlePrv}>{"<"}</button>
                <button onClick={handleNext}>{">"}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Testimonies;
