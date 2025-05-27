import { MENU_ITEMS } from "constants/MenuItems";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuNavigation = (key: string) => {
    navigate(key);
  };

  return (
    <Layout.Sider className="p-5" width={260} trigger={null} collapsible>
      <div className="mx-2 mb-4 text-white">LOGO</div>
      <Menu
        onClick={(e) => handleMenuNavigation(e.key)}
        selectedKeys={[location.pathname]}
        items={MENU_ITEMS}
        mode="inline"
        theme="dark"
      />
    </Layout.Sider>
  );
};

export { Sidebar };
