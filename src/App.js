import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="flex bg-[#292929] text-[#FFFFFF]">
      <div className="w-[80px]">
        <Navbar />
      </div>
      <div className="w-full">
        <Home />
        <About />
        <Education />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;

//#292929, #616161, #FFFFFF