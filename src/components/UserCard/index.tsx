import {
  EnvironmentOutlined,
  EllipsisOutlined,
  PhoneOutlined,
  CloseOutlined,
  EditOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
import { COLORS } from "constants/colors";
import { Link } from "react-router-dom";
import { useState } from "react";

import classNames from "classnames";

const { Text } = Typography;

const UserCard = () => {
  const user = {
    lastName: "Anderson",
    name: "Sem",
    fullName: "Sem Anderson",
    position: "Product Owner",
    region: "Armenia",
    email: "semanderson@gmail.com",
    phone: "098738617",
  };

  const [open, setOpen] = useState(false);

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
            <Text className="!text-[#474747] !text-[12px]">
              <EnvironmentOutlined style={{ color: COLORS.primary }} />
              <span className="ml-2">{user.region}</span>
            </Text>

            <Link to={"tel:" + user.phone} className="!text-[#474747]">
              <PhoneOutlined style={{ color: COLORS.primary }} />
              <span className="ml-2">{user.phone}</span>
            </Link>

            <Link to={"mailto:" + user.email} className="!text-[#474747]">
              <MailOutlined style={{ color: COLORS.primary }} />
              <span className="mx-2">{user.email}</span>
              <EditOutlined />
            </Link>
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
