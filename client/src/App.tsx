import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Counter } from "./features/counter/Counter";
import Login from "./components/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
