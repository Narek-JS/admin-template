import { Header, Sidebar } from "./components";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "components/UI";

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar collapsed={collapsed} />

      <div className="flex flex-col flex-1">
        <Header setCollapsed={setCollapsed} collapsed={collapsed} />
        <main className="flex-1 p-6">
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export { DashboardLayout };
