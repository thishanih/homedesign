import React from "react";
import { Routes, Route } from "react-router-dom";
import House from "./page/House";
import SingleHouse from "./page/SingleHouse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/house/:id" element={<SingleHouse />} />
      </Routes>
    </>
  );
}

export default App;
