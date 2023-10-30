import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Separator from "./components/Separator";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
