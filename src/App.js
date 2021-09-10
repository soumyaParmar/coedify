import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import HireDevsForm from "./MultistepForm/HireDeveloper/HireDevForm";
import MultiStepForm from "./MultistepForm/MultiStepForm";
import WhyUs from "./pages/WhyUs/WhyUs";
import Vetted from "./pages/Vetted/Vetted";
import FullStackPage from "./pages/FullStackPage/FullStackPage";
import FrontendPage from "./pages/FrontendPage/FrontendPage";
import BackendPage from "./pages/BackendPage/BackendPage";
import MeanStack from "./pages/MeanStack/MeanStack";
import NativeMobilePage from "./pages/NativeMobileDeveloper/NativeMobilePage";
import DevOpsPage from "./pages/DevopsPage/DevOpsPage";
import SqlTunningDeveloper from "./pages/SqlTunningDeveloperPage/SqlTunningDeveloper";

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
          <Route exact path="/technology/backend">
            <Navbar />
            <BackendPage />
            <Footer />
          </Route>
          <Route exact path="/technology/meanstack">
            <Navbar />
            <MeanStack />
            <Footer />
          </Route>
          <Route exact path="/technology/nativemobile">
            <Navbar />
            <NativeMobilePage />
            <Footer />
          </Route>
          <Route exact path="/technology/sqltunning">
            <Navbar />
            <SqlTunningDeveloper />
            <Footer />
          </Route>
          <Route exact path="/technology/devops">
            <Navbar />
            <DevOpsPage />
            <Footer />
          </Route>
          <Route exact path="/technology/frontend">
            <Navbar />
            <FrontendPage />
            <Footer />
          </Route>
          <Route exact path="/technology/fullstack">
            <Navbar />
            <FullStackPage />
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
