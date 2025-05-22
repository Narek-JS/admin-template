import { Spinner } from "../components/Spinner";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Suspense } from "react";

const DashboardLayout: React.FC = () => (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />

    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 p-6">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  </div>
);

export { DashboardLayout };
