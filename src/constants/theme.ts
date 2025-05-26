import type { ThemeConfig } from "antd";
import { COLORS } from "./colors";

const THEME_CONFIG: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: COLORS.primary,
    borderRadius: 6,
    fontFamily: "HelveticaNowDisplay",
  },
  components: {
    Form: { verticalLabelPadding: "0px 0px 4px" },
  },
};

export { THEME_CONFIG };
