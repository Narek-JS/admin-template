import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { DashboardLanguageSwitcher } from "components/LanguageSwitcher";
import type { Dispatch, SetStateAction } from "react";
import { Notifications } from "components/Icons";
import { Button, Layout, theme } from "antd";

interface Props {
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  collapsed: boolean;
}

const Header: React.FC<Props> = ({ setCollapsed, collapsed }) => {
  const { token } = theme.useToken();

  return (
    <Layout.Header style={{ padding: 0, background: token.colorBgContainer }}>
      <div className="flex justify-between pr-[32px]">
        <Button
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          className="!text-[16px] !w-[54px] !h-[54px]"
          onClick={() => setCollapsed(!collapsed)}
          type="text"
        />

        <div className="flex items-center gap-8">
          <DashboardLanguageSwitcher />
          <Notifications className="max-w-[32px] max-h-[35px] cursor-pointer" />
        </div>
      </div>
    </Layout.Header>
  );
};

export { Header };
