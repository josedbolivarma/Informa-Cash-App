import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DashboardRoutes } from "./dashboards";
import Loader from "../shade/Loaders/Loaders";

import "../index.scss";

export const AppRoutes = () => {
  //const { user } = useSelector((store: any) => store.user);
  const user = { token: true };
  
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/*`}
            element={
                <DashboardRoutes />
            }
          />

          <Route
            path="*"
            element={<Navigate to={`${process.env.PUBLIC_URL}`} />}
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};
