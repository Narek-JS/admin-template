import { DashboardIcon, LessonsIcon } from "components/Icons";
import { ROUTES } from "./routes";
import i18n from "i18n";

const MENU = [
  {
    key: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
    label: "sidebar:dashboard",
  },
  {
    key: ROUTES.LESSONS,
    icon: <LessonsIcon />,
    label: i18n.t("sidebar:lessons"),
  },
];

export const getMenuItems = () => [
  {
    key: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
    label: i18n.t("sidebar:dashboard"),
  },
  {
    key: ROUTES.LESSONS,
    icon: <LessonsIcon />,
    label: i18n.t("sidebar:lessons"),
  },
];

export { MENU as MENU_ITEMS };
