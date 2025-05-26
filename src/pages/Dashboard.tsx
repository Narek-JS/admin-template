import { useTranslation } from "react-i18next";
import { Spinner } from "components/Spinner";
import { Button } from "antd";

const Dashboard = () => {
  const { t } = useTranslation("common");

  return (
    <main>
      <h1 className="font-bold">NAREL</h1>
      <Spinner />
      <Button type="primary">AntD Button</Button>
      <Button type="primary">AntD Button</Button>

      {t("dashboard")}
    </main>
  );
};

export default Dashboard;
