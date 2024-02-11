import React from "react";
// import ReactDOM from "react-dom/client";
import Main, { loader as mainLoader } from '../Main/Main.js';
import { 
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements,
  Route } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Main />} loader={mainLoader}/>
));


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
