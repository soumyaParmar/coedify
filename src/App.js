import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Technology from "./pages/Technology/Technology";
import Home from "./pages/Home";
import Contact from "./pages/Contactus/Contact";
import WhyUs from "./pages/WhyUs/WhyUs";
import Vetted from "./pages/Vetted/Vetted";
import MultiStepForm from "./MultistepForm/MultiStepForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Technology" component={Technology} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/whyus" component={WhyUs} />
          <Route exact path="/vettingprocess" component={Vetted} />
          <Route exact path="/applyasdev" component={MultiStepForm} />
        </Switch>
      </BrowserRouter>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
