import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <About></About>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
