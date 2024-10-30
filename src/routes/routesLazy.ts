import React, { LazyExoticComponent } from "react";
type JSXComponent = () => JSX.Element;

export interface LazyRoute {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent | any;
}

const Dashboard = React.lazy(() => import("../components/App/pages/Dashboard/Dashboard"));

// Rutas

// Amounts
const ListAmounts = React.lazy(() => import("../components/App/Modules/Amounts/ListAmounts/ListAmounts"));
const CreateOrEditAmount = React.lazy(() => import("../components/App/Modules/Amounts/CreateOrEditAmount/CreateOrEditAmount"));

// Categories
const ListCategories = React.lazy(() => import("../components/App/pages/Categories/ListCategories"));
const CreateOrEditCategory = React.lazy(() => import("../components/App/pages/Categories/CreateOrEditCategory"));


//status errors 
const Error404 = React.lazy(() =>
  import("./../components/Pages/Authentication/404Error/404Error")
);
const Error500 = React.lazy(() =>
  import("./../components/Pages/Authentication/500Error/500Error")
);


export const mainRoutes: LazyRoute[] = [
  {
    path: 'app/gastos',
    Component: ListAmounts
  },
  { 
    path: 'app/editargasto',
    Component: CreateOrEditAmount
  },

  { 
    path: 'app/agregargasto',
    Component: CreateOrEditAmount
  },
  { 
    path: 'app/listacategorias',
    Component: ListCategories
  },
  { 
    path: 'app/agregarcategoria',
    Component: CreateOrEditCategory
  },
  { 
    path: 'app/editarcategoria',
    Component: CreateOrEditCategory
  },
]

export const appRoutes: LazyRoute[] = [
  {
    path: ``,
    Component: Dashboard
  },
  {
    path: `inicio`,
    Component: Dashboard
  }
]

export const customPagesRoutes: LazyRoute[] = [
  {
    path: `pages/Authentication/404error`,
    Component: Error404
  },
  {
    path: `pages/Authentication/500error`,
    Component: Error500
  },
  {
    path: `*`,
    Component: Error404
  }
];