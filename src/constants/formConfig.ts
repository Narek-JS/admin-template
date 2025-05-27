import i18n from "i18n";

const FORM_CONFIG = {
  validateMessages: {
    required: i18n.t("form:field_is_required"),
    string: {
      max: ((_name: string, maxLength: number) => {
        return i18n.t("form:string_max_length", { maxLength });
      }) as never,
      min: ((_name: string, minLength: number) => {
        return i18n.t("form:string_min_length", { minLength });
      }) as never,
    },
  },
};

export { FORM_CONFIG };
