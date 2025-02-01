import "./assets/style.css";
import Header from "./layout/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { createContext } from "react";
import AppRouter from "./core/AppRouter";
import Layout from "./core/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export const ThemeContext = createContext();
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Provider store={store}>
      <Layout>
      <AppRouter />
    </Layout>
    </Provider>
  );
}

export default App;
