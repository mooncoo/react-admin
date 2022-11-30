import React, { useState, useEffect, useRef } from "react";
import { Layout, FloatButton } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { getKeyName } from "@src/utils/publicFn";
import HomeBreadcrumb from "./home-breadcrumb";
import HomeTabs from "./home-tabs";

const { Content, Header, Footer } = Layout;
// const { Content, Footer } = Layout

const noNewTab = ["/login", "/signup"];

const ProContent = () => {
  const [tabActiveKey, setTabActiveKey] = useState("home");
  const [panesItem, setPanesItem] = useState({
    title: "",
    content: null,
    key: "",
    closable: false,
    path: "",
  });

  const pathRef = useRef("");
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    // 未登录
    // if (!token && pathname !== '/login') {
    //   navigate('login', { replace: true })
    //   return
    // }

    const { tabKey, title, element } = getKeyName(pathname);
    if (pathname === pathRef.current || noNewTab.includes(pathname)) {
      setTabActiveKey(tabKey);
    }

    const newPath = search ? pathname + search : pathname;
    pathRef.current = newPath;

    setPanesItem({
      title,
      content: element,
      key: tabKey,
      closable: tabKey !== "/",
      path: newPath,
    });
    setTabActiveKey(tabKey);
  }, [pathname, navigate, search]);

  return (
    <Layout className="layout-content-warp">
      <Header className="layout-header">
        <HomeBreadcrumb />
      </Header>
      <Content className="layout-content">
        <HomeTabs
          defaultActiveKey="home"
          panesItem={panesItem}
          tabActiveKey={tabActiveKey}
        />
      </Content>
      <Footer className="layout-footer">
        <FloatButton.BackTop
          target={() => document.querySelector("#container") as HTMLElement}
        >
          <VerticalAlignTopOutlined style={{ fontSize: 20 }} />
        </FloatButton.BackTop>
        <div>
          &copy; 2020-{new Date().getFullYear()} 江苏万米信息科技有限公司
        </div>
      </Footer>
    </Layout>
  );
};

export default ProContent;
