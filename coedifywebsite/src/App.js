import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Service from "./Components/Services/Services";
import About from "./Components/About us/About";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Components/Contactus/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Service />
        <About />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
