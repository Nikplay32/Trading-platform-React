import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Prices from "./components/Prices";
import Contacts from "./components/Contacts";
import Separator from "./components/Separator";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <HomePage />
                <Footer />
              </div>
            }
          />
          <Route path="/registration" 
          element={
              <div>
                <Navbar />
                <Login />
                <Footer />
              </div>
            } 
          />
          <Route path="/admin" 
          element={
              <div>
                <Navbar />
                <div className="h-4 bg-[#00df9a]"></div>
                <Admin />
                <div className="h-4 bg-[#00df9a]"></div>
                <Footer />
              </div>
            }
          />
          <Route path="/error" element={<Err />} />
        </Routes>
      </Router>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Separator />
      <Prices />
      <Separator />
      <Contacts />
    </div>
  );
}

function Err() {
  return (
    <div>
      <Error />
    </div>
  );
}

export default App;
