import { DashboardLanguageSwitcher } from "components/LanguageSwitcher";
import { Notifications } from "components/Icons";
import { Input, Layout } from "antd";

const Header: React.FC = () => {
  return (
    <Layout.Header>
      <div className="flex justify-between items-center">
        <Input.Search
          placeholder="Search here..."
          style={{ maxWidth: 450 }}
          variant="filled"
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
