import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  LazyRoute,
  appRoutes,
  mainRoutes,
} from "../";
import Error501 from "../../components/Pages/Authentication/501Error/501Error";
import App from "../../shade/layouts/App";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path={`/`} element={<App />}>
      
        {appRoutes.map(({ path, Component }: LazyRoute, i) => (
          <Route key={`${i}-${path}`} path={path} element={<Component />} />
        ))}

        <Route>
          {mainRoutes.map(({ path, Component }: LazyRoute, i) => (
            <Route key={`${i}-${path}`} path={path} element={<Component />} />
          ))}
        </Route>

        <Route>
          <Route
            path={`${process.env.PUBLIC_URL}/pages/Authentication/501error`}
            element={<Error501 />}
          />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to={`${process.env.PUBLIC_URL}`} />} />

      
    </Routes>
  );
};
