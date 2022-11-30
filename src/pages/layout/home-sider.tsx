import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  HomeOutlined,
  DeploymentUnitOutlined,
  HeatMapOutlined,
  ApartmentOutlined,
  QuestionCircleOutlined,
  FireOutlined,
  GlobalOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";

const pathSubmenu: any = {
  "/home": ["home"],
  "/coupons/add": ["/sub-act", "/sub-coupons"],
  "/coupons/edit": ["/sub-act", "/sub-coupons"],
  "/product": ["/sub-act", "/sub-coupons"],
};

const ProSider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedKeys, setSelectedKeys] = useState(["home"]);

  // 当前路由对应的 sub menu key
  const [openKeys, setOpenKeys] = useState(["home"]);

  // 提取放在redux中, tab 切换时改成 false
  const [isOpenChange, setIsOpenChange] = useState(false);

  // NOT READY FOR PRIME TIME
  // submenu keys of first level
  const [rootSubmenuKeys] = useState(["/sub-act", "/sub-list", "/sub-error"]);

  useEffect(() => {
    const selectedPathKey = pathname;
    setSelectedKeys([selectedPathKey]);
    setOpenKeys(isOpenChange ? openKeys : pathSubmenu[pathname] ?? openKeys);
  }, [pathname, openKeys, isOpenChange]);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find(
      (key: string) => openKeys.indexOf(key) === -1
    );
    setIsOpenChange(true);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSelect = ({ key }: { key: string }) => {
    navigate(key);
    setIsOpenChange(false);
  };

  const menuItems = [
    { label: "Home", key: "/", icon: <HomeOutlined /> },
    { label: "Demo", key: "/demo", icon: <GlobalOutlined /> },
    { label: "Parallax", key: "/parallax", icon: <FireOutlined /> },
    { label: "QrGenerate", key: "/qrcode", icon: <QrcodeOutlined /> },
    {
      label: "技术栈",
      key: "/sub-act",
      icon: <HeatMapOutlined />,
      children: [
        {
          label: "前端技术栈",
          key: "/sub-coupons",
          icon: <FireOutlined />,
          children: [
            { label: "Vue", key: "/coupons/add" },
            { label: "Angular", key: "/coupons/edit" },
          ],
        },
        {
          label: "后端技术栈",
          key: "/product",
          icon: <DeploymentUnitOutlined />,
        },
      ],
    },
    {
      label: "构建工具",
      key: "/sub-list",
      icon: <ApartmentOutlined />,
      children: [
        { label: "Webpack", key: "/coupons/list" },
        { label: "Vite", key: "/order/list" },
      ],
    },
    {
      label: "Error",
      key: "/sub-error",
      icon: <QuestionCircleOutlined />,
      children: [{ label: "ErrorBoundary", key: "/error" }],
    },
  ];

  return (
    <Layout.Sider
      width={208}
      collapsedWidth={80}
      // theme="dark"
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="home-sider"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        // theme="dark"
        className="home-menu"
        onOpenChange={onOpenChange}
        // onClick={onItemClick}
        onSelect={onSelect}
        items={menuItems}
      />
      <div role="button" className="home-link" onClick={onCollapse}>
        {collapsed ? (
          <MenuUnfoldOutlined
            style={{ fontSize: "16px", color: "#08c", cursor: "pointer" }}
          />
        ) : (
          <MenuFoldOutlined
            style={{ fontSize: "18px", color: "#08c", cursor: "pointer" }}
          />
        )}
      </div>
    </Layout.Sider>
  );
};

export default ProSider;
