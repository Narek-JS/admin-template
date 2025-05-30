import { PageLayout } from "components/shared";
import { useTranslation } from "react-i18next";

const Dashboard: React.FC = () => {
  const { t } = useTranslation("dashboard");

  return (
    <PageLayout title={t("title")}>
      {/* TABLE */}
      Dashboard Table here
    </PageLayout>
  );
};

export default Dashboard;
