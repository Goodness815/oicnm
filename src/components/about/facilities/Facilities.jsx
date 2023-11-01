import styles from "./facilities.module.css";

function Facilities({ state }) {
  return (
    <div
      style={state ? { backgroundColor: "#F4F9EC" } : {}}
      className={styles.facility_container}
    >
      {!state && (
        <>
          {" "}
          <h2>Facilities</h2>
          <p data-aos="fade-up" data-aos-duration="2000">
            We pride ourselves on providing state-of-the-art facilities that
            empower our students, faculty, and researchers to excel in their
            pursuit of medical knowledge and healthcare excellence. Our
            cutting-edge facilities are carefully designed to support learning,
            research, and clinical practice, ensuring that you have the best
            resources at your fingertips.
          </p>
        </>
      )}
      {state ? (
        <div className={styles.facility_inner}>
          <div data-aos="zoom-in" className={styles.facility_item}>
            <h4>Accreditation</h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className={`${styles.facility_item} ${styles.facility_item_right}`}
          >
            <h4>
              Recognition by the Council of West African Provosts of Alternative
              Medical Colleges
            </h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div data-aos="zoom-in" className={styles.facility_item}>
            <h4>
              Educational Membership with the World Naturopathic Federation
              (WNF)
            </h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className={`${styles.facility_item} ${styles.facility_item_right}`}
          >
            <h4>
              Meeting Standard Requirements Set by All Accreditation Bodies
            </h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.facility_inner}>
          <div data-aos="zoom-in" className={styles.facility_item}>
            <h4>Modern Classrooms</h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className={`${styles.facility_item} ${styles.facility_item_right}`}
          >
            <h4>Herbal Medicine Lab</h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div data-aos="zoom-in" className={styles.facility_item}>
            <h4>Acupuncture Clinic</h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className={`${styles.facility_item} ${styles.facility_item_right}`}
          >
            <h4>Reproductive and Fertility Medicine Centre:</h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div data-aos="zoom-in" className={styles.facility_item}>
            <h4>Library and Resource Centre</h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            className={`${styles.facility_item} ${styles.facility_item_right}`}
          >
            <h4>Online Learning Platform</h4>
            <p>
              To ease the transition to a new country and culture, OICNM offers
              cultural orientation sessions to help international students
              acclimate to the clinic environment and the local community.
            </p>
          </div>
          <div
            className={styles.facility_item}
            data-aos="zoom-in"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div className={styles.facility_item_last} data-aos="zoom-in">
              <h4>Student Support Services</h4>
              <p>
                To ease the transition to a new country and culture, OICNM
                offers cultural orientation sessions to help international
                students acclimate to the clinic environment and the local
                community.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Facilities;
