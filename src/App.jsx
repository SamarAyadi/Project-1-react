import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hello from "./Components/Hello/Hello";
import Listing from "./Components/Listing/Listing";
import Navbar from "./Components/Navbar/Navbar";
import Popular from "./Components/Popular/Popular";
import Sponsors from "./Components/Sponsors/Sponsors";
import Subscribe from "./Components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <Hello />
      <Sponsors />
      <Popular />
      <Listing />
      <About />
      <Contact />
      <Subscribe />
      <Footer />

    </>
  );
}

export default App;
