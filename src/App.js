import { useContext } from "react";
import Contact from "./components/contact/Contact.jsx";
import Experience from "./components/experience/Experience.jsx";
import Footer from "./components/footer/Footer.jsx";
import Intro from "./components/intro/Intro.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Services from "./components/services/Services.jsx";
import Testimonial from "./components/testimonials/Testimonials.jsx";
import Works from "./components/works/Works.jsx";
import { themeContext } from "./Context.js";

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',

      }}

    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      {<Footer />}
    </div>
  );
}

export default App;
