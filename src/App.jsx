import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Recommend from "./Components/Recommend";
import Searchbar from "./Components/Searchbar";
import Sidebar from "./Components/Sidebar";
import Trending from "./Components/Trending";

const App = () => {
  return (
    <div className=" ">
      <div className=" d-flex  text-white">
        <div className=" ">
          <Sidebar />
        </div>
        <div className="mt-3 right-side">
          <Searchbar />
          <Trending />
          <Recommend />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
