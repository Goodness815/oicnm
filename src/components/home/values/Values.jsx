import { TimerIcon } from "../../../assets/svgs";
import styles from "./values.module.css";

function Values({ title, para, data }) {
 
  return (
    <div className={styles.values_container}>
      <h4>{title}</h4>
      <h2>{para}</h2>
      <div className={styles.values_inner}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.values_inner_item}>
              <TimerIcon fill={true} />
              <h2>{item.title}</h2>
              <p>{item.para}</p>
            </div>
          );
        })}
        {/* <div className={styles.values_inner_item}>
          <TimerIcon fill={true} />
          <h2>Holistic Approach</h2>
          <p>
            Our medical college champions a Holistic Approach, nurturing
            compassionate healthcare professionals.
          </p>
        </div>
        <div className={styles.values_inner_item}>
          <TimerIcon fill={true} />
          <h2>Excellence in Education</h2>
          <p>Our medical college is dedicated to excellence in education.</p>
        </div>
        <div className={styles.values_inner_item}>
          <TimerIcon fill={true} />
          <h2>Empowerment & Compassion</h2>
          <p>
            At our medical college, we prioritise Empowerment and Compassion.
          </p>
        </div>
        <div className={styles.values_inner_item}>
          <TimerIcon fill={true} />
          <h2>Innovation & Integration</h2>
          <p>
            Innovation and Integration are the driving forces at our medical
            college.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Values;
