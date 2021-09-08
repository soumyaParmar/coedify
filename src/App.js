import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HireDevsForm from "./MultistepForm/HireDeveloper/HireDevForm";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs/WhyUs";
import Vetted from "./pages/Vetted/Vetted";
import MultiStepForm from "./MultistepForm/MultiStepForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route exact path="/applyasdev" component={MultiStepForm} />
          <Route exact path="/hiredev" component={HireDevsForm} />
        </Switch>
      </BrowserRouter>
      <ScrollToTop />
    </div>
  );
}

export default App;
