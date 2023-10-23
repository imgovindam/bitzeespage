import "./App.css";
import About from "./Components/About";
import Chatbot from "./Components/Chatbot";
import Feature from "./Components/Feature";
import Featurethree from "./Components/Featurethree";
import Featuretwo from "./Components/Featuretwo";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="App  ">
        <div>
          <Navbar />
          {/* <Dummy /> */}
        </div>
        <div className="mt-16 ">
          <Home />
        </div>
        <div className="">
          <About />
        </div>
        <div className="">
          <Feature />
        </div>
        <div className="">
          <Featuretwo />
        </div>
        <div className="">
          <Featurethree />
        </div>
        <div className="">
          <Footer />
        </div>
        <div className="">
          <Chatbot />
        </div>
      </div>
    </>
  );
}

export default App;
