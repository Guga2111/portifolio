import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import BullsCows from "./components/BullsCows";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/contact" className="link">
            Contact Me
          </Link>
          <Link to="/bullscows" className="link">
            Let's play bulls and cows!
          </Link>
        </div>

        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header></Header>
                  <About></About>
                </div>
              }
            ></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/bullscows" element={<BullsCows></BullsCows>}></Route>
          </Routes>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
