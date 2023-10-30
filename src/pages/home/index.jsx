import Features from "../../components/home/features/Features";
import Hero from "../../components/home/hero/Hero";
import President from "../../components/home/president/President";
import Values from "../../components/home/values/Values";
import Nav from "../../components/nav";
function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Values />
      <President />
      <Features />
    </div>
  );
}

export default Home;
