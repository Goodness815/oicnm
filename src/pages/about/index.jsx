import Facilities from "../../components/about/facilities/Facilities";
import Faq from "../../components/about/faq/AboutFaq";
import AboutHero from "../../components/about/hero/AboutHero";
import Leadership from "../../components/about/leadership/Leadership";
import Footer from "../../components/footer/Footer";
import Values from "../../components/home/values/Values";
import Nav from "../../components/nav";
import styles from "./about.module.css";

function About() {
  const valuesData = [
    {
      title: "Accreditation and Recognition",
      para: "At our medical college, Integrity and Ethics form the cornerstone of our education.",
    },
    {
      title: "Faculty and Expertise",
      para: " Our medical college champions a Holistic Approach, nurturing compassionate healthcare professionals.",
    },
    {
      title: "Research and Innovation",
      para: "Our medical college is dedicated to excellence in education.",
    },
    {
      title: "Integrative Curriculum",
      para: " At our medical college, we prioritise Empowerment and Compassion.",
    },
    {
      title: "Clinical Excellence",
      para: "Innovation and Integration are the driving forces at our medical college.",
    },
    {
      title: "Community Engagement and Impact",
      para: "Innovation and Integration are the driving forces at our medical college.",
    },
    {
      title: "Global Reach",
      para: "Innovation and Integration are the driving forces at our medical college.",
    },
    {
      title: "Future Outlook",
      para: "Innovation and Integration are the driving forces at our medical college.",
    },
  ];

  return (
    <div>
      <Nav bg={false} about={true} />
      <div className={styles.hero}></div>
      <AboutHero />
      <Values
        title="Our Values"
        para="Our values that drive success"
        data={valuesData}
      />
      <Facilities state={true} />
      <Facilities />
      <Leadership />
      <Faq />
      <Footer />
    </div>
  );
}

export default About;
