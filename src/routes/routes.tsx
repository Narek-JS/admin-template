import { DashboardLayout } from "../layout/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));

const AppRoutes = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="products" element={<Products />} />
    </Route>

    <Route path="login" element={<Login />} />
  </Routes>
);

export { AppRoutes };
