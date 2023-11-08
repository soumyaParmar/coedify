import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollTo from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MentorshipProgram from "./pages/MentorshipProgram/MentorshipProgram";
import Home from "./pages/Home";
import HireDevsForm from "./MultistepForm/HireDeveloper/HireDevForm";
import MultiStepForm from "./MultistepForm/MultiStepForm";
import WhyUs from "./pages/WhyUs/WhyUs";
// import Login from "./Components/AdminLogin/Login";
import Vetted from "./pages/Vetted/Vetted";
import TechnologiesPage from "./pages/TechnologiesPage/TechnologiesPage";
import ScrollToTop from "./Components/ScrollToTop/Scroll";
import AboutUs from "./Components/aboutUs/AboutUS";
import Blogs from "./Components/Blogs/Blogs";
import MarkdownRenderer from "./Components/Blogs/MrkDown/MarkdownRenderer";
// import Dashboard from "./Components/AdminLogin/Dashboard";
// import { useLocation } from "react-router-dom";
// import { useRef } from "react";

function App() {
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  // const executeScroll = () => scrollToRef(Ref);
  // const Ref = useRef();
  return (
    <div className="App">
      <BrowserRouter scrollBehavior="instant">
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/whyus">
            <Navbar />
            <WhyUs />
            <Footer />
          </Route>
          <Route exact path="/services">
            <Navbar />
            <Vetted />
            <Footer />
          </Route>
          <Route exact path="/technology/:id">
            <Navbar />
            <TechnologiesPage />
            <Footer />
          </Route>
          <Route exact path="/programpage">
            <Navbar />
            <MentorshipProgram />
            <Footer />
          </Route>
          <Route exact path="/about">
            <Navbar />
            <AboutUs />
            <Footer />
          </Route>
          <Route exact path="/blogs">
            <Navbar />
            <Blogs />
            <Footer />
          </Route>
          <Route exact path="/blog1">
            <Navbar />
            <MarkdownRenderer />
            <Footer />
          </Route>
          <Route exact path="/applyasdev" component={MultiStepForm} />
          <Route exact path="/hiredev" component={HireDevsForm} />

          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </BrowserRouter>
      <ScrollTo />
    </div>
  );
}

export default App;
