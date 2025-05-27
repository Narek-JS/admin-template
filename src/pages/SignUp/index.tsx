import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp: React.FC = () => {
  const [form] = Form.useForm<{ name: string; password: string }>();
  const [isValid, setIsValid] = useState(false);
  const { t } = useTranslation("signup");

  const onValuesChange = () => {
    const { name, password } = form.getFieldsValue();
    const valid = !!(name && password) && password.length >= 8;
    setIsValid(valid);
  };

  const iconRenderer = (visible: boolean) => {
    return visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-gray-600 text-sm mt-2">
          {t("info")} <strong>sargis.aghabekyan@softconstruct.com</strong>
        </p>
      </div>

      <div className="w-full max-w-md p-6">
        <Form
          onValuesChange={onValuesChange}
          requiredMark={false}
          layout="vertical"
          form={form}
        >
          <Form.Item
            rules={[{ required: true }]}
            label={t("nameLabel")}
            name="name"
          >
            <Input placeholder={t("namePlaceholder")} />
          </Form.Item>

          <Form.Item
            rules={[{ required: true }, { min: 8 }]}
            label={t("passwordLabel")}
            name="password"
          >
            <Input.Password
              placeholder={t("passwordPlaceholder")}
              iconRender={iconRenderer}
            />
          </Form.Item>

          <div className="text-gray-500 mb-2">
            {isValid && <span className="text-green-600 font-medium">✔ </span>}
            {t("passwordRulesInfo")}
          </div>

          <Form.Item>
            <Button disabled={!isValid} htmlType="submit" type="primary" block>
              {t("continue")}
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="w-full max-w-md px-6 text-xs text-center text-[#00000099]">
        <span>{t("agreementPrefix")} </span>
        <Link to="#" className="font-extrabold text-[14px] !text-[#00000099]">
          {t("termsLinkText")}
        </Link>
        <span> {t("agreementMiddle")} </span>
        <Link to="#" className="font-extrabold text-[14px] !text-[#00000099]">
          {t("privacyLinkText")}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
