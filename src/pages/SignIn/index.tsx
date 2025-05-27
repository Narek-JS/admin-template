import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn: React.FC = () => {
  const [form] = Form.useForm<{ email: string; password: string }>();
  const [isValid, setIsValid] = useState(false);
  const { t } = useTranslation("signin");

  const onValuesChange = () => {
    const { email, password } = form.getFieldsValue();
    const valid = !!(email && password) && password.length >= 8;
    setIsValid(valid);
  };

  const iconRenderer = (visible: boolean) => {
    return visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />;
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-md px-6 text-center mb-6">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-gray-600 text-sm mt-2">{t("infoText-1")}</p>
        <p className="text-gray-600 text-sm">{t("infoText-2")}</p>
      </div>

      <div className="w-full max-w-md p-6">
        <Form
          onValuesChange={onValuesChange}
          requiredMark={false}
          layout="vertical"
          form={form}
        >
          <Form.Item rules={[{ required: true }]} name="email">
            <Input placeholder={t("emailPlaceholder")} />
          </Form.Item>

          <Form.Item rules={[{ required: true }, { min: 8 }]} name="password">
            <Input.Password
              placeholder={t("passwordPlaceholder")}
              iconRender={iconRenderer}
            />
          </Form.Item>

          <Form.Item>
            <Button disabled={!isValid} htmlType="submit" type="primary" block>
              {t("login")}
            </Button>
          </Form.Item>
        </Form>

        <Link
          to="/"
          className="flex justify-center font-extrabold !text-[#00000099] text-lg"
        >
          {t("needHelp")}
        </Link>
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

export default SignIn;
