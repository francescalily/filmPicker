import React from "react";
import * as Pages from "./pages";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
