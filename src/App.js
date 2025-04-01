import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
          </Routes>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
