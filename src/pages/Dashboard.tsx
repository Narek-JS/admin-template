import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation("common");

  return <main>{t("dashboard")}</main>;
};

export default Dashboard;
