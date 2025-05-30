import { PageLayout } from "components/shared";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

const Products: React.FC = () => {
  const { t } = useTranslation("products");
  const navigate = useNavigate();

  return (
    <PageLayout
      onClickAddButton={() => navigate(ROUTES.LESSONS)}
      addButtonTitle={t("newProduct")}
      title={t("title")}
    >
      {/* TABLE */}
      Products Table here
    </PageLayout>
  );
};

export default Products;
