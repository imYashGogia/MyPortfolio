import "./App.css";
import Navbar from "./components/Header/Navbar";
import LandingPage from "./components/LandingPage/landingPage";
import AboutMe from "./components/About/aboutMe";
import Technologystack from "./components/Skills/technologystack";
import Certificate from "./components/Certificate/certificate";
import Contact from "./components/Footer/contact";
import Projects from "./components/Projects/projectSection";
import AllProjects from "./components/Projects/allProjects";
import RecommendationSection from "./components/Recommendation/recommendationSection";
import AllRecommendation from "./components/Recommendation/allRecommendation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "./components/ContextAPI/context";

function App() {
  //Parent component to wrap all the components
  const AllComponents = () => (
    <>
      <LandingPage />
      <AboutMe />
      <Technologystack />
      <Certificate />
      <Projects />
      <RecommendationSection />
    </>
  );

  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllComponents />} />
          <Route path="/AllProjects" element={<AllProjects />} />
          <Route path="/AllRecommendation" element={<AllRecommendation />} />
        </Routes>
        <Contact />
      </Router>
    </Provider>
  );
}

export default App;
