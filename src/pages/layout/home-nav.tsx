import React from "react";
import { Button, Space } from "antd";
import { CodeOutlined, TeamOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const PrimaryNav = () => {
  const navigate = useNavigate();
  return (
    <Space>
      <Button
        type="link"
        icon={<CodeOutlined />}
        onClick={() => navigate("dashboard")}
      >
        多路由设置
      </Button>
      <Button type="link" icon={<TeamOutlined />}>
        Skyline for wkylin.w
      </Button>
    </Space>
  );
};

export default PrimaryNav;
