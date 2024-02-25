import React from "react";
import Main from '../Main/Main.js';
import Problems, { loader as problemsLoader } from "../Problems/Problems.js";
import ProblemDetails from "../ProblemDetails/ProblemDetails.js";
import NewProblem from "../NewProblem/NewProblem.js";
import ProblemsLayout from "../ProblemsLayout/ProblemsLayout.js";
import InspectionLayout from "../InspectionLayout/InspectionLayout.js";
import InspectionInline from "../InspectionInline/InspectionInline.js";
import InspectionWarehouse from "../InspectionWarehouse/InspectionWarehouse.js"
import InspectionAnalysis from "../InspectionAnalysis/InspectionAnalysis.js";
import AnalysisLayout from "../AnalysisLayout/AnalysisLayout.js";
import MainAnalysis from "../MainAnalysis/MainAnalysis.js";
import SupplierProblem from "../SupplierProblem/SupplierProblem.js";
import StorageProblem from "../StorageProblem/StorageProblem.js";
import ProblemByModel from "../ProblemByModel/ProblemByModel.js";
import ProblemBySystem from "../ProblemBySystem/ProblemBySystem.js";
import ProblemByAction from "../ProblemByAction/ProblemByAction.js";
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
      <Route path="analysis" element={<AnalysisLayout />}>
        <Route index element={<MainAnalysis />} />
        <Route path="supplier" element={<SupplierProblem />} />
        <Route path="storage" element={<StorageProblem />} />
        <Route path="model" element={<ProblemByModel />} />
        <Route path="system" element={<ProblemBySystem />} />
        <Route path="action" element={<ProblemByAction />} />
      </Route>
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
