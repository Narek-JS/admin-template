import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Dropdown, Image } from "antd";
import type { MenuProps } from "antd";

const languages: Record<string, string> = {
  en: "Eng (US)",
  hy: "Հայ (AM)",
};

const DashboardLanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange: MenuProps["onClick"] = (e) => {
    i18n.changeLanguage(e.key);
  };

  const items: MenuProps["items"] = Object.entries(languages).map(
    ([key, label]) => ({ key, label })
  );

  return (
    <Dropdown menu={{ items, onClick: handleLanguageChange }}>
      <div className="text-[#374557] flex items-center gap-2 cursor-pointer group">
        <Image
          src="/languageFlags/en.svg"
          preview={false}
          alt="US Flag"
          height={20}
          width={20}
        />
        <span>{languages[i18n.resolvedLanguage!]}</span>
        <DownOutlined className="group-hover:rotate-180 duration-300" />
      </div>
    </Dropdown>
  );
};

export { DashboardLanguageSwitcher };
