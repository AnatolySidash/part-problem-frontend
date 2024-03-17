import React from "react";
import Main from '../Main/Main.js';
import Problems from "../Problems/Problems.js";
import ProblemDetails from "../ProblemDetails/ProblemDetails.js";
import NewProblem from "../NewProblem/NewProblem.js";
import ProblemsLayout, { loader as problemsLoader } from "../ProblemsLayout/ProblemsLayout.js";
import InspectionLayout from "../InspectionLayout/InspectionLayout.js";
import InspectionInline from "../InspectionInline/InspectionInline.js";
import InspectionWarehouse from "../InspectionWarehouse/InspectionWarehouse.js"
import InspectionAnalysis from "../InspectionAnalysis/InspectionAnalysis.js";
import AnalysisLayout from "../AnalysisLayout/AnalysisLayout.js";
import MainAnalysis from "../ProblemAnalysisPages/MainAnalysis/MainAnalysis.js";
import SupplierProblem from "../ProblemAnalysisPages/SupplierProblem/SupplierProblem.js";
import StorageProblem from "../ProblemAnalysisPages/StorageProblem/StorageProblem.js";
import ProblemByModel from "../ProblemAnalysisPages/ProblemByModel//ProblemByModel.js";
import ProblemBySystem from "../ProblemAnalysisPages/ProblemBySystem/ProblemBySystem.js";
import ProblemByAction from "../ProblemAnalysisPages/ProblemByAction/ProblemByAction.js";
import ProblemBySpecialist from "../ProblemAnalysisPages/ProblemBySpecialist/ProblemBySpecialist.js"
import SolarisModel from "../ModelPages/SolarisModel.js";
import RioModel from "../ModelPages/RioModel.js";
import CretaModel from "../ModelPages/CretaModel.js";
import ExteriorSystem from "../SystemPages/ExteriorSystem.js";
import InteriorSystem from "../SystemPages/InteriorSystem.js";
import MovingSystem from "../SystemPages/MovingSystem.js";
import ChassisSystem from "../SystemPages/ChassisSystem.js";
import ElectricSystem from "../SystemPages/ElectricSystem.js";
import BackToSupplier from "../ActionPages/BackToSupplier.js";
import BackToLine from "../ActionPages/BackToLine.js";
import Scrap from "../ActionPages/Scrap.js";
import Other from "../ActionPages/Other.js";
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
    <Route path="problems" element={<ProblemsLayout />} loader={problemsLoader} >
      <Route index element={<Problems />} />
      <Route path="newproblem" element={<NewProblem />} />
      <Route path="analysis" element={<AnalysisLayout />}>
        <Route index element={<MainAnalysis />} />
        <Route path="supplier" element={<SupplierProblem />} />
        <Route path="storage" element={<StorageProblem />} />
        <Route path="model" element={<ProblemByModel />} >
          <Route index element={<SolarisModel />} />
          <Route path="rio" element={<RioModel />} />
          <Route path="creta" element={<CretaModel />} />
        </Route>
        <Route path="system" element={<ProblemBySystem />} >
          <Route index element={<ExteriorSystem />} />
          <Route path="interior" element={<InteriorSystem />} />
          <Route path="moving" element={<MovingSystem />} />
          <Route path="chassis" element={<ChassisSystem />} />
          <Route path="electric" element={<ElectricSystem />} />
        </Route>
        <Route path="action" element={<ProblemByAction />} >
          <Route index element={<BackToSupplier />} />
          <Route path="backToLine" element={<BackToLine />} />
          <Route path="scrap" element={<Scrap />} />
          <Route path="other" element={<Other />} />
        </Route>
        <Route path="specialist" element={<ProblemBySpecialist />} />
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
