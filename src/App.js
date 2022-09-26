import React,{memo} from "react";
import Shadows from "./components/Shadows";
import Navbar from "./components/Navbar";
import PostShadow from "./components/PostShadow.jsx";
import CustomShadow from "./components/CustomShadow";
import About from "./components/About";

/* Importing the react-router-dom library. */
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    /* Routing the pages. */
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shadows />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/CustomShadow"
          element={
            <PostShadow
              Data={CustomShadow}
              Title="Generate Your Shadow hear."
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default memo(App);
