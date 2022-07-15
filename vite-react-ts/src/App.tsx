import * as React from 'react';
// react-router-v6
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import logo from "./logo.svg";
import routes from './router/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
