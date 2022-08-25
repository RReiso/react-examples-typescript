import React from "react";
import "./App.css";
import Page from "./components/Page";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Page />
      </div>
    </ThemeProvider>
  );
}

export default App;
