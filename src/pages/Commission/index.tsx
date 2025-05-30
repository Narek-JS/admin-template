import { PageLayout } from "components/shared";
import { useTranslation } from "react-i18next";

const Commission: React.FC = () => {
  const { t } = useTranslation("commission");

  return (
    <PageLayout title={t("title")} extra={[<div>Commission Extra</div>]}>
      {/* TABLE */}
      Commission Table here
    </PageLayout>
  );
};

export default Commission;
