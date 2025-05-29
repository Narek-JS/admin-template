import {
  EnvironmentOutlined,
  EllipsisOutlined,
  PhoneOutlined,
  CloseOutlined,
  EditOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { COLORS } from "constants/colors";
import { ROUTES } from "constants/routes";
import { cutEmail } from "utils/string";
import { useState } from "react";

import classNames from "classnames";

const { Text } = Typography;

const UserCard = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  const [open, setOpen] = useState(false);
  const user = {
    email: cutEmail("narek.petrosyan@gmail.com"),
    position: "Product Owner",
    fullName: "Sem Anderson",
    lastName: "Anderson",
    phone: "098738617",
    region: "Armenia",
    name: "Sem",
  };

  const logout = () => {
    navigate(ROUTES.SIGN_IN);
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        className={classNames("duration-300 ease-in-out overflow-hidden", {
          "max-h-[300px]": open,
          "max-h-0": !open,
        })}
      >
        <Card style={{ padding: 16 }} styles={{ body: { padding: 0 } }}>
          <CloseOutlined
            className="absolute right-4 cursor-pointer"
            onClick={() => setOpen(false)}
          />

          <div className="flex flex-col gap-3">
            <Avatar src="https://i.pravatar.cc/100" size={50} />

            <div className="flex flex-col">
              <Text strong className="!text-[#474747]">
                {user.fullName}
              </Text>
              <Text type="secondary" className="!text-[12px]">
                {user.position}
              </Text>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2.5 text-[12px]">
            <Text>
              <EnvironmentOutlined style={{ color: COLORS.primary }} />
              <span className="ml-2">{user.region}</span>
            </Text>

            <Text className="text-pr">
              <PhoneOutlined style={{ color: COLORS.primary }} />
              <span className="ml-2">{user.phone}</span>
            </Text>

            <Text title={user.email}>
              <MailOutlined style={{ color: COLORS.primary }} />
              <span className="mx-2">{user.email}</span>
              <EditOutlined />
            </Text>

            <Button type="text" className="text-primary" onClick={logout}>
              <b className="text-primary">{t("logout")}</b>
            </Button>
          </div>
        </Card>
      </div>

      <Card
        className="!bg-[#5459603D] relative"
        styles={{ body: { padding: "12px" } }}
        variant="borderless"
      >
        <div className="flex items-center gap-2.5">
          <Avatar src="https://i.pravatar.cc/100" size={38} />

          <div className="flex flex-col">
            <Text strong className="!text-[#FFFFFF]">
              {user.name}
            </Text>
            <Text className="!text-[#AAA]">{user.position}</Text>
          </div>
        </div>

        <EllipsisOutlined
          className="!text-[#AAA] !text-[20px] cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
          onClick={() => setOpen(true)}
          rotate={90}
        />
      </Card>
    </div>
  );
};

export { UserCard };
