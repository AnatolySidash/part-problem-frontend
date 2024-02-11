import React from "react";
import Main from '../Main/Main.js';
import Problems, { loader as problemsLoader } from "../Problems/Problems.js";
import ProblemDetails from "../ProblemDetails/ProblemDetails.js";
import Layout from '../Layout/Layout.js';
import { 
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements,
  Route } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(

  <Route element={<Layout />}>
    <Route path="/" element={<Main />} />
    <Route path="problems" element={<Problems />} loader={problemsLoader} />
    <Route path="problems/:id" element={<ProblemDetails />} />
  </Route>
));


function App() {

  return (
    <div className="root">
      <div className="page">
        <RouterProvider 
          router={router} 
          />
      </div>
    </div>
  );
}

export default App;
