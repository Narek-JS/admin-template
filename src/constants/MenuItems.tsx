import { DashboardIcon, LessonsIcon } from "components/Icons";
import { ROUTES } from "./routes";

const MENU = [
  {
    key: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
    label: "sidebar:dashboard",
  },
  {
    key: ROUTES.LESSONS,
    icon: <LessonsIcon />,
    label: "sidebar:lessons",
  },
];

export { MENU as MENU_ITEMS };
