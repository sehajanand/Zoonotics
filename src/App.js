import Footer from "./Components/Footer.js";
import About from "./Components/About.js";
import Header from "./Components/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Main.js";
import Esports from "./Components/Esports";
import Aboutheader from "./Components/Aboutheader";
import Esportsheader from "./Components/Esportsheader";
import Comingsoon from "./Components/Comingsoon";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/About" element={<Aboutheader />} />
          <Route path="/Esports" element={<Esportsheader />} />
        </Routes>

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/About" element={<About />} />
            <Route path="/Esports" element={<Esports />} />
            <Route path="/Cs" element={<Comingsoon />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
