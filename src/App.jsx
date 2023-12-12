import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
import Loader from "./pages/loader/loader";
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Footer from "./components/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Experience from "./components/Experience";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const personalDetails = {
    name: "Kean Bayneslow",
    location: "Australia",
    email: "kean.bayneslow@gmail.com",
    brand:
      "A Front End Developer with a passion for creating clean, engaging user experiences and intuitive digital interfaces.",
  };

  const location = useLocation();

  // State to manage loader visibility
  const [showLoader, setShowLoader] = useState(true);

  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    // Hide loader when initial route is loaded
    if (location.pathname !== "/") {
      setShowLoader(false);
    }

    // Store the original document title
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    // Handle document title change when tab visibility changes
    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "👋🏻 The Main Quest Awaits";
      } else {
        document.title = originalTitle;
      }
    };

    // Listen for visibility change events
    window.addEventListener("visibilitychange", handleTabChange);
    return () =>
      window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      {showLoader ? (
        // Show loader until initial route is loaded
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          {/* Header */}
          <Header />
          {/* Define routes */}
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Landing
                  name={personalDetails.name}
                  tagline={personalDetails.tagline}
                />
              }
            />
            <Route path="/experience" element={<Experience />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/resume"
              element={<Resume brand={personalDetails.brand} />}
            />

            <Route
              path="/contact"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route
              path="/portfolio/:projectTitle"
              element={<ProjectDetails />}
            />
            {/* Fallback route for unknown paths */}
            <Route path="*" element={<Navigate to="/page-not-found" />} />
          </Routes>
          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
