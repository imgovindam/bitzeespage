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
      <div className="App  min-h-screen ">
        <div>
          <Navbar />
          {/* <Dummy /> */}
        </div>
        <div className="mt-16  mx-auto ">
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

// import "./App.css";
// import About from "./Components/About";
// import Chatbot from "./Components/Chatbot";
// import Feature from "./Components/Feature";
// import Featurethree from "./Components/Featurethree";
// import Featuretwo from "./Components/Featuretwo";
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";

// function App() {
//   return (
//     <>
//       <div className="App min-h-screen">
//         <div>
//           <Navbar />
//         </div>
//         <div className="mt-16 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
//           <Home />
//         </div>
//         <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
//           <About />
//         </div>
//         <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
//           <Feature />
//         </div>
//         <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
//           <Featuretwo />
//         </div>
//         <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
//           <Featurethree />
//         </div>
//         <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
//           <Footer />
//         </div>
//         <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
//           <Chatbot />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
