import Faq from "react-faq-component";
import styles from "./faq.module.css";
function AboutFaq() {
  const data = {
    rows: [
      {
        title:
          "What is the Open International College of Naturopathic Medicine (OICNM)?",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title:
          "Is the Open International College of Naturopathic Medicine accredited?",
        content:
          "Yes, the OICNM is fully accredited by recognised accrediting bodies, ensuring that our educational programmes meet rigorous standards and are of high quality. Go to the Recognition page to see our list of accreditation bodies",
      },
      {
        title: "What are the admission requirements for the OICNM?",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "Can international students apply to the OICNM?",
        content: "v1.0.5",
      },
      {
        title: "What programmes does the OICNM offer?",
        content: "v1.0.5",
      },
      {
        title:
          "How long is the academic year, and what are the study schedules like?",
        content: "v1.0.5",
      },
      {
        title: "Does the OICNM offer financial aid or scholarships?",
        content: "v1.0.5",
      },
    ],
  };

  return (
    <div className={styles.faq_container}>
      <span>Faq</span>
      <h2>The OICNM FAQs</h2>
      <div className={styles.faq_main}>
        <Faq data={data} />
      </div>
    </div>
  );
}

export default AboutFaq;
