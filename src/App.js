import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollTo from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import HireDevsForm from "./MultistepForm/HireDeveloper/HireDevForm";
import MultiStepForm from "./MultistepForm/MultiStepForm";
import WhyUs from "./pages/WhyUs/WhyUs";
import Vetted from "./pages/Vetted/Vetted";
import TechnologiesPage from "./pages/TechnologiesPage/TechnologiesPage";
import ScrollToTop from "./Components/ScrollToTop/Scroll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route exact path="/vettingprocess">
            <Navbar />
            <Vetted />
            <Footer />
          </Route>
          <Route exact path="/technology/:id">
            <Navbar />
            <TechnologiesPage />
            <Footer />
          </Route>
          <Route exact path="/applyasdev" component={MultiStepForm} />
          <Route exact path="/hiredev" component={HireDevsForm} />
        </Switch>
      </BrowserRouter>
      <ScrollTo />
    </div>
  );
}

export default App;
