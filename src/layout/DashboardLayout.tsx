import { Header, Sidebar } from "./components";
import { Outlet } from "react-router-dom";
import { Spinner } from "components/UI";
import { Suspense } from "react";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col gap-10 flex-1 py-6 px-10">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export { DashboardLayout };
