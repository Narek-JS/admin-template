import { DashboardLayout } from "layout/DashboardLayout";
import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "layout/AuthLayout";
import { ROUTES } from "constants/routes";
import { lazy } from "react";

const Dashboard = lazy(() => import("pages/Dashboard"));
const SignUp = lazy(() => import("pages/SignUp"));
const SignIn = lazy(() => import("pages/SignIn"));

const AppRoutes = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
    </Route>

    <Route element={<AuthLayout />}>
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
    </Route>
  </Routes>
);

export { AppRoutes as Routes };
