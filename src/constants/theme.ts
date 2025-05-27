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
    Layout: {
      siderBg: "#22252A",
    },
    Form: { verticalLabelPadding: "0px 0px 4px" },
    Button: {
      controlHeight: 38,
    },
    Input: {
      controlHeight: 38,
    },
  },
};

export { THEME_CONFIG };
