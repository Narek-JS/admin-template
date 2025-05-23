import { useTranslation } from "react-i18next";
import { Spinner } from "components/Spinner";

const Dashboard = () => {
  const { t } = useTranslation("common");

  return (
    <main>
      <Spinner />
      {t("dashboard")}
    </main>
  );
};

export default Dashboard;
