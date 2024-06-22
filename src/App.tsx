import React, { ReactElement, useEffect } from "react";
// import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import AOS from "aos";

function App(): ReactElement {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Hero />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
