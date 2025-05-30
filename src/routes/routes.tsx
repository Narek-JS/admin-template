import { DashboardLayout } from "layout/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "layout/AuthLayout";
import { ROUTES } from "constants/routes";
import { lazy } from "react";

const Commission = lazy(() => import("pages/Commission"));
const Dashboard = lazy(() => import("pages/Dashboard"));
const Products = lazy(() => import("pages/Products"));
const Lessons = lazy(() => import("pages/Lessons"));

// Auth
const SignUp = lazy(() => import("pages/auth/SignUp"));
const SignIn = lazy(() => import("pages/auth/SignIn"));

const AppRoutes = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path={ROUTES.LESSONS} element={<Lessons />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.COMMISSION} element={<Commission />} />
    </Route>

    <Route element={<AuthLayout />}>
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
    </Route>
  </Routes>
);

export { AppRoutes as Routes };
