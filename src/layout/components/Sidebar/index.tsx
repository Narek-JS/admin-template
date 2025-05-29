import { MENU_ITEMS } from "constants/MenuItems";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserCard } from "components/UserCard";
import { Avatar, Layout, Menu } from "antd";

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

      <div className="mt-5">
        {collapsed ? (
          <Avatar src="https://i.pravatar.cc/100" size={38} />
        ) : (
          <UserCard />
        )}
      </div>
    </Layout.Sider>
  );
};

export { Sidebar };
