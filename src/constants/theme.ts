import type { ThemeConfig } from "antd";
import { COLORS } from "./colors";

const THEME_CONFIG: ThemeConfig = {
  cssVar: true,
  token: {
    fontFamily: "Helvetica Now Display",
    colorPrimary: COLORS.primary,
    borderRadius: 6,
  },
  components: {
    Form: { verticalLabelPadding: "0px 0px 4px" },
    Menu: {
      darkItemBg: "#22252A",
      darkItemSelectedBg: "#B6BDC93D",
    },
    Layout: { siderBg: "#22252A" },
    Button: { controlHeight: 40 },
    Input: { controlHeight: 38 },
  },
};

export { THEME_CONFIG };
