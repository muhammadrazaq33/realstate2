import About from "./Components/About.js";
import Features from "./Components/Features.js";
import Footer from "./Components/Footer.js";
import Hero from "./Components/Hero.js";
import Manager from "./Components/Manager.js";
import Navbar from "./Components/Navbar.js";
import QuestionAnswer from "./Components/QuestionAnswer.js";
import Review from "./Components/Review.js";
import Unlock from "./Components/Unlock.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Unlock />
      <Manager />
      <Features />
      <Review />
      <QuestionAnswer />
      <Footer />
    </div>
  );
}
