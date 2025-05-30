import { DashboardIcon, LessonsIcon, ProductsIcon } from "components/Icons";
import { CommissionIcon } from "components/Icons/CommissionIcon";
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
  {
    key: ROUTES.PRODUCTS,
    icon: <ProductsIcon />,
    label: "sidebar:products",
  },
  {
    key: ROUTES.COMMISSION,
    icon: <CommissionIcon />,
    label: "sidebar:commission",
  },
];

export { MENU as MENU_ITEMS };
