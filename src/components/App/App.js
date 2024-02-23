import React from "react";
import Main from '../Main/Main.js';
import Problems, { loader as problemsLoader } from "../Problems/Problems.js";
import ProblemDetails from "../ProblemDetails/ProblemDetails.js";
import NewProblem from "../NewProblem/NewProblem.js";
import ProblemAnalysis from "../ProblemAnalysis/ProblemAnalysis.js";
import ProblemsLayout from "../ProblemsLayout/ProblemsLayout.js";
import InspectionLayout from "../InspectionLayout/InspectionLayout.js";
import InspectionInline from "../InspectionInline/InspectionInline.js";
import InspectionWarehouse from "../InspectionWarehouse/InspectionWarehouse.js"
import InspectionAnalysis from "../InspectionAnalysis/InspectionAnalysis.js";
import Layout from '../Layout/Layout.js';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<Layout />}>
    <Route index element={<Main />} />
    <Route path="problems" element={<ProblemsLayout />} >
      <Route index element={<Problems />} loader={problemsLoader} />
      <Route path="newproblem" element={<NewProblem />} />
      <Route path="analysis" element={<ProblemAnalysis />} />
    </Route>
    <Route path="problems/:id" element={<ProblemDetails />} />
    <Route path="inspection" element={<InspectionLayout />} >
      <Route index element={<InspectionInline />} />
      <Route path="warehouse" element={<InspectionWarehouse />} />
      <Route path="analysis" element={<InspectionAnalysis />} />
    </Route>
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
