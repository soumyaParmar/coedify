// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import "./App.css";
// import ScrollToTop from "./Components/ScrollToTop";
// import Technology from "./pages/Technology/Technology";
import Home from "./pages/Home";
// import Contact from "./pages/Contactus/Contact";
import Section from "./pages/Section-2/Section";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Section /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/Technology" component={Technology} /> */}
          {/* <Route exact path="/contactus" component={Contact} /> */}
        </Switch>
      </BrowserRouter>
      {/* <ScrollToTop /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
