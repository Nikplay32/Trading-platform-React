import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Separator from "./components/Separator";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Contacts />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
