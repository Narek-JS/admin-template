import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div className="text-xl font-medium">Header</div>
      <div className="flex gap-4">
        <button onClick={() => i18n.changeLanguage("hy")}>hy</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
      </div>
    </header>
  );
};

export { Header };
