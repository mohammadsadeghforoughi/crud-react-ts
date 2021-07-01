import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./router";
import './App.css'


function App() {
  return <Router>{routes}</Router>;
}

export default App;
