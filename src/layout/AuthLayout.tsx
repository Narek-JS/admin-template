import { Spinner } from "../components/Spinner";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const AuthLayout: React.FC = () => (
  <main className="p-4 flex-1 overflow-auto h-screen bg-red-400">
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  </main>
);

export { AuthLayout };
