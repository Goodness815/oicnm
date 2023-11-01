import Footer from "../../components/footer/Footer";
import Campus from "../../components/home/campus/Campus";
import Contact from "../../components/home/contact/Contact";
import Features from "../../components/home/features/Features";
import Hero from "../../components/home/hero/Hero";
import Newsletter from "../../components/home/newsletter/Newsletter";
import President from "../../components/home/president/President";
import Testimonies from "../../components/home/testimonies/Testimonies";
import Values from "../../components/home/values/Values";
import Nav from "../../components/nav";
import Blog from "../blog";
function Home() {
  const valuesData = [
    {
      title: "Integrity & Ethics",
      para: "At our medical college, Integrity and Ethics form the cornerstone of our education.",
    },
    {
      title: "Holistic Approach",
      para: " Our medical college champions a Holistic Approach, nurturing compassionate healthcare professionals.",
    },
    {
      title: "Excellence in Education",
      para: "Our medical college is dedicated to excellence in education.",
    },
    {
      title: "Empowerment & Compassion",
      para: " At our medical college, we prioritise Empowerment and Compassion.",
    },
    {
      title: "Innovation & Integration",
      para: "Innovation and Integration are the driving forces at our medical college.",
    },
  ];

  return (
    <div>
      <Nav />
      <Hero />
      <Values
        title="Core Values"
        para="Nurturing Excellence, 
Compassion, and Integrity"
        data={valuesData}
      />
      <President />
      <Features />
      <Newsletter />
      <Campus />
      <Testimonies />
      <Blog home={true} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
