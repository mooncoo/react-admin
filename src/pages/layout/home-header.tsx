import React from "react";
import { Layout, Space, Dropdown, Switch } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  GithubOutlined,
  DownOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as LightSvg } from '@assets/svg/light.svg'
// import { ReactComponent as DarkSvg } from '@assets/svg/dark.svg'
// import LightSvg from '@assets/svg/light.svg'
// import DarkSvg from '@assets/svg/dark.svg'

import HomeNav from "./home-nav";
const LayoutHeader = Layout.Header;
const HomeHeader = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: <Space>个人中心</Space>,
      icon: <UserOutlined />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      key: "2",
      label: <Space>个人设置</Space>,
      icon: <SmileOutlined />,
      onClick: () => {
        navigate("/setting");
      },
    },
    {
      key: "3",
      label: <Space>退出登录</Space>,
      icon: <LogoutOutlined />,
      onClick: () => {
        navigate("/login");
      },
    },
  ];

  return (
    <LayoutHeader className="home-header">
      <div
        className="home-header-logo"
        role="button"
        onClick={() => navigate("/")}
      >
        {/* Pro React <Tag>{process.env.DEPLOYED_ENV}</Tag> */}
        Pro React
      </div>
      <div className="home-header-meta">
        <div className="home-header-menu">
          <HomeNav />
        </div>
        <div className="home-header-right">
          <Space
            direction="horizontal"
            style={{ cursor: "pointer", paddingRight: 8 }}
          >
            <Switch
            // checkedChildren={<Icon component={LightSvg} />}
            // unCheckedChildren={<Icon component={DarkSvg} />}
            />
            <GithubOutlined style={{ fontSize: 18 }} />
          </Space>
          <Dropdown
            arrow
            menu={{
              items,
            }}
          >
            <Space>
              wkylin.w
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>
      </div>
    </LayoutHeader>
  );
};

export default HomeHeader;
