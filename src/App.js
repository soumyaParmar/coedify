import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Technology from "./pages/Technology/Technology";
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs/WhyUs";
import Vetted from "./pages/Vetted/Vetted";
import FullStackPage from "./pages/FullStackPage/FullStackPage";
import Footer from "./Components/Footer/Footer";
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
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Technology/backend" component={BackendPage} />
          <Route exact path="/Technology/meanstack" component={MeanStack} />
          <Route
            exact
            path="/Technology/nativemobile"
            component={NativeMobilePage}
          />
          <Route
            exact
            path="/Technology/sqltunning"
            component={SqlTunningDeveloper}
          />
          <Route exact path="/Technology/devops" component={DevOpsPage} />

          <Route exact path="/Technology/frontend" component={FrontendPage} />

          <Route exact path="/Technology/fullstack" component={FullStackPage} />
          <Route exact path="/Technology" component={Technology} />
          <Route exact path="/whyus" component={WhyUs} />
          <Route exact path="/vettingprocess" component={Vetted} />
        </Switch>
      </BrowserRouter>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
