import { AuthLanguageSwitcher } from "components/LanguageSwitcher";
import { Spinner } from "../components/Spinner";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const AuthLayout: React.FC = () => {
  return (
    <main className="p-4 flex-1 overflow-auto h-screen">
      <div className="absolute top-4 right-4 z-10">
        <AuthLanguageSwitcher />
      </div>

      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export { AuthLayout };
