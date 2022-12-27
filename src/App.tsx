import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// @ts-ignore
import Home from "./pages/Home.tsx"
// @ts-ignore
import Problems from "./pages/Problems.tsx"
// @ts-ignore
import Problem from "./pages/Problem.tsx"
// @ts-ignore
import Login from "./components/Login.tsx"
// @ts-ignore
import Register from "./components/Register.tsx"

function App() {
  return (
      <BrowserRouter>
          {/*<Home/>*/}
          <Routes>
              <Route path="/" element={<Home/>}>
              <Route path="problems" element={<Problems/>}/>
              <Route path="problems/:problemId" element={<Problem/>}/>
              <Route path="contests" element={<div>Contests page is under development...</div>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              </Route>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
