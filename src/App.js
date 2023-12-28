import { Routes, Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import './App.css';

import HomePage from "./pages/HomePage/HomePage";
import DriftPage from "./pages/DriftPage/DriftPage";
import TimeAttackPage from "./pages/TimeAttackPage/TimeAttackPage";
import ForzaPage from "./pages/ForzaPage/ForzaPage";
import LayoutMain from "./layouts/main/LayoutMain";

export default function App() {


  return (
      <>
        <Routes>
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Route>
        </Routes>
      </>
  );
}
