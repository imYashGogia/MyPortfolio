import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/landingPage";
import AboutMe from "./components/aboutMe";
import Technologystack from "./components/technologystack";
import Certificate from "./components/certificate";
import Projects from "./components/projectSection";
import Contact from "./components/contact";
import RecommendationSection from "./components/recommendationSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Create a parent component to wrap all the components
  const AllComponents = () => (
    <>
      <LandingPage name="Yash Gogia" />
      <AboutMe />
      <Technologystack />
      <Certificate />
      <Projects />
      <RecommendationSection />
    </>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllComponents />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
