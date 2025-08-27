import Navbar from "../../components/Navbar/Navbar";
import ContactBar from "../../components/ContactBar/ContactBar";
import Hero from "../../components/Hero/Hero";
import KeyFeature from "../../components/keyFeature/keyFeature";
import OnlineQuizzes from "../../components/OnlineQuizzes/OnlineQuizzes";
import StatsSection from "../../components/StatsSection/StatsSection";
import LearningPrograms from "../../components/LearningPrograms/LearningPrograms";
import AboutSection from "../../components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div className="font-Poppins">
      <ContactBar />
      <Navbar />
      <Hero />
      <KeyFeature />
      <OnlineQuizzes />
      <StatsSection />
      <AboutSection />
      <LearningPrograms />
    </div>
  );
}
