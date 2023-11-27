import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Work from "./components/Work/work";
import Contact from "./components/ContacMe/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
