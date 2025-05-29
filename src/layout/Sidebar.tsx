import { MENU_ITEMS } from "constants/MenuItems";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout, Menu } from "antd";

interface Props {
  collapsed: boolean;
}

const Sidebar: React.FC<Props> = ({ collapsed }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleMenuNavigation = (key: string) => {
    navigate(key);
  };

  return (
    <Layout.Sider
      collapsed={collapsed}
      className="p-5"
      trigger={null}
      collapsible
      width={260}
    >
      <div className="mx-2 mb-4 text-white">LOGO</div>
      <Menu
        items={MENU_ITEMS.map((item) => ({ ...item, label: t(item.label) }))}
        onClick={(e) => handleMenuNavigation(e.key)}
        selectedKeys={[location.pathname]}
        mode="inline"
        theme="dark"
      />
    </Layout.Sider>
  );
};

export { Sidebar };
