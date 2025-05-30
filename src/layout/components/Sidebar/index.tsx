import { NavLink, useNavigate } from "react-router-dom";
import { Button, Image, Layout, Menu } from "antd";
import { MENU_ITEMS } from "constants/MenuItems";
import { PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { UserCard } from "components/UserCard";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout.Sider
      className="p-5 rounded-tr-2xl rounded-br-2xl"
      trigger={null}
      collapsible
      width={260}
    >
      <div className="flex flex-col h-[calc(100vh-52px)]">
        <NavLink to="/">
          <Image
            src="/images/logo.png"
            preview={false}
            height={42}
            alt="Logo"
          />
        </NavLink>

        <div className="flex-auto overflow-auto my-3">
          <Menu
            items={MENU_ITEMS.map((item) => ({
              ...item,
              label: t(item.label),
            }))}
            selectedKeys={[location.pathname]}
            onClick={(e) => navigate(e.key)}
            mode="inline"
            theme="dark"
          />

          <Button
            icon={<PlusOutlined style={{ color: "#FFFFFF" }} />}
            className="mt-10"
            type="primary"
            block
          >
            {t("common:addProduct")}
          </Button>
        </div>

        <UserCard />
      </div>
    </Layout.Sider>
  );
};

export { Sidebar };
