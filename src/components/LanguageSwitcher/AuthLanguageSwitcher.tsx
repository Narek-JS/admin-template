import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";

const languages: Record<string, string> = {
  en: "English",
  hy: "Հայերեն",
};

const AuthLanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    i18n.changeLanguage(e.key);
  };

  const items: MenuProps["items"] = Object.entries(languages).map(
    ([key, label]) => ({ key, label })
  );

  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={["click"]}>
      <Button className="!rounded-full" type="default">
        {languages[i18n.resolvedLanguage!]} <GlobalOutlined />
      </Button>
    </Dropdown>
  );
};

export { AuthLanguageSwitcher };
