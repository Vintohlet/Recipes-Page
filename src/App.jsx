import "./assets/style.css";
import Header from "./components/layout/Header";
import {  useLocation } from "react-router-dom";

import { useEffect } from "react";

import AppRouter from "./core/AppRouter";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <AppRouter/>
    </>
  );
}

export default App;
